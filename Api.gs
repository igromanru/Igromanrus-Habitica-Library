/**
 * Author: Igromanru
 * Source: https://github.com/igromanru/Igromanrus-Habitica-Library
 */

const AUTHOR_ID = "06b046d4-160a-4a20-b527-b74385052f0e";

const Headers = {
  "x-api-user": "",
  "x-api-key": "",
  "x-client": AUTHOR_ID + '-' + DriveApp.getFileById(ScriptApp.getScriptId()).getName()
};

const BaseUrl = 'https://habitica.com/api';
const PartyAPI = BaseUrl + '/v3/groups/party';
const UserAPI = BaseUrl + '/v3/user';
const GroupsAPI = BaseUrl + '/v3/groups';
const MembersAPI = BaseUrl + '/v3/members';
const TasksAPI = BaseUrl + '/v3/tasks';

/**
 * Sets UserId and API Token/Key to the global Headers object that is used for all API requests
 */
function setApiAuthorization(userId, apiToken) {
  if (typeof userId !== 'string' || !userId) {
    console.error(`setApiAuthorization: the userId parameter is invalid!`);
    return;
  }
  if (typeof apiToken !== 'string' || !apiToken) {
    console.error(`setApiAuthorization: the apiToken parameter is invalid!`);
    return;
  }
  
  Headers["x-api-user"] = userId;
  Headers["x-api-key"] = apiToken;
}

/**
 * Removes UserId and API Token/Key from global Headers object
 */
function removeApiAuthorization() {
  Headers["x-api-user"] = "";
  Headers["x-api-key"] = "";
}

/**
 * Returns true, if properties "x-api-user" and "x-api-key" in the global Headers object have values
 */
function isAuthorizationHeaderSet() {
  return Headers["x-api-user"] && typeof Headers["x-api-user"] === "string"
          && Headers["x-api-user"] && typeof Headers["x-api-key"] === "string";
}

/**
 * Returns the global Headers object with properties "x-api-user", "x-api-key", "x-client"
 */
function getRequestHeaders() {
  return Headers;
}

/**
 * Returns user object of the current API user
 * 
 * https://habitica.com/apidoc/#api-User-UserGet
 */
function getUser() {
  const result = fetchGet(UserAPI);
  if (result !== undefined && result && typeof result.data === 'object') {
    return result.data;
  }
  
  return undefined;
}

/**
 * Returns party object for the current API user
 */
function getParty() {
  const result = fetchGet(PartyAPI);
  if (result !== undefined && result && typeof result.data === 'object') {
    return result.data;
  }
  
  return undefined;
}

/**
 * Get all members for the party
 * 
 * See: https://habitica.com/apidoc/#api-Member-GetMembersForGroup
 */
function getPartyMembers(includeAllPublicFields = false, includeTasks = false, limit = 30, lastId = '') {
  return getGroupMembers('party', includeAllPublicFields, includeTasks, limit, lastId);
}

/**
 * Get all members for a group
 * It allows to get more detailed infomation about members
 * 
 * Returns an array of members or an empty array.
 * 
 * See: https://habitica.com/apidoc/#api-Member-GetMembersForGroup
 */
function getGroupMembers(groupId, includeAllPublicFields = false, includeTasks = false, limit = 30, lastId = '') {
  if (groupId) {
    const lastIdParam = lastId ? `&lastId=${lastId}` : '';
    const result = fetchGet(`${GroupsAPI}/${groupId}/members?includeTasks=${includeTasks}&includeAllPublicFields=${includeAllPublicFields}&limit=${limit}${lastIdParam}`);
    if (result !== undefined && result && Array.isArray(result.data)) {
      return result.data;
    }
  }

  return [];
}

/**
 * Returns member object of for a specific member
 * 
 * https://habitica.com/apidoc/#api-Member-GetMember
 */
function getMemberById(memberId) {
  if (memberId) {
    const result = fetchGet(`${MembersAPI}/${memberId}`);
    if (result !== undefined && result && typeof result.data === 'object') {
      return result.data;
    }
  }
  
  return undefined;
}

/**
 * Returns array of chat objects from the current party
 * 
 * https://habitica.com/apidoc/#api-Chat-GetChat
 */
