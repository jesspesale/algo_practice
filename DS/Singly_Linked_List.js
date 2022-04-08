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
    this.tail = newTail
    this.tail.next = null;
    this.length--;
    return newTail.val;
    }

}

// let first = new Node("Hi");
// first.next = new Node("there");
let list = new SinglyLinkedList
list.push("Hi")
list.push("there")
list.push("Jess")
list.pop()
console.log(list)