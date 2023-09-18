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

/*function testHabiticaContent() {
  const timeHandler = 'testHabiticaContent';
  console.time(timeHandler);

  console.time("setHabiticaQuestsContent");
  setHabiticaQuestsContent(HabiticaQuestsContent);
  console.timeEnd("setHabiticaQuestsContent");

  console.time("getHabiticaQuestsContent");
  const value = getHabiticaQuestsContent();
  console.log(value !== undefined);
  console.timeEnd("getHabiticaQuestsContent");

  console.timeEnd(timeHandler);
}*/

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