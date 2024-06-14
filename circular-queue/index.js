//Circular Queue using Linkedlist Implementation
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CircularQueue {
  constructor(maxSize) {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.maxSize = maxSize;
  }

  isEmpty() {
    return this.size === 0;
  }

  isSize() {
    return this.size;
  }

  isMaxSize() {
    return this.size === this.maxSize;
  }

  enqueue(value) {
    let node = new Node(value);
    if (this.isMaxSize()) {
      return null;
    }
    if (this.isEmpty()) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.size++;
  }

  dequeue() {
    let temp = this.first;
    if (this.isEmpty()) {
      return null;
    }
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      temp = null;
    }
    this.size--;
    return temp;
  }
}

const queue = new CircularQueue(2);
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(40);
console.log(queue);
