function Listings(){
  this.list = []
};

Listings.prototype.create = function(listing){
  this.list.push(listing);
};

Listings.prototype.all = function(){
  return this.list;
};

Listings.prototype.delete = function(listing){
  this.list.splice(this.list.indexOf(listing, 1));
};
