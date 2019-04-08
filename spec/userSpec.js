
describe('user js file', function(){

  var user;

  beforeEach(function(){
    user = new User();
  })

  it('creates a user object', function(){

    expect(user.createUser(
      'James',
      'Davies',
      'test@rubbish.com',
      '12345')).toEqual({
        firstName: 'James',
        lastName: 'Davies',
        email: 'test@rubbish.com',
        password: '12345'
      }) 
  });

});