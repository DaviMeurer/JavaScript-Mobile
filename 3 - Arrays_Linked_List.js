class Node {
    constructor(data) {
      this.data = data;  // Stores the value
      this.next = null;  // Initially, does not point to anyone
    }
  }
   
  class LinkedList {
    constructor() {
      this.head = null; // First node of the list
      this.length = 0; // Counts how many elements are in the list
    }
   
    insertEnd(data) {
      let newNode = new Node(data); // Create a new node
   
      if (this.head === null) {
        // If the list is empty, the new node will be the first node (head)
        this.head = newNode;
      } else {
        // Traverse the list to the last node
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        // The last node now points to the new node
        current.next = newNode;
      }
      this.length++; // Update the size of the list
    }
   
    print() {
      let current = this.head;
      let result = "";
   
      while (current !== null) {
        result += current.data + " -> ";
        current = current.next;
      }
      console.log(result + "null"); // Indicates the end of the list
    }
   
    remove(data) {
      if (this.head === null) return; // If the list is empty, do nothing
   
      // Special case: removing the first node
      if (this.head.data === data) {
          this.head = this.head.next;
          this.length--;
          return;
      }
   
      // Traverse the list looking for the node to remove
      let current = this.head;
      let previous = null;
   
      while (current !== null && current.data !== data) {
          previous = current;
          current = current.next;
      }
   
      if (current === null) return; // The element was not found
   
      // Remove the node from the list
      previous.next = current.next;
      this.length--;
    }
   
    search(data) {
      let current = this.head;
      while (current !== null) {
          if (current.data === data) {
              return true; // Found the element
          }
          current = current.next;
      }
      return false; // Not found
    }
  }
   
  // Creating a new linked list
  let list = new LinkedList();
   
  list.insertEnd(10);
  list.insertEnd(20);
  list.insertEnd(30);
  list.insertEnd(40);
   
  list.print(); // Expected output: 10 -> 20 -> 30 -> null
   
  console.log(list.search(20)); // true
  console.log(list.search(50)); // false
   
  list.remove(20);
  list.print(); // Expected output: 10 -> 30 -> null