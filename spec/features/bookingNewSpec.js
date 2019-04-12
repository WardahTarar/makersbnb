module.exports = {
  "User can make request": function(browser) {
    browser
    // data faker
    .url("localhost:9292/add_fake_data")
    // login procedure
    .url("localhost:9292/")
    .click("#loginBtn")
    .waitForElementPresent('#modalLoginForm',20000, 'wait...')
    .pause(1000)
    .execute(function(){
    })
    .setValue("input[id=emailLogIn]", "jane@email.com")
    .setValue("input[id=passwordLogIn]", "1234")
    .click("#loginSubmit")
    .waitForElementVisible("#personalMess")
    .assert.containsText("#personalMess", "Welcome Jane")
    // booking procedure
    .url("http://localhost:9292/listings/2/new")
    .waitForElementVisible("#startDate")
    .setValue("input[id=startDate]", "2019-04-19")
    .click("#request")
  }
};
