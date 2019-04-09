module.exports = {
  "User can make request": function(browser) {
    browser
      .url("localhost:9292/spaces/1")
      .assert.containsText("#listingName", "My place in East London")
      .assert.containsText("#listingDescription", "Shoreditch")
      .assert.containsText("#listingDescription", "London")
      .setValue("input[id=startDate]", "21/04/2019")
      .click("#request")
      // .asset.urlContains('/requests')
      .assert.containsText("#Thank-you-message", "Thanks for requesting!")
      .end();
  }
};
