module.exports = {
  "ste one: navigate to sign up page": function(browser) {
    browser
      .url("localhost:9292/users/new")
      .setValue("input[name=firstName]", "John")
      .setValue("input[name=lastName]", "Snow")
      .setValue("input[name=email]", "jonSnow@gmail.com")
      .setValue("input[name=password]", "12345")
      .click("#submit")
      .waitForElementVisible("#welcome-message")
      .assert.containsText("#welcome-message", "Welcome John")
      .end();
  }
};
