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
