/**
 * Author: Igromanru
 * Source: https://github.com/igromanru/Igromanrus-Habitica-Library
 */

/**
 * 
 */
function padLeft(input, targetLength, padString = "&nbsp;") {
  if (input !== undefined && targetLength > 0) {
    input = input.toString();
    const padCount = targetLength - input.length;
    if (padCount >= 0) {
      return padString.repeat(padCount) + input;
    }
  }
  return '';
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