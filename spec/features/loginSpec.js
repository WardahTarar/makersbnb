module.exports = {
  "User can log in": function(browser) {
    browser

    // sign up first
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


    // log in
      .click("#loginBtn")
      .waitForElementPresent('#modalLoginForm',20000, 'wait...')
      .pause(1000)
      .execute(function(){
      })

      .setValue("input[id=emailLogIn]", "jonSnow@gmail.com")
      .setValue("input[id=passwordLogIn]", "12345")
      .click("#loginSubmit")
      .waitForElementVisible("#personalMess")
      .assert.containsText("#personalMess", "Welcome John")
      .end();
  }
};
