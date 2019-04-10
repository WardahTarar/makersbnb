var Browser = require("zombie");
var assert = require("assert");

describe("contact page", function() {
  it("should show a login form - Done");
  it("should refuse empty submissions - Done");
  it("should refuse invalid emails -Done ");
  it("should accept complete submissions - Done");
});

describe("Log in", function() {
  before(function() {
    this.browser = new Browser({ site: "http://localhost:9292" });
  });

  beforeEach(function(done) {
    this.browser.visit("/", done);
  });

  it("should have a log in button", function() {
    assert.ok(this.browser.success);
    assert.equal(this.browser.text("#generalMess"), "Welcome to MakersBNB");
    assert.equal(this.browser.text("#loginBtn"), "Log in");
  });

  //USER ALREADY EXISTS
  it("user can log ing", function(done) {
    var browser = this.browser;

    browser.pressButton("#loginBtn", function(error) {
      assert.ok(browser.success);
      assert.equal(browser.text("#titleSignIn"), "Sign in");
      browser.fill("#emailLogIn", "JohnSnow@GOT.com");
      browser.fill("#passwordLogIn", "Wolf");
      browser.pressButton("#loginSubmit", function() {
        assert.ok(browser.success);
      });
      done();
    });
  });

  describe("user sees a message to fill in all details to log in", function() {
    before(function() {
      this.browser = new Browser({ site: "http://localhost:9292" });
    });

    beforeEach(function(done) {
      this.browser.visit("/", done);
    });

    it("attempt to log in with no user and pass", function() {
      var browser = this.browser;

      browser.pressButton("#loginBtn");
      browser.pressButton("#loginSubmit");
      assert.equal(
        browser.text("#alert"),
        "Please fill in all the fields to log in"
      );
    });

    it("attempt to log in with bad email", function() {
      var browser = this.browser;
      assert.ok(browser.success);
      browser.pressButton("#loginBtn", function(error) {
        browser.fill("#emailLogIn", "Bad email");
        browser.pressButton("#loginSubmit");
        assert.equal(
          browser.text("#alert"),
          "Please check the email address format"
        );
      });
    });
  });

  // it("should refuse empty fields when trying to log in", function(done) {
  //   var browser = this.browser;
  //   browser.pressButton("signup", function(error) {
  //     if (error) return done(error);
  //     browser.pressButton("#submitCreate");
  //     assert.equal(browser.text("#alert"), "Please fill in all the fields");
  //     done();
  //   });
  // });

  // describe("sign up form", function() {
  //   before(function() {
  //     this.browser = new Browser({ site: "http://localhost:9292" });
  //   });

  //   before(function(done) {
  //     this.browser.visit("/", done);
  //   });

  //   it("should refuse partial fields when signing up", function(done) {
  //     var browser = this.browser;
  //     browser.pressButton("signup", function(error) {
  //       if (error) return done(error);
  //       browser.fill("firstName", "John");
  //       browser.pressButton("#submitCreate");
  //       assert.equal(browser.text("#alert"), "Please fill in all the fields");
  //       done();
  //     });
  //   });
  // });

  // describe("sign up form", function() {
  //   before(function() {
  //     this.browser = new Browser({ site: "http://localhost:9292" });
  //   });

  //   before(function(done) {
  //     this.browser.visit("/", done);
  //   });

  //   it("should refuse invalid emails when signing up", function(done) {
  //     var browser = this.browser;
  //     browser.pressButton("signup", function(error) {
  //       if (error) return done(error);
  //       browser.fill("firstName", "John");
  //       browser.fill("lastName", "Snow");
  //       browser.fill("email", "Not an email");
  //       browser.fill("password", "Wolf");
  //       browser.pressButton("#submitCreate");
  //       assert.equal(
  //         browser.text("#alert"),
  //         "Please check the email address format"
  //       );
  //       done();
  //     });
  //   });
  // });
});
