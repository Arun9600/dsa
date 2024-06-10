class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  isLength() {
    return this.length;
  }

  push(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
  }

  pop() {
    let temp = this.tail;
    if (this.length === 0) {
      return undefined;
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }

  unshift(value) {
    let node = new Node(value);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length++;
  }

  shift() {
    let temp = this.head;
    if (this.length === 0) {
      return undefined;
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp = null;
    }
    this.length--;
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index === this.length / 2) {
      let temp = this.head;
      for (let i = 0; i < index; i++) {
        temp = temp.next;
        return temp;
      }
    } else {
      let temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev;
        return temp;
      }
    }
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    let node = new Node(value);
    if (index < 0 || index > this.length) {
      return undefined;
    }
    if (index === 0) {
      return this.unshift(value);
    } else if (index === this.length) {
      return this.push(value);
    } else {
      let temp = this.head;
      for (let i = 0; i < index - 1; i++) {
        temp = temp.next;
      }
      node.next = temp.next;
      temp.next.prev = node;
      temp.next = node;
      node.prev = temp;
    }
  }

  remove(index) {
    let temp = this.head;
    let removedElement;
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index === 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop();
    } else {
      for (let i = 0; i < index - 1; i++) {
        temp = temp.next;
      }
      removedElement = temp.next;
      temp.next = removedElement.next;
      temp.next.prev = temp;
    }
    this.length--;
    return removedElement;
  }

  print() {
    let temp = this.head;
    let result = "";
    while (temp) {
      result += `${temp.value} `;
      temp = temp.next;
    }
    console.log(result);
  }
}

const list = new DoublyLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.insert(2, 7);
list.remove(3);
list.print();