function getPartyChat() {
  return getGroupChat('party');
}

/**
 * Returns array of chat objects from a groud
 * 
 * https://habitica.com/apidoc/#api-Chat-GetChat
 */
function getGroupChat(groupId) {
  if (groupId) {
    const result = fetchGet(`${GroupsAPI}/${groupId}/chat`);
    if (result !== undefined && result && Array.isArray(result.data)) {
      return result.data;
    }
  }

  return [];
}

/**
 * Send a private message to a user
 * 
 * https://habitica.com/apidoc/#api-Member-SendPrivateMessage
 */
function sendPrivateMessage(targetUserId, messageText) {
  if (targetUserId && messageText) {
    console.log('sendPrivateMessage: targetUserId: ' + targetUserId + '  \nmessageText: ' + messageText);
    const requestBody = {
      message: messageText,
      toUserId: targetUserId
    };
    const result = fetchPost(`${MembersAPI}/send-private-message`, requestBody);
    if (result !== undefined && result) {
      return result.success === true;
    }
  }
  return false;
}

/**
 * sendPrivateMessage, but uses the Id of the API user as target
 */
function sendPrivateMessageToSelf(messageText) {
  return sendPrivateMessage(Headers["x-api-user"], messageText);
}

/**
 * sendMessageToGroup, but uses 'party' as groupId
 */
function sendMessageToParty(messageText) {
  return sendMessageToGroup('party', messageText);
}

/**
 * Send a message to a group (party)
 * 
 * Returns true if the srever responded with "success", otherwise false
 * https://habitica.com/apidoc/#api-Chat-PostChat
 */
function sendMessageToGroup(targetGroupId, messageText) {
  if (targetGroupId && messageText) {
    console.log(`sendMessageToGroup: targetGroupId: ${targetGroupId} \nmessageText: ${messageText}`);
    const requestBody = {
      message: messageText
    };

    const result = fetchPost(`${GroupsAPI}/${targetGroupId}/chat`, requestBody);
    if (result !== undefined && result) {
      return result.success === true;
    }
  }

  return false;
}

/**
 * Sends the request to buy a Health Postion
 * 
 * Returns reponse object, undefined on error
 * See: https://habitica.com/apidoc/#api-User-UserBuyPotion
 */
function buyHealthPotion() {
  const result = fetchPost(`${UserAPI}/buy-health-potion`);
  if (result !== undefined && result && result.success === true) {
    return result;
  }
  return undefined;
}

/**
 * Calls toggleSleep in a controlled fashion
 */
function setSleep(user, sleepValue = true) {
  if (user) {
    if (typeof sleepValue === 'boolean') {
      if (user.preferences.sleep !== sleepValue) {
        return user.preferences.sleep = toggleSleep();
      }
    } else {
      console.error(`setSleep: value is not a boolean: ${sleepValue}`);
    }
  } else {
    console.error(`setSleep: user object not set`);
  }
  return false;
}

/**
 * Toggle sleep state (Tavern)
 * 
 * Returns true if sleeping, else false
 * https://habitica.com/apidoc/#api-User-UserSleep
 */
function toggleSleep() {
  let isSleeping = false;
  console.log('Toggling sleep');

  const result = fetchPost(`${UserAPI}/sleep`);
  if (result !== undefined && result && typeof result.data === 'boolean') {
    isSleeping = result.data;
  }

  return isSleeping;
}

/**
 * Buy an Enchanted Armoire item
 * 
 * https://habitica.com/apidoc/#api-User-UserBuyArmoire
 */
function buyEnchantedArmoire() {
  console.log('Buying Enchanted Armoire');
  const result = fetchPost(`${UserAPI}/buy-armoire`);
  if (result !== undefined && result) {
    console.log(`Armoire json: ${JSON.stringify(result.data.armoire)}`);
    console.log(`Message: ${result.message}`);
    return result;
  }
  return undefined;
}

/**
 * Wrapper for the function buyGemPurchasableItem to buy Gems
 * 
 * Returns true, if successful, otherwise false
 */
