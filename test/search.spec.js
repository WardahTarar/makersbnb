const Browser = require("zombie");
const assert = require("assert");
const browser = new Browser();

describe("Search functionality", function() {
  browser.visit("http://localhost:9292/", { debug: true }, function() {});

  it("can see the search button");
  it("can click the search button");
  it("user can fill in the search form and click apply");
  it("user is redirected to a filtered page");
});
