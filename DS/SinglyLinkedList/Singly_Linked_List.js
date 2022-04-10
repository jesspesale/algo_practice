const { timeStamp } = require("console");

class Node{
    constructor(val){
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

  pop() {
    if (this.length == 0) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return newTail.val;
  }

  shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return oldHead;
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

  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode === null) return false;

    foundNode.val = value;
    return true;
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

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    let previous = this.get(index - 1);
    let removed = previous.next;
    previous.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    let current = this.head;

    this.head = this.tail;
    this.tail = current;
    let previous = null;
    for (let i = 0; i < this.length; i++) {
      let next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    return this;
  }
  
}


let list = new SinglyLinkedList
list.push("Hi")
list.push("there")
list.push("Jess")
// list.pop()
// console.log(list)