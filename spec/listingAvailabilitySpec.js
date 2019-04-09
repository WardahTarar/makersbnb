'use strict'

describe('Listing', function(availability){
  var listing
    beforeEach(function(){
    listing = new Listing()
})

describe('availabity', function(){
  it('displays the listings that are available in that time', function(){
    listings = create.['one bed in holborn', '01-05-2019', '15-05-2019']
    listings = create.['two bed in waterloo', '01-05-2019', '20-05-2019']
    listings = create.['two bed in hampstead', '01'06/2019, 20/06/2019]

    listing.availability(May 01 2019, May 15 2019)
    expect(listings.available).toEqual(['one bed in holborn','two bed in waterloo'])
  })
})