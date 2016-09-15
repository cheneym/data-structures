

// Instantiate a new graph
var Graph = function() {
  // properties for collections of nodes and edges. collections can be arrays or objects
  this.vertices = {};
  this.edges = [];
};

// The runtime of below functions depends on the object design of node and edge
// constructor for node
  // should take in value
var Vertex = function(value) {
  this.value = value;
};
// constructor for edge 
  // should take in two values

var Edge = function(n1, n2) {
  this.node1 = n1;
  this.node2 = n2;
};


// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //create a node
  var nodeObject = new Vertex(node);

  //add node to graph.nodes, using node's value as key, and node itself as value
  this.vertices[node] = nodeObject;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //use the value to access graph.nodes to see if key/value exists and return
  return !!this.vertices[node];
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //Use node as key to see if node exists in graph .nodes

  delete this.vertices[node];

  // remove edges associated with node
  for (var i = 0; i < this.edges.length; i++) {
    var currentEdge = this.edges[i];
    if (currentEdge.node1 === node || currentEdge.node2 === node) {
      this.edges.splice(i, 1);
      break;
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //Iterate through edge collection and check each edge
  var edge;
  for (var i = 0; i < this.edges.length; i++) {
    edge = this.edges[i];
    if (edge.node1 === fromNode && edge.node2 === toNode ||
        edge.node2 === fromNode && edge.node1 === toNode) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // Add edge to edge collection
  this.edges.push(new Edge(fromNode, toNode));
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // Iterate through edge collectio and check each edge
  var edge;
  for (var i = 0; i < this.edges.length; i++) {
    edge = this.edges[i];
    if (edge.node1 === fromNode && edge.node2 === toNode ||
        edge.node2 === fromNode && edge.node1 === toNode) {
      this.edges.splice(i, 1);
      break;
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // Iterator through every node and call cb
  for (var key in this.vertices) {
    cb(this.vertices[key].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 Assuming objects are just hashtables in the backend and arrays are in-memory arrays:
 addNode - O(1)
 contains - O(1)
 removeNode - O(E)
 hasEdge - O(E)
 addEdge - O(1)
 removeEdge - O(E)
 forEachNode - O(V)
 Space complexity - O(V + E)
 */




