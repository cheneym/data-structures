

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.size = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  //if bucket does not have anything, then add to it
  var result = LimitedArray(2);
  result.set(0, k);
  result.set(1, v);

  // if nothing there, insert
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, result);
    this.size++;
  } else {
    // if collision, find empty space
    var added = false;

    for (var i = index; i < this._limit; i++) {
      var emptySpot = this._storage.get(i) === undefined;
      var replace = emptySpot ? false : this._storage.get(i).get(0) === k; 
      if (emptySpot || replace) {
        if (emptySpot) {
          this.size++;
        }

        this._storage.set(i, result);
        added = true;
        break;
      }
    }
    if (!added) {
      for (i = 0; i < index; i++) {
        var emptySpot = this._storage.get(i) === undefined;
        var replace = emptySpot ? false : this._storage.get(i).get(0) === k; 
        if (emptySpot || replace) {
          if (emptySpot) {
            this.size++;
          }

          this._storage.set(i, result);
          added = true;
          break;
        }
      } 
    }
  }


  if (this.size > this._limit * 75 / 100) {
    this._storage = this.rehash(true, this, this._limit);
    this._limit *= 2;
  }

  //if bucket has it, search downward until reach empty bucket or find target


};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // return value from index of LimitedArray
  for (var i = 0; i < this._limit; i++) {
    if (this._storage.get(i) !== undefined && this._storage.get(i).get(0) === k) {
      return this._storage.get(i).get(1);
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // push undefined at index position
  var replaced = false;

  for (var i = index; i < this._limit; i++) {
    var emptySpot = this._storage.get(i) === undefined;
    var replace = emptySpot ? false : this._storage.get(i).get(0) === k; 
    if (replace) {
      this._storage.set(i, undefined);
      replaced = true;
      this.size--;
      break;
    }
  }
  if (!replaced) {
    for (i = 0; i < index; i++) {
      var emptySpot = this._storage.get(i) === undefined;
      var replace = emptySpot ? false : this._storage.get(i).get(0) === k; 
      if (replace) {
        this._storage.set(i, undefined);
        replaced = true;
        this.size--;
        break;
      }
    } 
  }

  if (this.size < this._limit * 25 / 100) {
    this._storage = this.rehash(false, this, this._limit);
    this._limit /= 2;
  }

};

HashTable.prototype.rehash = function(makeLarger, oldHashTable, size) {
  debugger;
  var newSize = size;
  if (makeLarger) {
    newSize *= 2;
  } else {
    newSize /= 2;
  }

  var newHashTable = new HashTable();
  newHashTable._limit = newSize;
  newHashTable._storage = new LimitedArray(newSize);

  for (var i = 0; i < size; i++) {
    var currentElement = oldHashTable._storage.get(i);
    if (currentElement !== undefined) {
      newHashTable.insert(currentElement.get(0), currentElement.get(1)); 
    }
  }

  return newHashTable._storage;
  //   // Values are a key-value pair stored in LimitedArrays
  // var result = LimitedArray(2);
  // result.set(0, k);
  // result.set(1, v);

  // // If there is a collision, create new storage of double the size and rehash all items
  // if (this._storage.get(index) !== undefined) {
  //   this._limit *= 2;
  //   var limitArr = LimitedArray(this._limit);

  //   var tempLimit = this._limit;    

  //   this._storage.each(function(item) {
  //     if (item !== undefined) {
  //       var newKey = item.get(0);
  //       var newIndex = getIndexBelowMaxForKey(newKey, tempLimit);
  //       limitArr.set(newIndex, item);
  //     }
  //   });
  //   this._storage = limitArr;
  // }

  // index = getIndexBelowMaxForKey(k, this._limit);
  // this._storage.set(index, result);

    //iterate through original hash table
    //for each value, calculate new index of object
    //retrieve []


};

/*
 * Complexity: What is the time complexity of the above functions?
 */


