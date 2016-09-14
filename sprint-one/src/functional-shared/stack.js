var Stack = function() { // we think this entire function is the constructor
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var instance = {
    storage: {},
    counter: 0
  };

  // Object.assigns does the same thing as _.extend
  _.extend(instance, stackMethods); // will Stack.methods exists at this time?

  return instance;
};


var stackMethods = { // expect to not extend the constructor

  push: function(value) {
    this.storage[this.counter] = value; // how do we refer to properties without using this if we have a shared function?
    this.counter++;
  },

  pop: function() {
    if (this.counter > 0) {
      this.counter--;
      var result = this.storage[this.counter];
      delete this.storage[this.counter];
      return result;
    }
    return;
  },
  
  size: function() {
    return this.counter;
  }
};


