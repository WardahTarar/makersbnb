## Makersbnb

# MVP

## Spec

Any signed-up user can list a new space.

## User story

Any signed-up user can list a new space.

### User story

1a) As a user so that I can list a new space, I want be able to sign up

1b) As a signed up user, so that I can list my place, I want to be able to create listing

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

requests

## Testing JavaScript

- We used NighWatch Js testing framework

## additional

### Steps to install

1. install node.js
2. install nigthwatch: `npm install nightwatch`
3. install webdriver service (chrome in our case): `npm install chromedriver --save-dev`
4. run nightwatch on your js spec file: `node_modules/.bin/nightwatch spec/signupSpec.js`
