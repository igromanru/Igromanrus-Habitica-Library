/**
 * Author: Igromanru
 * Source: https://github.com/igromanru/Igromanrus-Habitica-Library
 */

const WEBHOOK_CONTENT_QUEUE = "WEBHOOK_CONTENT_QUEUE_";

function pushWebHookContentQueueProperty(content) {
  if (typeof content == 'string' && content) {
    const wrapper = {
      data: content,
      timestamp: new Date().toISOString()
    };
    AppScriptProperties.setProperty(WEBHOOK_CONTENT_QUEUE + Utilities.getUuid(), JSON.stringify(wrapper));
  }
}

function popAllWebHookContentQueueProperties() {
  let webHookContents = [];
  if (ScriptLock.tryLock(DefaultLockTime)) {
    const properties = AppScriptProperties.getProperties();
    for (const [key, value] of Object.entries(properties)) {
      if (key.startsWith(WEBHOOK_CONTENT_QUEUE)) {
        const wrapper = JSON.parse(value);
        if (wrapper) {
          if (typeof wrapper.data === 'string') {
            wrapper.data = JSON.parse(wrapper.data);
          }
          if (typeof wrapper.timestamp === 'string') {
            wrapper.timestamp = new Date(wrapper.timestamp);
          }
          webHookContents.push(wrapper);
        } else {
          console.error(`popAllWebHookContentQueueProperties: Failed to parse content: ${value}`)
        }
        
        AppScriptProperties.deleteProperty(key);
      }
    }
    ScriptLock.releaseLock();
  } else {
    console.error(`${arguments.callee.name}: Failed to acquire the lock for ${DefaultLockTime}ms`);
  }
  return webHookContents;
}

function deleteAllWebHookContentQueueProperties() {
  let deleteCount = 0;
  const properties = AppScriptProperties.getProperties();
  for (const [key, value] of Object.entries(properties)) {
    if (key.startsWith(WEBHOOK_CONTENT_QUEUE)) {
      AppScriptProperties.deleteProperty(key);
      deleteCount++;
    }
  }
  console.log(`deleteAllWebHookContentQueueProperties: Delete count: ${deleteCount}`);
  return deleteCount;
}