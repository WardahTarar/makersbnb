var Browser = require("zombie");
var assert = require("assert");

describe("Sign out", function() {
  before(function() {
    this.browser = new Browser({ site: "http://localhost:9292" });
  });

  before(function(done) {
    this.browser.visit("/index", done);
  });

  it("signs out the user", function(done) {
    var browser = this.browser;

    browser.pressButton("signup", function(error) {
      assert.ok(browser.success);
      assert.equal(browser.text("#titleSignUp"), "Sign up");
      browser.fill("firstName", "John");
      browser.fill("lastName", "Snow");
      browser.fill("email", "JohnSnow@GOT.com");
      browser.fill("password", "Wolf");
      browser.pressButton("#submitCreate", function() {
        assert.ok(browser.success);
      });
      done();
    });
  });
});
