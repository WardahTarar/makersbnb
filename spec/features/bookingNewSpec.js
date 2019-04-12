module.exports = {
  "User can make request": function(browser) {
    browser
    // login procedure
    .url("localhost:9292/listings/1/new")
    .waitForElementPresent('#startDate',20000)
    .assert.urlContains('/listings')
    .assert.urlContains('/new')
    .setValue("input[id=startDate]", "2019-04-19")
    .click("#request")
    .assert.urlContains('/index')
    .end();
  }
};
