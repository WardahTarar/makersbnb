function Listing(name, startDate, endDate, price, location){
  this._name = name;
  this._startDate = startDate;
  this._endDate = endDate;
  this._price = price;
  this._location = location;
};

Listing.prototype.create = function(listing, startDate, endDate){
  this.list.push([listing, startDate, endDate]);
};

Listing.prototype.all = function(){
  return this.list;
};

Listing.prototype.delete = function(listing){
  this.list.splice(this.list.indexOf(listing, 1));
};

Listing.prototype.name = function(){
  return this._name;
};

Listing.prototype.price = function(){
  return this._price;
};

Listing.prototype.updateName = function(newName){
  this._name = newName;
};

Listing.prototype.updatePrice = function(newPrice){
  this._price = newPrice;
};

Listing.prototype.start = function(){
  return this._startDate;
};

Listing.prototype.end = function(){
  return this._endDate;
};

Listing.prototype.location = function(){
  return this._location;
};

Listing.prototype.updateLocation = function(newLocation){
  this._location = newLocation;
};
