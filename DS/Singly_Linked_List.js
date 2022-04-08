
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

  push(val){
    let node = new Node(val);
    if(this.head === null){
        this.head = node;
        this.tail = this.head;
    }else{
        this.tail.next = node;
        this.tail = node;
    }
    this.length++
  }
}

let first = new Node("Hi");
// first.next = new Node("there");
let list = new SinglyLinkedList
list.push(first)
list.push("there")
console.log(list)