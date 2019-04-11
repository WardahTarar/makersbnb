// var popupCommand = {
//   popupCheck:function(){
//  return this.waitForElementVisible('submitCreate', 5000)
//    .click('submitCreate', isPresent)
//    .click('submitCreate', isPresent)
//   }

module.exports = {
  "User can sign up": function(browser) {
    browser
      .url("localhost:9292/")
      .click("#signup")  
      .waitForElementPresent('#modalRegisterForm',20000, 'Some message here to show while running test')
      .pause(1000)
      .execute(function(){
      document.querySelector('#submitCreate').click()
      })

      .setValue("input[name=firstName]", "John")
      .setValue("input[name=lastName]", "Snow")
      .setValue("input[name=email]", "jonSnow@gmail.com")
      .setValue("input[name=password]", "12345")
      .click("#submitCreate")

      .waitForElementVisible("#personalMess")
      .assert.containsText("#personalMess", "Welcome John")
      .end();
      
  }
};
