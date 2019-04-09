function Listing(name, startDate, endDate, price, location){
  this._name = name;
  this._startDate = startDate;
  this._endDate = endDate;
  this._price = price;
  this._location = location;
};

Listing.prototype.create = function(name, location, city, price, startDate, endDate, description) {
  this._name = name;
  this._location = location;
  this._city = city;
  this._price = price;
  this._startDate = startDate;
  this._endDate = endDate;
  this._description = description;

  return {
    name: this._name,
    location: this._location,
    city: this._city,
    price: this._price,
    startDate: this._startDate,
    endDate: this._endDate,
    description: this._description
  };
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
