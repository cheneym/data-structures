describe('doublyLinkedList', function() {
  var list;
  beforeEach(function() {
    list = new DoublyLinkedList();
  });

  it('should have methods named "insert", "contains", "addToTail", "asArray", and "removeFromHead"', function() {
    //debugger;
    expect(list.insert).to.be.a('function');
    expect(list.contains).to.be.a('function');
    expect(list.addToTail).to.be.a('function');
    expect(list.removeFromHead).to.be.a('function');
    expect(list.asArray).to.be.a('function');
  });

  it('should have properties head and tail', function() {
    expect(list).to.have.property('head');
    expect(list).to.have.property('tail');
  });

  it('New Nodes should have property value but not next, and prev', function() {
    var fancyNode;
    fancyNode = new FancyNode(5);
    expect(fancyNode).to.have.property('value');
    expect(fancyNode.next).to.equal(undefined);
    expect(fancyNode.prev).to.equal(undefined);
  });


  it('should be able to add elements using addToTail', function() { // note, we're adding FancyNode references, not values
    //add to empty list
    var node = new FancyNode(4);
    list.addToTail(node);
    expect(list.head).to.eql(node);
    expect(list.tail).to.equal(node);

    //add to list with one element. Assigns head, tail properly
    var anotherNode = new FancyNode(7);
    list.addToTail(anotherNode);
    expect(list.head).to.equal(node);
    expect(list.tail).to.equal(anotherNode);

    //add to list with multiple elements
    var lastNode = new FancyNode(9);
    list.addToTail(lastNode);
    expect(list.head).to.equal(node);
    expect(list.tail).to.equal(lastNode);

    //cannot add nodes that is part of another list
    list2 = new DoublyLinkedList();
    list3 = new DoublyLinkedList();
    var badNode2 = new FancyNode(12);
    list2.addToTail(badNode2);
    list3.addToTail(badNode2);
    expect(list3.head).to.equal(null);
    expect(list3.tail).to.equal(null);

    //cannot add the same node twice 
    list = new DoublyLinkedList();
    var badNode = new FancyNode(100);
    list.addToTail(badNode);
    list.addToTail(badNode);
    expect(list.head).to.equal(badNode);
    expect(list.tail).to.equal(badNode);
    expect(badNode.prev).to.equal(null);
    expect(badNode.next).to.equal(null);
  });

  it('should be able to remove elements', function() {
    //remove does nothing when list has no elements
    //debugger;
    expect(list.removeFromHead()).to.equal(null);

    //remove elements from a list with one element, reassigns head, tail properly
    var node = new FancyNode(4);
    list.addToTail(node); 
    expect(list.removeFromHead()).to.equal(node);
    expect(list.head).to.equal(null);
    expect(list.tail).to.equal(null);

    //remove elements from list with multiple elements
    var anotherNode = new FancyNode(5);
    list.addToTail(node);
    list.addToTail(anotherNode);

    var removed = list.removeFromHead();
    expect(removed).to.equal(node);
    expect(removed.head).to.equal(undefined);
    expect(removed.tail).to.equal(undefined);
  });

  it('should be able to convert linked list to array of FancyNodes', function() {
    //add to empty list
    var node = new FancyNode(4);
    list.addToTail(node);
    expect(list.asArray()).to.eql([node]); // is this right?
    
    //add to list with one element. Assigns head, tail properly
    var anotherNode = new FancyNode(7);
    list.addToTail(anotherNode);
    expect(list.asArray()).to.eql([node, anotherNode]);

    //add to list with multiple elements
    var lastNode = new FancyNode(7);
    list.addToTail(lastNode);
    expect(list.asArray()).to.eql([node, anotherNode, lastNode]);    

  });

  it('should detect whether an element is contained in the linked list', function() {
    // no elements
    var nonExistantNode = new FancyNode(10);
    expect(list.contains(nonExistantNode)).to.equal(false);

    //for one element
    // test that contains will find element if it exists. 
    // will not find element if it does not exist
    var node = new FancyNode(1);
    list.addToTail(node);
    expect(list.contains(node)).to.equal(true);
    expect(list.contains(nonExistantNode)).to.equal(false);

    // add a bunch of elements
    var anotherNode = new FancyNode(2);
    list.addToTail(anotherNode);
    expect(list.contains(anotherNode)).to.equal(true);
    expect(list.contains(node)).to.equal(true);
    expect(list.contains(nonExistantNode)).to.equal(false);
  });

  it('should be able to add elements using insert', function() {
    //if no second param, add to tail
    var node = new FancyNode(4);
    list.insert(node);
    expect(list.head).to.eql(node);
    expect(list.tail).to.equal(node);

    var lastNode = new FancyNode(1);
    debugger;
    list.insert(lastNode, node);
    expect(list.asArray()).to.eql([node, lastNode]);

    //add to list with one element. Assigns head, tail properly
    var insertedNode = new FancyNode(7);
    list.insert(insertedNode, node);
    expect(list.asArray()).to.eql([node, insertedNode, lastNode]);

    // //add to list with multiple elements
    // var lastNode = new FancyNode(9);
    // list.addToTail(lastNode);
    // expect(list.head).to.equal(node);
    // expect(list.tail).to.equal(lastNode);

    // //cannot add nodes that is part of another list
    // list2 = new DoublyLinkedList();
    // list3 = new DoublyLinkedList();
    // var badNode2 = new FancyNode(12);
    // list2.addToTail(badNode2);
    // list3.addToTail(badNode2);
    // expect(list3.head).to.equal(null);
    // expect(list3.tail).to.equal(null);

    // //cannot add the same node twice 
    // list = new DoublyLinkedList();
    // var badNode = new FancyNode(100);
    // list.addToTail(badNode);
    // list.addToTail(badNode);
    // expect(list.head).to.equal(badNode);
    // expect(list.tail).to.equal(badNode);
    // expect(badNode.prev).to.equal(null);
    // expect(badNode.next).to.equal(null);

  });
});