function buyGems(amount = 1) {
  console.log(`Buying ${amount} gems`);
  return buyGemPurchasableItem("gems", "gem", amount);
}

/**
 * Purchase Gem or Gem-purchasable item
 * 
 * Returns true, if successful, otherwise false
 * https://habitica.com/apidoc/#api-User-UserPurchase
 */
function buyGemPurchasableItem(type, key, amount = 1) {
  if ((type === "gems" && key === "gem") || type === "eggs" || type === "hatchingPotions"
      || type === "premiumHatchingPotions" || type === "food" || type === "quests" || type === "gear" || type === "pets") {
    console.log(`Buying Gem Purchasable Item (type: ${type}, key: ${key}, amount: ${amount})`);
    const requestBody = {
      quantity: amount
    };
    const result = fetchPost(`${UserAPI}/purchase/${type}/${key}`, requestBody);
    if (result !== undefined && result) {
      return result.success === true;
    }
  } else {
    console.error(`buyPurchasableItem: type (${type}) or key (${key}) are invalid`);
  }

  return false;
}

/**
 * Accept the current quest invite
 */
function acceptQuest() {
  const result = fetchPost(`${PartyAPI}/quests/accept`);
  return result !== undefined && result && result.success === true;
}

/**
 * Force start's the current party quest
 * 
 * Returns a quest object
 */
function forceStartQuest() {
  const result = fetchPost(`${PartyAPI}/quests/force-start`);
  if (result !== undefined && result && result.success === true && typeof result.data === 'object') {
    return result.data;
  }
  return undefined;
}

/**
 * Forces the user to cron if they haven't already cronned today.
 * 
 * Run this function just after the user's day start time.
 */
function runCron() {
  console.log('Running cron');
  const result = fetchPost(`${BaseUrl}/v3/cron`);
  if (result !== undefined && result && result.success === true) {
    console.log('Cron was successful');
    return true;
  }
  return false;
}

/**
 * Set Custom Day Start time
 * 
 * Valid dayStart values: 0-23
 * Default dayStart: 0
 * See: https://habitica.com/apidoc/#api-User-setCustomDayStart
 */
function customDayStart(dayStart = 0) {
  const requestBody = {
    'dayStart': dayStart
  };
  const result = fetchPost(`${UserAPI}/custom-day-start`, requestBody);
  if (result !== undefined && result && result.success === true) {
    console.log(`Day Start was successfully set to ${dayStart}`);
    return true;
  }
  return false;
}

/**
 * Allocate a single Stat Point to a specific Stat
 * 
 * Possible parameter values: 
 *  str = Strength
 *  con = Constitution
 *  int = Intelligence
 *  per = Perception
 * See: https://habitica.com/apidoc/#api-User-UserAllocate
 */
function allocateStatPoint(stat) {
  if (stat) {
    if (stat == "str" || stat == "con" || stat == "int" || stat == "per") {
      console.log(`Allocating single Stat Point (${stat})`);

      const result = fetchPost(`${UserAPI}/allocate?stat=${stat}`);
      if (result !== undefined && result && result.success === true) {
        console.log('Stat Point successfully allocated');
      }
    } else {
      console.log(`allocateStatPoint Error: Stat "${stat}" is not a valid parameter`)
    }
  }
}

/**
 * Allocate multiple Stat Points to a specific Stat
 * 
 * Possible parameter values: 
 *  str = Strength
 *  con = Constitution
 *  int = Intelligence
 *  per = Perception
 * See: https://habitica.com/apidoc/#api-User-UserAllocateBulk
 */
function allocateStatPoints(stat, amount) {
  if (stat && amount) {
    if (stat == "str" || stat == "con" || stat == "int" || stat == "per") {
      console.log(`Allocating ${amount} Stat Points to the Stat "${stat}"`);

      const requestBody = {
        stats: {
          [stat]: amount
        }
      };
      const result = fetchPost(`${UserAPI}/allocate-bulk`, requestBody);
      if (result !== undefined && result && result.success === true) {
        console.log('Stat Point successfully allocated');
      }
    } else {
      console.log(`allocateStatPoints Error: Stat "${stat}" is not a valid parameter`)
    }
  }
}

