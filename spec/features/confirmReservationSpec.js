module.exports = {
  "User can make request": function(browser) {
    browser
    // login procedure
    .url("http://localhost:9292/users/1/requests/1")
    .waitForElementPresent('#approve',20000)
    .assert.containsText("#requestMessage", "requested your place")
    .assert.containsText("#listingLocation", "This space is in")
    // .assert.containsText("#listingDescription", "This space is in")
    .click("#approve")
    .assert.urlContains('/index')
    .end();
  }
};
