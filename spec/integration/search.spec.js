var Browser = require("zombie");
var assert = require("assert");

describe("Search functionality", function() {
  before(function() {
    this.browser = new Browser({ site: "http://localhost:9292" });
  });

  before(function(done) {
    this.browser.visit("/index", done);
  });

  it("can see and click the search button", function(done) {
    var browser = this.browser;

    assert.equal(browser.text("#search"), "Search");
    browser.pressButton("#search", function(error) {
      assert.ok(browser.success);
      assert.equal(browser.text("#bookSpaceTitle"), "Book a space");
      done();
    });
  });

  it("user can see the apply button", function(done) {
    var browser = this.browser;

    browser.pressButton("#search", function(error) {
      assert.ok(browser.success);
      browser.click(".daterangepicker", function() {
        assert.ok(browser.success);
        assert.equal(browser.text(".applyBtn"), "Apply");
      });
      done();
    });
  });
  it("user is redirected to a filtered page");
});
