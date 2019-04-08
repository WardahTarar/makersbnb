describe("Listings", function(){
  var listings;

  it('creates a listing', function(){
    listings = new Listings();
    expect(listings).toBe(listings);
    var myListing;
    expect(listings.create(myListing)).toEqual(myListing);
    expect(listings.list.last).toEqual(myListing);
  });

  it('creates 2 listings', function(){
    listings = new Listings();
    expect(listings).toBe(listings);
    var myListing;
    var myListing2;
    expect(listings.create(myListing)).toEqual(myListing);
    expect(listings.create(myListing2)).toEqual(myListing2);
    expect(listings.list.last).toEqual(myListing2);
  });

  it('shows all listings', function(){
    listings = new Listings();
    var myListing;
    var myListing2;
    listings.create(myListing);
    listings.create(myListing2);
    expect(listings.all()).toEqual([myListing, myListing2])
  });

  it('deletes a listing', function(){
    listings = new Listings();
    var myListing;
    var myListing2;
    listings.create(myListing);
    listings.create(myListing2);
    listings.delete(myListing2);
    expect(listings.all()).toEqual([myListing]);
  });
});
