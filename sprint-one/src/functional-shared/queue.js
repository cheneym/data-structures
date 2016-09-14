var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //create instance with left and right and storage properties
  var instance = {
    storage: {},
    left: 0,
    right: 0
  };

  //extend methods onto instance

  _.extend(instance, queueMethods);
  //return instance

  return instance;
};

var queueMethods = {
  //enqueue
  enqueue: function(value) {
    this.storage[this.right] = value;
    this.right++;
  },

  //dequeue
  dequeue: function() {
    var result;
    if (this.left < this.right) {
      result = this.storage[this.left];
      delete this.storage[this.left];
      this.left++;
    }

    return result;
  },

  //size
  size: function() {
    return this.right - this.left;
  }
};


