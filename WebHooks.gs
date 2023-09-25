/**
 * Author: Igromanru
 * Source: https://github.com/igromanru/Igromanrus-Habitica-Library
 */

const WEBHOOK_CONTENT_QUEUE = "WEBHOOK_CONTENT_QUEUE_";

function pushWebHookContentQueueProperty(content) {
  if (typeof content == 'string' && content) {
    AppScriptProperties.setProperty(WEBHOOK_CONTENT_QUEUE + Utilities.getUuid(), content);
  }
}

function popAllWebHookContentQueueProperties() {
  let webHookContents = [];
  if (ScriptLock.tryLock(DefaultLockTime)) {
    const properties = AppScriptProperties.getProperties();
    for (const [key, value] of Object.entries(properties)) {
      if (key.startsWith(WEBHOOK_CONTENT_QUEUE)) {
        webHookContents.push(JSON.parse(value));
        AppScriptProperties.deleteProperty(key);
      }
    }
    ScriptLock.releaseLock();
  } else {
    console.error(`${arguments.callee.name}: Failed to acquire the lock for ${DefaultLockTime}ms`);
  }
  return webHookContents;
}