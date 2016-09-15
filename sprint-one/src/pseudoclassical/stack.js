var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //set properties by using this.prop ... (counter, storage)
  this.counter = 0;
  this.storage = {};
};

//add methods to stack's prototype

// if you reassign constructor's prototype property to a new object, then you need to populate constructor 
Stack.prototype = {
  push: function(value) {
    this.storage[this.counter] = value;
    this.counter++;
  },

  pop: function() {
    var results;
    if (this.counter > 0) {
      this.counter--;
      results = this.storage[this.counter];
      delete this.storage[this.counter];
    }

    return results;
  },

  size: function() {
    return this.counter;
  },

  constructor: Stack // this actually works. constructor is just a reference to the function
};


