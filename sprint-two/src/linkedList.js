var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

    // make a new node with the value
    var node = Node(value);

    // if nothing exists in linked list yet
    if (list.tail === null) {
      list.tail = node;
      list.head = node;
    } else {      
      // set original tail node's tail to new node
      list.tail.next = node;

      // set list's tail to new node
      list.tail = node;
    }
  };

  list.removeHead = function() {
    var result;
    
    // if there is no head
    if (list.head !== null) {
      // save value to node that head points to
      result = list.head.value;
      
      // if last element, then reset head and tail to null
      if (list.head.next === null) {
        list.head = null;
        list.tail = null;
      } else {
      // set head to head.next
        list.head = list.head.next;
      }
    }

    // return value of saved node
    return result;
  };

  list.contains = function(target) {
    // create new variable that is a pointer and set to list.head
    var iterator = list.head;
    
    // while the current node is not null
    while (iterator !== null) {
      // if target is the node value, return true
      if (iterator.value === target) {
        return true;
      }
      iterator = iterator.next;
    }
    
    // return false at the end
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
