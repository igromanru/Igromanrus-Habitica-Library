/**
 * Author: Igromanru
 * Source: https://github.com/igromanru/Igromanrus-Habitica-Library
 */
var AppScriptProperties = undefined;

function initialize(userId, apiToken, scriptProperties = undefined) {
  setApiAuthorization(userId, apiToken);
  AppScriptProperties = scriptProperties;
}