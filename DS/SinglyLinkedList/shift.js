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

  shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return oldHead;
  }
  
}
