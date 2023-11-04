/**
 * Author: Igromanru
 * Source: https://github.com/igromanru/Igromanrus-Habitica-Library
 */

var AppScriptProperties = undefined;

/**
 * The function initializes request headers for Habitica authorization
 * Optional but recommended: Pass PropertiesService.getScriptProperties() as scriptProperties parameter, so the library can work with properties from the owner script
 * 
 * Call the function under global variables
 */
function initialize(userId, apiToken, scriptProperties = undefined) {
  setApiAuthorization(userId, apiToken);
  AppScriptProperties = scriptProperties;
}