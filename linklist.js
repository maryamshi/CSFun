class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  appendData(value) {
    // add to end
    let newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
      return;
    }

    let currentNode = this.head;
    while (currentNode.next != null) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    return;
    //time complexity :
    //spaces complexity :
  };

  prependData(value) {
    // add to begining of tree
    let newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    //time complexity :
    //spaces complexity :
  }

  printLinkedList() {
    let currentNode = this.head;
    while (currentNode != null) {
      console.log(`${currentNode.data}`);
      currentNode = currentNode.next;
    }
    //time complexity :
    //spaces complexity :
  }

  removeFirstGivenNode(value) {
    if (this.head == null) {
      return;
    }
    // if node is head
    if (this.head.data == value) {
      this.head = this.head.next;
      return;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.data == value) {
        currentNode.next = currentNode.next.next;
        return;
      }
      currentNode = currentNode.next;
    }
    //time complexity :
    //spaces complexity :
  }

  countNodes() {
    // return int = number nodes
    let count = 0;
    let currentNode = this.head;

    while (currentNode != null) {
      count += 1
      currentNode = currentNode.next;
    }
    return count;
    console.log(count);
    //time complexity :
    //spaces complexity :
  }

  searchValue(value) {
    // search and return a value;
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.data === value) return currentNode;
      currentNode = currentNode.next;
    }
      return null;
    //time complexity :
    //spaces complexity :
  }

  reverseList() {
    // reverse singly linked list
    let currentNode= this.head;
    let previousNode = null;

    while (currentNode!= null) {
      let next = current.next;
      current.next = previousNode;

      previousNode = current;
      currentNode= next;
    }
    this.head = previousNode;
    //time complexity :
    //spaces complexity :
  }

  returnnthDataFromEnd(n) {
    //Return the data in the kth node from the end
    let count = 0;
    let currentNode = this.head;
    while (currentNode && count != n) {
      count += 1
      currentNode = currentNode.next;
    }

    if (currentNode == null) {
      throw "Linked List has less than n nodes available"
      return null;
    }

    let newCurrent = this.head;
    while (currentNode.next != null) {
      currentNode = currentNode.next;
      newCurrent = newCurrent.next;
    }
    console.log(newCurrent.data);
    return newCurrent.data;
    //time complexity :
    //spaces complexity :
  }


  findMin() {
    if (this.head == null) {
      return null;
    }

    let currentNode = this.head;
    let min = currentNode.data;
    currentNode = currentNode.next;

    while (currentNode != null) {
      if (currentNode.data < min) {
        min = currentNode.data;
      }
      currentNode = currentNode.next;
    }
    console.log(min);
    return min;
    //time complexity :
    //spaces complexity :
  }

  findMax() {
    if (this.head == null) {
      return null;
    }

    let currentNode = this.head;
    let max = currentNode.data;
    currentNode = currentNode.next;

    while (currentNode) {

      if (currentNode.data > max) {
        max = currentNode.data;
      }
      currentNode = currentNode.next;
    }
    console.log(max);
    return max;
    //time complexity :
    //spaces complexity :
  }

  returnMiddleValue() {
    // Return the value of the middle node in the linked list.
    if (this.head == null) {
      return null;
    }

    let slow = this.head;
    let fast = this.head.next;
    while (fast) {
      slow = slow.next;
      fast = fast.next;
      if (fast) {
        fast = fast.next;
      }
    }
    console.log(slow.data);
    return slow.data;
    //time complexity :
    //spaces complexity :
  }

  isCycle() {
    // Return true, if the linked list has a cycle. Return false if the linked list terminated with nil and does not have a cycle.
    if (this.head == null || this.head.next == null) {
      return false
    }

    let slow = this.head;
    let fast = this.head;
    while (fast != null) {
      slow = slow.next;
      fast = fast.next;

      if (fast != null) {
        fast = fast.next;
      }

      if (slow == fast) {
          console.log(true);
          return true;
      }
    }
    console.log(false);
    return false;
    //time complexity :
    //spaces complexity :
  }

  creatCycle() {
    if (this.head == null) {
      return;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = this.head;
    //time complexity :
    //spaces complexity :
  }

  removeDub() {
    // remove duplicates from an unsorted linked list
    // not working correctly
    // let previousNode = new Node(null);
    let currentNode = this.head;
    let hashTable = {};

    while (currentNode) {
      console.log(hashTable)
      console.log(currentNode.data)

      if (hashTable["currentNode.data"]) {
          this.removeFirstGivenNode(currentNode.data)
      } else {
        hashTable["currentNode.data"] = currentNode.data;
      }
      currentNode = currentNode.next;
    }
    //time complexity :
    //spaces complexity :
  }
}

// create linkedlist
my_linked_list = new LinkedList();
// add nodes
my_linked_list.appendData(15);
my_linked_list.appendData(40);
my_linked_list.prependData(9);
my_linked_list.prependData(80);
my_linked_list.prependData(90);
my_linked_list.prependData(90);
// print list
my_linked_list.printLinkedList();
console.log("after removal");
my_linked_list.removeDub();
my_linked_list.printLinkedList();
