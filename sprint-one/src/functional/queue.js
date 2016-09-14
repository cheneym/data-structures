var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  var start = 0;
  var end = 0; 

  someInstance.enqueue = function(value) {
    storage[end] = value; // add something using the end key
    end++;
  };

  someInstance.dequeue = function() {
    if (start < end) {
      start++;
    }

    var returnValue = storage[start - 1]; // get returnvalue

    delete storage[start - 1]; // return whatever was at the start key before we incremented the counter

    console.log(storage);

    return returnValue;
  };

  someInstance.size = function() {
    return end - start;
  };

  return someInstance;
};
