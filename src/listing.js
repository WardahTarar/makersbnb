function Listings(){
  this.list = []
};

Listings.prototype.create = function(listing){
  this.list.push(listing);
};
