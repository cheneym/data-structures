describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  //should only have one copy of a key?...
  it('should only have only one copy of an item', function() {
    set.add('Hello');
    set.add('Hello');
    expect(Object.keys(set._storage)).to.have.length(1);
  });
  
  it('should have value if you add, remove, and add the same value', function() {
    set.add('hi');
    set.remove('hi');
    set.add('hi');
    expect(set.contains('hi')).to.equal(true);
  }); 
  //should have value if you add, remove, add
  //should not throw exception when you remove an item that doesn't exist
  it('should not throw exception when you remove an item that doesn\'t exist', function() {
    expect(function() { set.remove('123'); }).to.not.throw();
    set.add('1');
    expect(function() { set.remove('2'); }).to.not.throw();
  });
});
