//Class Node Initialisation
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//Class linkedList Initialisation
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //is empty function
  isEmpty() {
    return this.size === 0;
  }
  //Get the size(length)
  isSize() {
    return this.size;
  }

  //to create a new node and assign a value to it
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head; //current value will be the next
      this.head = node; //new value will be the Head
    }
    this.size++;
  }

  //append, used to add an element at last
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  //This method is used to insert a value at any place
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    //if index is 0 we can call prepend
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  //remove from Index
  removeIndex(index) {
    let removedElement;
    if (index < 0 || index >= this.size) {
      console.log(`We don't have any items to remove`);
    }
    if (index === 0) {
      removedElement = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedElement = prev.next;
      prev.next = removedElement.next;
    }
    this.size--;
    return removedElement.value;
  }

  //removeElement using Value
  removeValue(value) {
    if (this.isEmpty()) {
      return;
    }
    if (this.head.value === value) {
      this.size--;
      return value;
    }
    let prev = this.head;
    while (prev.next && prev.next.value !== value) {
      prev = prev.next;
    }
    if (prev.next) {
      let removedElement = prev.next;
      prev.next = removedElement.next;
      this.size--;
      return value;
    } else {
      return null;
    }
  }

  //search accepts values and will always returns index
  isSearch(value) {
    if (this.isEmpty()) {
      return;
    }
    let i = 0;
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return i;
      }
      current = current.next;
      i++;
    }
    return -1;
  }

  //reverse a linkedList
  reverse() {
    if (this.isEmpty()) {
      console.log(`Nothing to reverse`);
    }
    let prev = null;
    let current = this.head;
    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  //to print the value
  print() {
    if (this.isEmpty()) {
      console.log("Empty");
    } else {
      let current = this.head; //current element
      let result = "";
      while (current) {
        result += ` ${current.value} `;
        current = current.next;
      }
      console.log(result);
    }
  }
}
const list = new LinkedList();
list.prepend(10);
list.prepend(30);
list.prepend(50);
list.print();
console.log(list.isSize());
console.log(list.isEmpty());
list.append(60);
list.append(70);
list.print();
list.insert(100, 0);
list.insert(75, 2);
list.print();
list.removeValue(10);
list.print();
console.log(list.isSearch(30));
list.reverse();
list.print();