/**
 * Returns an array of tasks as data
 * 
 * Allowed types: "habits", "dailys", "todos", "rewards", "completedTodos" or empty
 * If the type parameter is not specified, returns all tasks
 */
function getUserTasks(type = '', dueDate = undefined) {
  if (!type || type == "habits" || type == "dailys" || type == "todos" || type == "rewards" || type == "completedTodos") {
    type = type ? `&type=${type}` : '';
    dueDate = dueDate ? `&dueDate=${dueDate.toISOString()}` : '';
    const result = fetchGet(`${TasksAPI}/user?${type}${dueDate}`);
    if (result !== undefined && result && Array.isArray(result.data)) {
      return result.data;
    }
  } else {
    console.error(`${arguments.callee.name}: Invalid type: ${type}`);
  }

  return [];
}

/**
 * Score/Check a task
 * 
 * Valid direction is only "up" or "down"
 * Returns an object with "_tmp.drop", "buffs" and typical user stats (hp, mp, lvl etc.)
 * 
 * See: https://habitica.com/apidoc/#api-Task-ScoreTask
 */
function scoreTask(taskId, direction = 'up') {
  if (taskId && (direction === 'up' || direction === 'down')) {
    const result = fetchPost(`${TasksAPI}/${taskId}/score/${direction}`);
    if (result !== undefined && result && typeof result.data === 'object') {
      return result.data;
    }
  }
  
  return undefined;
}

/**
 * Cast a skill/spell on a target
 * 
 * Returns response.data which CAN contain "partyMembers" (array of members) or "tasks" (array of tasks) and "user" with updated stats
 * 
 * See: https://habitica.com/apidoc/#api-User-UserCast
 */
function castSkill(spellId, targetId = '') {
  if (spellId && 
      (spellId === "fireball" || spellId === "mpheal" || spellId === "earth" || spellId === "frost" // Mage skills
      || spellId === "smash" || spellId === "defensiveStance" || spellId === "valorousPresence" || spellId === "intimidate" // Warrior skills
      || spellId === "pickPocket" || spellId === "backStab" || spellId === "toolsOfTrade" || spellId === "stealth" // Rogue skills
      || spellId === "heal" || spellId === "protectAura" || spellId === "brightness" || spellId === "healAll" // Healer skills
      || spellId === "snowball" || spellId === "spookySparkles" || spellId === "seafoam" || spellId === "shinySeed" // Transformation Items
      )) {
    targetId = targetId ? `?targetId=${targetId}` : '';
    const result = fetchPost(`${UserAPI}/class/cast/${spellId}${targetId}`);
    if (result !== undefined && result && typeof result.data === 'object') {
      return result.data;
    }
  } else {
    console.error(`castSkill: spellId is invalid: ${spellId}`);
  }
  return undefined;
}

/**
 * Returns an array of user's webhooks
 */
function getWebHooks() {
  const result = fetchGet(`${UserAPI}/webhook`);
  if (result !== undefined && result && Array.isArray(result.data)) {
    return result.data;
  }
  
  return [];
}

/**
 * Get all available content objects
 * 
 * See: https://habitica.com/apidoc/#api-Content-ContentGet
 */
function getHabiticaContent(language = "en") {
  const result = fetchGet(`${BaseUrl}/v4/content?language=${language}`, true);
  if (result !== undefined && result && typeof result.data === 'object') {
    return result.data;
  }

  return undefined;
}

/**
 * Creates a new WebHook
 * 
 * Returns the new WebHook object
 * 
 * See: https://habitica.com/apidoc/#api-Webhook-AddWebhook
 */
function createWebHook(targetUrl, label, type = 'taskActivity', options = undefined, enabled = true, id = '') {
  if (targetUrl && label && type) {
    console.log(`Creating WebHook: label: ${label}, type: ${type}, enabled: ${enabled}\nurl: ${targetUrl}`);
    let requestBody = {
      "enabled": enabled,
      "url": targetUrl,
      "label": label,
      "type": type
    };
    if (options) {
      requestBody = Object.assign(requestBody, {
        "options": options
      });
    }
    if (typeof id === 'string' && id) {
      requestBody = Object.assign(requestBody, {
        "id": id
      });
    }
    const result = fetchPost(`${UserAPI}/webhook`, requestBody);
    if (result !== undefined && result && typeof result.data === 'object') {
      return result.data;
    }
  }

  return undefined;
}

