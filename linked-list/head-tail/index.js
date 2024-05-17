class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
    this.tail = null;
  }

  isEmpty() {
    return this.size === 0;
  }

  isSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  removeFront() {
    if (this.isEmpty()) {
      console.log(`The list is empty`);
    } else {
      let value = this.head.value;
      this.head = this.head.next;
      this.size--;
      return value;
    }
  }

  removeEnd() {
    if (this.isEmpty()) {
      console.log(`List is empty`);
    }
    let value = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    this.size--;
    return value;
  }

  print() {
    if (this.isEmpty()) {
      console.log(`empty node`);
    } else {
      let result = "";
      let current = this.head;
      while (current) {
        result += ` ${current.value} `;
        current = current.next;
      }
      console.log(result);
    }
  }
}

const list = new LinkedList();
list.prepend(50);
list.append(70);
list.print();
list.removeEnd();
list.print();
