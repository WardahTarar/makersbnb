module.exports = {
  "User can see their requests": function(browser) {
    browser
    // sign up
      .url("localhost:9292/listings/new")
      .click("#signup")
      .setValue("input[name=firstName]", "John")
      .setValue("input[name=lastName]", "Snow")
      .setValue("input[name=email]", "jonSnow@gmail.com")
      .setValue("input[name=password]", "12345")
      .click("#submitCreate")

      // make a listing
      .url("localhost:9292/listings/new)
      .setValue("input[name=name]", "3 bed house in Westminster")
      .setValue("input[name=location]", "Westminster")
      .setValue("input[name=city]", "London")
      .setValue("input[name=description]", "3 bed house")
      .setValue("input[name=startDate]", "21/04/2019")
      .setValue("input[name=endDate]", "22/04/2019")
      .click("#submitListing")

      // new user
      .click("#signout")
      .click("#signup")
      .setValue("input[name=firstName]", "Alex")
      .setValue("input[name=lastName]", "Chen")
      .setValue("input[name=email]", "alexchen@gmail.com")
      .setValue("input[name=password]", "12345")
      .click("#submitCreate")

      // make a request
      .url("localhost:9292/listings/1/new'")
      .setValue("input[id=startDate]", "21/04/2019")
      .click("#request")

      // see new request in requst page
      .url("localhost:9292/users/1/requests'")
      .assert.containsText("3 bed house in Westminster")

// could be submitCreate here which is button's id

  }
};
