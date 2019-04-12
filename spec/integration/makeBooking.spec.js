var Browser = require("zombie");
var assert = require("assert");

describe("Log in", function() {
  this.timeout(15000);
  before(function() {
    this.browser = new Browser({ site: "http://localhost:9292" });
  });

  before(function(done) {
    this.browser.visit("/", done);
  });

  it("should have a log in button", function(done) {
    assert.ok(this.browser.success);
    assert.equal(this.browser.text("#generalMess"), "Welcome to MakersBNB");
    assert.equal(this.browser.text("#loginBtn"), "Log in");
    done();
  });

  //USER ALREADY EXISTS
  it("user can log ing", function(done) {
    var browser = this.browser;

    browser.pressButton("#loginBtn", function(error) {
      assert.ok(browser.success);
      assert.equal(browser.text("#titleSignIn"), "Sign in");
      browser.fill("#emailLogIn", "JohnSnow@GOT.com");
      browser.fill("#passwordLogIn", "Wolf");
      browser.pressButton("#loginSubmit");
    });
    done();
  });

  describe("user sees a message to fill in all details to log in", function() {
    before(function() {
      this.browser = new Browser({ site: "http://localhost:9292" });
    });

    before(function(done) {
      this.browser.visit("/", done);
    });

    it("attempt to log in with no user and pass", function(done) {
      var browser = this.browser;

      browser.pressButton("#loginBtn");
      browser.pressButton("#loginSubmit");
      assert.equal(
        browser.text("#alert"),
        "Please fill in all the fields to log in"
      );
      done();
    });

    it("attempt to log in with bad email", function(done) {
      var browser = this.browser;

      browser.pressButton("#loginBtn", function(error) {
        browser.fill("#emailLogIn", "Bad email");
        browser.pressButton("#loginSubmit");
        assert.equal(
          browser.text("#alert"),
          "Please check the email address format"
        );
        done();
      });
    });
  });
});
