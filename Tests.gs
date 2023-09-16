function test() {
    console.log(JSON.stringify(Headers));
  
    setApiAuthorization("1", "qwe");
    console.log(JSON.stringify(Headers));
  }
  
  function getScriptProperties() {
    return AppScriptProperties.getProperties();
  }