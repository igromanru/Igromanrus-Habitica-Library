function test() {
  console.log(JSON.stringify(Headers));

  setApiAuthorization("1", "qwe");
  console.log(JSON.stringify(Headers));
}

function getScriptProperties() {
  return AppScriptProperties.getProperties();
}

function testPadLeft() {
  const hp = Math.round(-30.4 * 10)  / 10;
  const hp2 = Math.round(hp);

  console.log(hp);
  console.log(hp2);
  console.log(padLeft(hp2, 2));
}

function testGetQuestContentByKey() {
  const timeHandler = 'testGetQuestContentByKey';
  console.time(timeHandler);

  const questContent = getQuestContentByKey("vice1");
  console.log(`Quest: ${questContent.text}`);
  console.log(`Gold value: ${questContent.goldValue}`);
  console.log(`Value: ${questContent.value}`);
  console.log(`Level: ${questContent.lvl}`);
  console.log(`Boss name: ${questContent.boss.name}`);
  console.log(`Boss HP: ${questContent.boss.hp}`);

  console.timeEnd(timeHandler);
}

function testApi() {
  /*const content = getHabiticaContent();
  console.log(content);*/
  const UserId = ScriptProperties.getProperty('API_ID');
  const ApiToken = ScriptProperties.getProperty('API_KEY');
  setApiAuthorization(UserId, ApiToken);

  customDayStart(1);
}

function testGetTimeDifferenceToNow() {
  console.log(JSON.stringify(getTimeDifferenceToNow(new Date())));
  console.log(JSON.stringify(getTimeDifferenceToNow("wrong param")));
}

function testSubtractTimeZoneFromDate() {
  const dateTime = new Date();
  console.log(dateTime);
  console.log(subtractTimeZoneFromDate(dateTime));
}