var DoublyLinkedList = function() {
  //head, tail
  this.head = null;
  this.tail = null;
};

//node class
var FancyNode = function(value) {
  //value
  this.value = value;
  //next
  this.next = undefined;
  //previous
  this.prev = undefined;
};

//addToTail
DoublyLinkedList.prototype.addToTail = function(node) {
  // only accept nodes that are not part of a linked list (i.e. no circular lists)
  if (node.next !== undefined || node.prev !== undefined) {
    return;
  }

  // if no nodes yet, set head and tail equal
  if (this.head === null && this.tail === null) {
    this.head = node;
    this.tail = node;
    node.prev = null;
    node.next = null;
  } else {
    // otherwise, add to end (rearrange references)
    // old and new tails point to one another
    this.tail.next = node;
    node.prev = this.tail;
    node.next = null;

    this.tail = node;
  }
};

//insert
DoublyLinkedList.prototype.insert = function(node, pos) {
  // if position is undefined, add to the end
  if (pos === undefined || pos === this.tail) {
    return this.addToTail(node);
  }
  // otherwise, rearrange pointers depending on whether node is the tail
  //a   pos  node c
  node.next = pos.next;
  node.prev = pos;
  pos.next = node;
  node.next.prev = node;
};

//removeFromHead
DoublyLinkedList.prototype.removeFromHead = function() {

  //if empty, return null
  var result = null;
  if (this.head === null && this.tail === null) {
    return result;
  }
  //if one element, return node and reset pointers
  if (this.head.next === null && this.head.prev === null) {
    result = this.head;
    this.head = null;
    this.tail = null;
  } else {
  //if more than one element
    result = this.head;
    result.next.prev = null; // will not cause error because more than 1 in list
    this.head = result.next;
  }

  result.next = undefined;
  result.prev = undefined;

  return result;
};

//contains
DoublyLinkedList.prototype.contains = function(node) {
  var result = false;

  var iterator = this.head;
  while (iterator !== null) {
    if (iterator === node) {
      result = true;
      break;
    }

    iterator = iterator.next;
  }

  return result;
};

//asArray
DoublyLinkedList.prototype.asArray = function() {
  var arr = [];
  var iterator = this.head;
  
  while (iterator !== null) {
    arr.push(iterator);
    iterator = iterator.next;
  }

  return arr;
};