module.exports = {
  "User can sign up": function(browser) {
    browser
      .url("localhost:9292/users/new")
      .setValue("input[name=firstName]", "John")
      .setValue("input[name=lastName]", "Snow")
      .setValue("input[name=email]", "jonSnow@gmail.com")
      .setValue("input[name=password]", "12345")
      .click("#submit")
      .waitForElementVisible("#welcome-message-user")
      .assert.containsText("#welcome-message-user", "Welcome John")
      .end();
  }
};
