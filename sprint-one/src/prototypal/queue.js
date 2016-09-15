var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // create instance by calling Object.create using an object of methods
  var instance = Object.create(queueMethods);
  // populate instance with properties, e.g. storage, start, finish
  instance.storage = {};
  instance.front = 0;
  instance.back = 0;
  /// return instance
  return instance;
};

var queueMethods = {
  // enqueue
  enqueue: function(value) {
    this.storage[this.back] = value;
    this.back++;
  },
  // dequeue
  dequeue: function() {
    var result;
    if (this.front < this.back) {
      result = this.storage[this.front];
      delete this.storage[this.front];
      this.front++;
    }
    return result;
  },
  // size
  size: function() {
    return this.back - this.front;
  }
};


