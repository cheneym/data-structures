var BinarySearchTree = function(value) {
  //create value property

  this.value = value;
  //create left property

  this.left;
  //create right property

  this.right;
};

//BST prototype methods:
//insert (value)
  //if current node's value > input value, check if left side is undefined.
    //if it is, place new node there. otherwise, recurse left side.
  //if current node's value < input value, check if right side is undefined.
    //if it is, place new node. otherwise, recurse right side.
  //else 
BinarySearchTree.prototype.insert = function(value) {
  if (this.value > value) {
    if (this.left === undefined) {
      var newBST = new BinarySearchTree(value);
      this.left = newBST;
    } else {
      this.left.insert(value);
    }
  } else if (this.value < value) {
    if (this.right === undefined) {
      var newBST = new BinarySearchTree(value);
      this.right = newBST;
    } else {
      this.right.insert(value);
    }
  } 

  // Assumption: if value is equal to current node, i.e. value is in BST, then do nothing
};
//contains (value)
  //if node is undefined, return false
  //compare node value with input value. 
  //node value > input value  --> left
  //node value < input value --> right
  //
BinarySearchTree.prototype.contains = function(value) {
  if (value === undefined) {
    return false;
  }
  if (this.value === value) {
    return true;
  }

  return (this.left ? this.left.contains(value) : false) || 
         (this.right ? this.right.contains(value) : false);
};
//depthFirstLog
  //check whether node is defined? 
  //recurse left.
  //apply function to current node
  //recurse right.
BinarySearchTree.prototype.depthFirstLog = function(cb) {
  // Implementation choice: in-order traversal
  cb(this.value);

  if (this.left !== undefined) {
    this.left.depthFirstLog(cb);
  }

  if (this.right !== undefined) {
    this.right.depthFirstLog(cb);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
