var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  
  //stringify item  
  //put stringifyied item as key into _storage, with value true
  this._storage[JSON.stringify(item)] = true;
};

setPrototype.contains = function(item) {
  //Use stringified key to check if key exists in _storage

  return !!this._storage[JSON.stringify(item)];
};

setPrototype.remove = function(item) {
  //delete stringified item/value pair from _storage

  delete this._storage[JSON.stringify(item)];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
