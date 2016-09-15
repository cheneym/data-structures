var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  //object create binding stackmethods
  var instance = Object.create(stackMethods);

  //add properties to object (counter, storage)
  instance.counter = 0;
  instance.storage = {};

  //return object
  return instance;
};

var stackMethods = {
//push
  push: function(value) {
    this.storage[this.counter] = value;
    this.counter++;
  },

//pop
  pop: function() {
    var results;
    if (this.counter > 0) {
      this.counter--;
      results = this.storage[this.counter];
      delete this.storage[this.counter];
    }

    return results;
  },

//size
  size: function() {
    return this.counter;
  }
};



