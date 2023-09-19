/**
 * Author: Igromanru
 * Source: https://github.com/igromanru/Igromanrus-Habitica-Library
 */

const ScriptProperties = PropertiesService.getScriptProperties();

/**
 * 
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
  if(!user || !user.lastCron) {
    return false;
  }

  const lastCronDate = new Date(user.lastCron);
  lastCronDate.setHours(0, 0, 0, 0);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return lastCronDate < today;
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