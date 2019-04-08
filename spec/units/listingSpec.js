describe("Listings", function(){
  var listing;

  it('creates a listing', function(){
    listing = new Listing();
    expect(listing).toBe(listing);
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

  // it('returns the name', function(){

  // });
});
