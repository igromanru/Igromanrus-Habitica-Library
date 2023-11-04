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
  for (const trigger of triggers) {
    if (trigger.getHandlerFunction() === functionName) {
      console.log(`executeAsTriggerAsap: A trigger for the function "${functionName}" already exists!`);
      return false;
    }
  }
  console.log(`executeAsTriggerAsap: Creating a trigger for the funtion "${functionName}"`);
  ScriptApp.newTrigger(functionName)
    .timeBased()
    .after(100)
    .create();
  return true;
}

/**
 * Deletes all triggers that call a specific function
 * 
 * Returns the number of triggers that have been deleted
 */
function deleteTriggerByFunction(functionName) {
  let deletedCount = 0;
  console.log(`deleteTriggerByFunction: ${functionName}`);

  const triggers = ScriptApp.getProjectTriggers();
  for (const trigger of triggers) {
    if (trigger.getHandlerFunction() === functionName) {
      ScriptApp.deleteTrigger(trigger);
      deletedCount++;
    }
  }
  console.log(`deleteTriggerByFunction: Deleted count: ${deletedCount}`);
  return deletedCount;
}