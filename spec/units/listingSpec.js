describe("Listings", function(){
  var listing;

  beforeEach(function(){
    listing = new Listing("Malfoy Manor", '15.04.2019', '15.05.2019', 1000, 'London');
  });

  it('has a name', function(){
    expect(listing.name()).toEqual("Malfoy Manor")
  });

  it('has a start date and end date', function(){
    expect(listing.start()).toEqual('15.04.2019');
    expect(listing.end()).toEqual('15.05.2019');
  });

  it('the name can be updated', function(){
    listing.updateName('Grimmauld Place')
    expect(listing.name()).toEqual('Grimmauld Place')
  });

  it('price per night can be updated', function(){
    listing.updatePrice(600);
    expect(listing.price()).toEqual(600);
  });

  it('has a location', function(){
    expect(listing.location()).toEqual('London');
  });

  it('location can be updated', function(){
    listing.updateLocation('Paris');
    expect(listing.location()).toEqual('Paris');
  });
});
