var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //create new tree object;
  var childtree = Tree(value);

  //Add the new tree object as child of current object 
  this.children.push(childtree);
};

treeMethods.contains = function(target) {
  // create result variable
  var result = false;

  // check if current tree's value is target
  if (this.value === target) {
    result = true;
  }
  // for each children in array, recursively check if current value is in child
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      result = true;
      break;
    }
  }

  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 contains is O(n) because you can traverse all nodes
 addChild is O(1) because you have reference to parent node and you're just pushing
 */


