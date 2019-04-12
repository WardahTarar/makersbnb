var Browser = require("zombie");
var assert = require("assert");

describe("index page", function() {
  before(function() {
    this.browser = new Browser({ site: "http://localhost:9292" });
  });


before(function(done) {
    this.browser.visit("/", done);
  });
  it("should reach main page", function() {
    assert.ok(this.browser.success);
    assert.equal(this.browser.text("#generalMess"), "Welcome to MakersBNB");
    assert.equal(this.browser.text("#signup"), "Sign up");
    assert.equal(this.browser.text("#signup"), "Sign up");
  });

  it("open the signup modal view", function(done) {
    var browser = this.browser;

    browser.pressButton("signup", function(error) {
      if (error) return done(error);
      assert.ok(browser.success);
      assert.equal(browser.text("#titleSignUp"), "Sign up");
      browser.fill("firstName", "John");
      browser.fill("lastName", "Snow");
      browser.fill("email", "JohnSnow@GOT.com");
      browser.fill("password", "Wolf");
      browser.pressButton("#submitCreate");
      done();
    });
  });
});
