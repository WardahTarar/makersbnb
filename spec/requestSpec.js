describe('Request', function() {

  var request;
  var date;

  beforeEach(function() {
    date = new Date(2019, 4, 8);
    nextDay = new Date(2019, 4, 9);
    request = new Request(1, 2, date);
  });

  it("has a listing id", function () {
    expect(request.listingID).toEqual(1);
  });

  it("has a guest id", function () {
    expect(request.guestID).toEqual(2);
  });

  it("has a start date", function () {
    expect(request.startDate).toEqual(date);
  });

  it("has a end date", function () {
    expect(request.endDate).toEqual(nextDay);
  });

  // alex
  





  describe('#returnJSON', function () {
    it("returns a JSON object with dates, listing, guest", function () {
      expect(request.returnJSON()).toEqual({
        listingID: 1,
        userID: 2,
        startDate: date,
        endDate: nextDay
      });
    });
  });

});
