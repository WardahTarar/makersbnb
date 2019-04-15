# Makersbnb
------
# Task (high level)
In this project, we created a airbnb clone, where a user can sign up and interact with the app as a traveler or host. As a traveler, user can book a listing, and as a host, user can offer a listing to other travelers.

# Technologies used
- Javascript (front end)
- Sinatra (server)
- Activerecord (database relationship)
- Bcrypt (user password encryption)

# APPROACH
### Summary of group approach
Our apporach was to create a MVP in 2 days, where it satisfies the basic requirements of above. Our approach is in summary modelling database, creating backend infrastructure, and then create front-end features (e.g. users, listings, requests) using a TDD approach (with feature and unit tests).

**Part 1**
After translation of user stories, we modeled the app to a database relation model, where data flows between models according to user stories. 

### Modeling
We had the following models and funcitons:

User- which can be a host or guest
- sign up, sign in

Listing - belongs to User
- everyone can filter listing according to date required
- host adds a listing with available dates

Request - belongs to Listing
- user submits a request to host with desired property and dates

We had 2 team members to work on the user sign up and log in. 3 team members worked on setting up the basic database to be able to visualise the structure and data interactions. While 1 team member was working on setting up listing. 

**Part 2**
### TDD
We wrote feature and unit tests for each user story above. 

Our user, listing, and request models use javascript frontend and sinatra backend. The user triggers an event in which jquery creates a function and sends ajax request to routes on sinatra server. Objects are then created/updated in database for example a new user or new lisitng.

Database changes
- We made some minor changes to database to accomodate a simpler MVP, for example,  where user just has one availability period and its incorporated into the listing model. 
------


# User stories
Then, in order to cover the basic specificaitons, we translated each specification to 1-2 user stories. Afterwards, for each user story, we started by writing feature tests/ unit tests. 

## Spec
Any signed-up user can list a new space.

### User story
1a) As a user so that I can list a new space, I want be able to sign up
1b) As a signed up user, so that I can list my place, I want to be able to create listing

## Spec
- Users can list multiple spaces.

### User story
- As an active host, so that I can rent out my other properties. I want to be able to add more listings.

## Spec
- Users should be able to name their space, provide a short description of the space, and a price per night.

### User story
- As a host, so that I can manage my spaces, I want to name each space, add description and price per night to space.

## Spec
- Users should be able to offer a range of dates where their space is available.

### User story
- As a landlord, so that I can don't offer dates unavailable, I want to be able to offer a range of dates.

## Spec
- Any signed-up user can request to hire any space for one night, and this should be approved by the user that owns that space.

### User story
- As a guest, so that I can rent a space, I want to apply for a space. 

- As a host, so that I can rent out a space, I want to approve guests.

## Spec 
Nights for which a space has already been booked should not be available for users to book that space.

### User story
- As a host, so that I won't get requests for booked spaces, I only want to get listed for available dates and only get requrests for dates which are not booked and available.

## Spec
Until a user has confirmed a booking request, that space can still be booked for that night.

### User story
As a user I want to be able to book a place even though it has unconfirmed requests.


-------
# Testing
## Testing JavaScript front end 
- Feature testing was done for user stories above using NighWatch Js testing framework
- Then We used uniti tests to drive development for each feature, for example, user model, listing model, etc.

# FEATURES
## User sign up and sign in
- We made front end validation in javascript so that user inputs correct and complete information when sign up or sign in

## Listings
- We made front end validation in javascript so that user inputs correct and complete information when adding listing

## Requests
- User can either approve or decline a request. If accepted, it will turn into a reservation.


## REST
- We nested listings seperatly and request routes under users



-------
# Problems faced and how we solved them

### Merging and pulling when there is sensitive information.
- We used  private file which was downloaded to each person's laptops and then put into the folder where it is included in gitignore. This way it will not be exposed on github.
We faced alot of conflicts when merging package-lock.json, we also included that file into the gitignore.

### Testing in capybara under javascript environment
- We were not able to fully feature test capybara on javascript functions due to its limiatations and hence used nightwatch and mocha with Zombie. 

## Group collaboration challenges

### Migration of database
It took a while to get everyone in the group to familiarize on database structure and install the databases. Sometimes the database had null values which caused code to break. However, this was more an infrastructure issue, after everything was setup, database migration was smooth.

### Resolving conflicts when pull request 
Sometimes when a group member merged with master file this created conflicts which required deletion of code. We became aware to pull the master file when it has been changed. We were reviewed the changes carefully and the process got more efficient as project went along.

### Time management
Although we were very quick and accomplished a lot in setting up the app infrastructure, and the database and associations, we met several bottlenecks when creating more ‘complex’ features. However, we switched groups a bit and split work into smaller sections between team members, and this worked well to allow us to progress quickly. Most of the time we were able to finish a feature in 1-1.5 day. 

### Balance between learning new stuff vs strenghening high level collaboration skills
This was a major issue we had and we decided to introduce Javascript, rather than focusing on just Ruby because it will ease our way into later projects and its better to get familiarized early on. It would also make the app abit more 'different'. Although this did cause some issue, such as not sure how to do a filter in javascript for dates available, we overcame this issue by reading documentation on ajax requests, and consulting more experienced members in the team. We were able to create mostly front end features in javascript in the end.


## Mistakes I made
### TESTING nightwatch
- I needed to select the right id




# Other intersting things
### Javascript frontend testing
We used new testing frameworks to feature test front end javascript part of the app. This was interesting and we quickly familiarized ourselves with the framework, which is similar to Capybara. This showed that we were adaptable and language agnostic.  


# things to add/ amend later

- make the folders abit cleaner
- use of doubles in testing?



# Steps to install

1. install node.js
2. install nigthwatch: `npm install nightwatch`
3. install webdriver service (chrome in our case): `npm install chromedriver --save-dev`
4. run nightwatch on your js spec file: `node_modules/.bin/nightwatch spec/signupSpec.js`

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

- npm install zombie --save
- npm install mocha --save
- npm install chai --save

Create yourfile.spec.js file

- add your tests in that file

**Run example**: `mocha ./spec/features/signUpPage.spec.js`

Example:

> Note: use node assert module = `var assert = require("assert");`

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

**Code coverage for testing with Mocha (Zombie):**

For code coverage you need an additional library, and you are going to be blown away by how powerful and easy istanbul is. Try the following, after you get your mocha tests to pass:

`npm install nyc --save-dev`

Now, simply place the command nyc in front of your existing test command, for example:

```json
{
  "scripts": {
    "test": "mocha spec/features",
    "test_with_coverage": "nyc --reporter=text mocha spec/features"
  }
}
```

> Note: spec/features is the folder where your tests are

**How to run:**
`npm run test` - for running tests withouth seeing the coverage
`npm run test_with_coverage` - for running tests withouth seeing the coverage
