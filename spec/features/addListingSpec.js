module.exports = {
  "User can sign up": function(browser) {
    browser
    // signup
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

      .waitForElementPresent('#listing',20000, 'Some message here to show while running test')
      .click("#listing")
      .setValue("input[name=name]", "3 bed flat")
      .setValue("input[name=location]", "Mayfair")
      .setValue("input[name=city]", "London")
      .setValue("textarea[id=description]", "lovely 3 bed flat")
      .setValue("input[name=startDate]", "13/04/2019")
      .setValue("input[name=endDate]", "15/04/2019")
      .setValue("input[name=price]", "100")
      .click("#submitListing")
  }
};
