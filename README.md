## Makersbnb

# MVP

# MVP

## Spec

Any signed-up user can list a new space.

### User story

1a) As a user so that I can list a new space, I want be able to sign up
1b) As a signed up user, so that I can list my place, I want to be able to create listing

## Spec

- Users can list multiple spaces.

### User story

- As an active host, so that I can rent out my other properties. I want to be able to add more listings.

Tests:

- User should be able to create many listings whcih belong to same user_id

## Spec

Users should be able to name their space, provide a short description of the space, and a price per night.

### User story

## Spec

Users should be able to offer a range of dates where their space is available.

## Spec

Any signed-up user can request to hire any space for one night, and this should be approved by the user that owns that space.

## Spec

Nights for which a space has already been booked should not be available for users to book that space.

## Spec

Until a user has confirmed a booking request, that space can still be booked for that night.

## additional

## Spec

Users can list multiple spaces.

### User story

Tests:

- User should be able to create many listings whcih belong to same user_id

## Spec

Users should be able to name their space, provide a short description of the space, and a price per night.

### User story

## Spec

Users should be able to offer a range of dates where their space is available.

## Spec

Any signed-up user can request to hire any space for one night, and this should be approved by the user that owns that space.

## Spec

Nights for which a space has already been booked should not be available for users to book that space.

## Spec

Until a user has confirmed a booking request, that space can still be booked for that night.

## Testing JavaScript

- We used NighWatch Js testing framework

## additional

### Steps to install

Database:

1. rake db:create
2. rake db:migrate

Testing:

1. install node.js
2. install nigthwatch: `npm install nightwatch`
3. install webdriver service (chrome in our case): `npm install chromedriver --save-dev`
4. run nightwatch on your js spec file: `node_modules/.bin/nightwatch spec/signupSpec.js`
5. `node_modules/.bin/nightwatch spec/requestInterfaceSpec.js`

Feature Testing: - use a headless browser instead of NightWatch (which has a head :)

LIST:

- SignUp page - Done
- Login page
- Sign out
- Search functionality

- npm install zombie --save
- npm install mocha --save
- npm install chai --save

Create yourfile.spec.js file

- add your tests in that file

**Run example**: `mocha ./spec/features/signUpPage.spec.js`

Example:

- use node assert module = `var assert = require("assert");`

```js
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
```
