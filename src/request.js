'use strict'

function Request (listingID, guestID, startDate) {
  this.listingID = listingID;
  this.guestID = guestID;
  this.startDate = startDate;
  this.endDate = new Date(startDate.getFullYear(),startDate.getMonth(),startDate.getDate()+1);
};

Request.prototype.returnJSON = function () {
  return {
    listingID: this.listingID,
    userID: this.guestID,
    startDate: this.startDate,
    endDate: this.endDate
  };
};
