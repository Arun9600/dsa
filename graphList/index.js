class Graph {
  constructor() {
    this.adjacentList = {};
  }

  addVertex(vertex) {
    if (!this.adjacentList[vertex]) {
      this.adjacentList[vertex] = new Set();
    }
  }

  addEdges(vertex1, vertex2) {
    if (!this.adjacentList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacentList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacentList[vertex1].add(vertex2);
    this.adjacentList[vertex2].add(vertex1);
  }

  hasEdges(vertex1, vertex2) {
    return (
      this.adjacentList[vertex1].has(vertex2) &&
      this.adjacentList[vertex2].has(vertex1)
    );
  }

  deleteEdges(vertex1, vertex2) {
    this.adjacentList[vertex1].delete(vertex2);
    this.adjacentList[vertex2].delete(vertex1);
  }

  deleteVertex(vertex) {
    if (!this.adjacentList[vertex]) {
      return;
    }
    for (let v of this.adjacentList[vertex]) {
      this.deleteEdges(vertex, v);
    }
    delete this.adjacentList[vertex];
  }

  display() {
    for (let result in this.adjacentList) {
      console.log(result + " =>" + [...this.adjacentList[result]]);
    }
  }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addEdges("A", "B");
g.addEdges("B", "C");
console.log(g.hasEdges("A", "C"));
g.display();
