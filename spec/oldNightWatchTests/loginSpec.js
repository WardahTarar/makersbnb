module.exports = {
  "User can log in": function(browser) {
    browser
      .url("localhost:9292/")
      .click("#login_page")
      .setValue("input[name=email]", "momo")
      .setValue("input[name=password]", "1234")
      .click("#login_submit")
      .waitForElementVisible("#welcome-message-user")
      .assert.containsText("#welcome-message-user", "Welcome momo")
      .end();
  }
};
