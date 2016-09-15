var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // populate instance with required properties
  this.storage = {};
  this.front = 0;
  this.back = 0;
};

// assign methods to Queue.prototype

// enqueue
Queue.prototype.enqueue = function(value) {
  this.storage[this.back] = value;
  this.back++;
};

// dequeue
Queue.prototype.dequeue = function() {
  var result;
  if (this.front < this.back) {
    result = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
  }
  return result;
};

// size
Queue.prototype.size = function() {
  return this.back - this.front;
};
