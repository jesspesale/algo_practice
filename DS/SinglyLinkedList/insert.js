class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  insert(index, value) {
    let newNode = new Node(value);
    if (index < 0 || index > this.length) {
      return false;
    } else if (index === this.length) {
      return !!this.push(newNode);
    } else if (index === 0) {
      return !!this.unshift(newNode);
    } else {
      let previous = this.get(index - 1);
      let previousNext = previous.next;
      previous.next = newNode;
      newNode.next = previousNext;
      this.length++;
      return true;
    }
  }
}
