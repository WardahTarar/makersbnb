module.exports = {
  "User can sign out": function(browser) {
    browser
      .url("localhost:9292/")
      .click("#signup")  
      .waitForElementPresent('#modalRegisterForm',20000, 'Some message here to show while running test')
      .pause(1000)
      .execute(function(){
      })
      .setValue("input[name=firstName]", "John")
      .setValue("input[name=lastName]", "Snow")
      .setValue("input[name=email]", "jonSnow@gmail.com")
      .setValue("input[name=password]", "12345")
      .click("#submitCreate")

      .waitForElementPresent('#signout',20000, 'Some message here to show while running test')
      .click("#signout")

      .waitForElementVisible("#generalMess")
      .assert.containsText("#generalMess", "Welcome to MakersBNB")
      .end();
  }
};

