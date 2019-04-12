module.exports = {
  "Host can approve a request": function(browser) {
    browser
    // login procedure
    .url("localhost:9292/")
    .click("#loginBtn")
    .waitForElementPresent('#modalLoginForm',20000, 'wait...')
    .pause(1000)
    .execute(function(){
    })
    .setValue("input[id=emailLogIn]", "john@email.com")
    .setValue("input[id=passwordLogIn]", "1234")
    .click("#loginSubmit")
    .waitForElementVisible("#personalMess")
    .assert.containsText("#personalMess", "Welcome John")

    // approval procedure
    .url("http://localhost:9292/users/1/requests/1")
    .waitForElementPresent('#approve',20000)
    .assert.containsText("#requestMessage", "requested your place")
    .assert.containsText("#listingLocation", "This space is in")
    .click("#approve")
    .end();
  }
};
