/**
 * Author: Igromanru
 * Source: https://github.com/igromanru/Igromanrus-Habitica-Library
 */

const ScriptProperties = PropertiesService.getScriptProperties();
const ScriptLock = LockService.getScriptLock();
const DefaultLockTime = 30 * 1000; // 30 seconds

/**
 * Treats padString parameter as a "character" and repeates it until the string has targetLength of "characters" in string
 * It works same as the default padStart function, but repeates the whole padString string
 */
function padLeft(input, targetLength, padString = "&nbsp;") {
  let result = '';
  if (input !== undefined && targetLength > 0) {
    input = input.toString();
    const padCount = targetLength - input.length;
    if (padCount > 0) {
      result = padString.repeat(padCount);
    }
    result += input;
  }
  return result;
}

/**
 * Probability is percentage as a float number from 0 to 1.0
 * 
 * 0.1 = 10%, 1.0 = 100%
 */
function getRandomBooleanWithProbability(probability) {
  if (probability < 0 || probability > 1.0) {
    throw new Error('Chance must be between 0 and 1.0');
  }
  return probability === 1 || Math.random() < probability;
}

/**
 * Checks if last cron were executed before today
 */
function isCronPending(user) {
  if(user && user.lastCron && typeof user.preferences.dayStart === 'number') {
    const lastCronDate = new Date(user.lastCron);
    const today = new Date();
    today.setHours(user.preferences.dayStart, 0, 0, 0);

    return lastCronDate < today;
  }

  return false;
}

/**
 * Hours left till the next day start
 * 
 * Returns -1, if failed
 */
function getHoursDifferenceToDayStart(user) {
  if (!user) {
    console.error('Failed to get hours difference to day start.\nUser object is undefined');
    return -1;
  }
  const dayStartOffset = user.preferences.dayStart;
  const now = new Date();
  var hours = now.getHours();

  const nextDayStart = new Date();
  if (hours >= dayStartOffset) {
    nextDayStart.setHours(24 + dayStartOffset, 0, 0, 0);
  } else {
    nextDayStart.setHours(dayStartOffset, 0, 0, 0);
  }
  const timeDifference = nextDayStart - now;
  const hoursDifferenceToDayStart = Math.round(timeDifference / (1000 * 60 * 60) * 10) / 10;

  return hoursDifferenceToDayStart;
}

/**
 * Calculates accomulated user stats based on buffs, gear and allocated stat points
 */
function getUserStats(user, withBuffs = true, withGear = true) {
  if (user && user.stats !== undefined) {
    const levelBonus = Math.floor(user.stats.lvl / 2);
    let userStats = {
      str: user.stats.str + levelBonus,
      int: user.stats.int + levelBonus,
      per: user.stats.per + levelBonus,
      con: user.stats.con + levelBonus,
    }

    if (withBuffs === true) {
      if (user.stats.buffs) {
        userStats.str += user.stats.buffs.str;
        userStats.int += user.stats.buffs.int;
        userStats.per += user.stats.buffs.per;
        userStats.con += user.stats.buffs.con;
      } else {
        console.error(`getUserStats error: No "user.stats.buffs" in the user object`);
      }
    }

    if (withGear === true) {
      if (user.items && user.items.gear && user.items.gear.equipped) {
        for (const [gearType, gearKey] of Object.entries(user.items.gear.equipped)) {
          const gearContent = getGearContentByKey(gearKey);
          if (gearContent) {
            userStats.str += gearContent.str;
            userStats.int += gearContent.int;
            userStats.per += gearContent.per;
            userStats.con += gearContent.con;
          } else {
            console.error(`getUserStats error: No gear content with key: ${gearKey}`);
          }
        }
      } else {
        console.error(`getUserStats error: No "user.items.gear.equipped" in the user object`);
      }
    }

    return userStats;
  } else {
    console.error(`getUserStats error: Invalid user parameter`);
  }

  return undefined;
}

/**
 * Updates user object with new stats
 */
function updateUserStats(user, stats) {
  if (user && user.stats && stats && typeof stats.str === 'number') {
    // console.log(`updateUserStats: Old stats: ${JSON.stringify(user.stats)}\nNew stats: ${JSON.stringify(stats)}`)
    if (stats.buffs && typeof stats.buffs.str === 'number') {
      user.stats.buffs = stats.buffs;
    }
    if (stats.training && typeof stats.training.str === 'number') {
      user.stats.training = stats.training;
    }
    user.stats.hp = stats.hp;
    user.stats.mp = stats.mp;
    user.stats.exp = stats.exp;
    user.stats.gp = stats.gp;
    user.stats.lvl = stats.lvl;
    user.stats.class = stats.class;
    user.stats.points = stats.points;
    user.stats.str = stats.str;
    user.stats.con = stats.con;
    user.stats.int = stats.int;
    user.stats.per = stats.per;
  }
}

function getMemberFromArrayById(members, memberId) {
  if (members && Array.isArray(members) && memberId && typeof memberId === 'string') {
    for (const member of members) {
      if (member && member._id == memberId) {
        return member;
      }
    }
  }
  return undefined;
}