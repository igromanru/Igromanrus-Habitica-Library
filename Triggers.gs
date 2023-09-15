/**
 * Author: Igromanru
 * Source: https://github.com/igromanru/Igromanrus-Habitica-Library
 */

/**
 * Creates a time based trigger for a function that gets executed as fast as GAS allows it.
 * The trigger will only be created if there isn't already a trigger for the function.
 */
function executeAsTriggerAsap(functionName) {
  const triggers = ScriptApp.getProjectTriggers();
  let triggerExists = false;
  for (const trigger of triggers) {
    if (trigger.getHandlerFunction() === functionName) {
      triggerExists = true;
      break;
    }
  }
  if (!triggerExists) {
    ScriptApp.newTrigger(functionName)
      .timeBased()
      .after(1)
      .create();
  }
}
