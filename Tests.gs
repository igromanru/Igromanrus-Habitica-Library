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