/**
 * Deletes a WebHook
 * 
 * Returns an array of remaining webhooks as data
 */
function deleteWebHook(webhookId) {
  if (webhookId && typeof webhookId === 'string') {
    const result = fetchDelete(`${UserAPI}/webhook/${webhookId}`);
    if (result !== undefined && result && Array.isArray(result.data)) {
      return result.data;
    }
  }

  return [];
}

/**
 * "fetch" function wrapper, to do GET requests
 */
function fetchGet(url, anonymous = false) {
  return fetch(url, 'GET', {}, anonymous);
}

/**
 * "fetch" function wrapper, to do POST requests
 * requestBody: is an object that will be stringify automatically and passed the params object as "payload"
 * contentType: The contentType of the request, default "application/json"
 */
function fetchPost(url, requestBody = undefined, contentType = 'application/json') {
  let params = {};
  if (requestBody !== undefined && requestBody) {
    params = {
      'contentType': contentType,
      'payload': JSON.stringify(requestBody)
    };
  }
  return fetch(url, 'POST', params);
}

/**
 * "fetch" function wrapper, to do DELETE requests
 */
function fetchDelete(url) {
  return fetch(url, 'DELETE');
}

/**
 * Performs a UrlFetchApp.fetch for Habitica API with preset authorization headers.
 * The function handles the Habitica request rate limit automatically, if habitica respons with error "TooManyRequests", 
 * it will automatically wait for the time limit to run out and try to resend the request, up to 2 times.
 * Parameters:
 *  url: URL to call
 *  method: Request method GET, POST, DELETE etc.
 *  params: The params object, see UrlFetchApp.fetch docs
 *  anonymous: If set to true, authorization headers will be ignored, default: false
 */
function fetch(url, method = 'GET', params = {}, anonymous = false) {
  if (!url) {
    console.error(`fetch error: Invalid 'url' parameter value: "${url}"`);
    return undefined;
  }
  if (!anonymous && !isAuthorizationHeaderSet()) {
    console.error(`fetch error: API Authorization wasn't set!\nPlease call the ${setApiAuthorization.name} function with valid User ID and API Token at the beginning of the script!`);
    return undefined;
  }

  params = Object.assign({
    'method': method,
    'muteHttpExceptions': true
  }, params);

  if(!anonymous) {
    params = Object.assign(params, {
      'headers': Headers
    });
  }

  for (let i = 0; i < 3; i++) {
    const response = UrlFetchApp.fetch(url, params);
    const responseCode = response.getResponseCode();
    const headers = response.getHeaders();
    const contentText = response.getContentText();

    if (responseCode < 500) {
      const pojo = JSON.parse(contentText);
      if (pojo !== undefined && typeof pojo === 'object') {
        if (pojo.success === true) {
          return pojo;
        } else if(pojo.error === 'TooManyRequests') {
          const remainingRateLimit = headers['x-ratelimit-remaining'];
          const rateLimitResetTime = headers['x-ratelimit-reset'];
          if (remainingRateLimit <= 0 && rateLimitResetTime) {
            const resetDateTime = new Date(rateLimitResetTime);
            if (resetDateTime) {
              let resetInMs =  resetDateTime - (new Date());
              if (resetInMs > 0) {
                resetInMs += 1000;
                console.log(`Rate limit reached, sleeping ${resetInMs}ms until the next reset`)
                Utilities.sleep(resetInMs);
                continue;
              }
            }
          }
        }
      }
    } else {
      console.error(`Request: ${url}\nResponse code: ${responseCode}\nContent: ${contentText}`);
      const retryInMs = 15000;
      console.info(`Retrying the request in ${retryInMs / 1000} seconds`);
      Utilities.sleep(retryInMs);
      continue;
    }

    // throw new Error(`Request: ${url}\nResponse code: ${responseCode}\nContent: ${contentText}`);
  }

  return undefined;
}