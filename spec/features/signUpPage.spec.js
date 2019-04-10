var Browser = require("zombie");
var assert = require("assert");

describe("contact page", function() {
  it("should show a sign up form");
  it("should refuse empty submissions");
  it("should refuse partial submissions");
  it("should refuse invalid emails");
  it("should accept complete submissions");
});

describe("sign up form", function() {
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

  it("should refuse empty fields when signing up", function(done) {
    var browser = this.browser;
    browser.pressButton("signup", function(error) {
      if (error) return done(error);
      browser.pressButton("#submitCreate");
      assert.equal(browser.text("#alert"), "Please fill in all the fields");
      done();
    });
  });

  describe("sign up form", function() {
    before(function() {
      this.browser = new Browser({ site: "http://localhost:9292" });
    });

    before(function(done) {
      this.browser.visit("/", done);
    });

    it("should refuse partial fields when signing up", function(done) {
      var browser = this.browser;
      browser.pressButton("signup", function(error) {
        if (error) return done(error);
        browser.fill("firstName", "John");
        browser.pressButton("#submitCreate");
        assert.equal(browser.text("#alert"), "Please fill in all the fields");
        done();
      });
    });
  });

  describe("sign up form", function() {
    before(function() {
      this.browser = new Browser({ site: "http://localhost:9292" });
    });

    before(function(done) {
      this.browser.visit("/", done);
    });

    it("should refuse invalid emails when signing up", function(done) {
      var browser = this.browser;
      browser.pressButton("signup", function(error) {
        if (error) return done(error);
        browser.fill("firstName", "John");
        browser.fill("lastName", "Snow");
        browser.fill("email", "Not an email");
        browser.fill("password", "Wolf");
        browser.pressButton("#submitCreate");
        assert.equal(
          browser.text("#alert"),
          "Please check the email address format"
        );
        done();
      });
    });
  });
});
