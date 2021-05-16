// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

class Stack {
  constructor(name) {
    this.name = name;
    this.data = [];
    this.top = 0;
    this.size = 0;
  }

  push() {}

  pop() {}

  peak() {}

  isEmpty() {}
}

class Queue {
  constructor() {
    this.data = [];
    this.size = 0;
    this.rear;
  }

  enqueue() {}
  dequeue() {}
}

// Node for Singly Linked List
class Node1 {
  constructor(element, next) {
    this.element = element;
    this.next = next || null;
  }
}

// let node1 = new Node(2,null)
// let node2 = new Node(3,null)
// node1.next=node2

// console.log(node1)

class LinkedList {
  constructor(){
    this.size = 0
    this.head = null
    this.tail = null
  }

  //Adds a value before the head then assign it as the new head
  prepend(value){
    let node = new Node(value)
    this.head = node
    
    if(!this.tail){
      this.tail = node
    }
  }

  delte(value){
    let current = 0
    current = this.head  

    while(current.next != null){
      if(current.next.element == value) {
        if(current.next.next = null) {
          current.next = null
          this.tail = current
          this.size--
          return this
        }
      }
    }  
  }

}

export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export default class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Push a new value to the tail of the linked list.
   */

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  /**
   * Remove an item from the end of the linked list.
   */
  pop() {
    if (!this.head) {
      return null;
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length -= 1;
    return this;
  }

  /**
   * Remove a node from the beginning of the list.
   */
  shift() {
    if (!this.head) return null;
    if (this.length === 1) {
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.length -= 1;
    return this;
  }

  /**
   * Add a node to the head of the linked list.
   */
  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  /**
   * Get a Node at a specific index
   */
  getNodeAtIndex(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    if (index < Math.floor(this.length / 2)) {
      let cur = this.head;
      let counter = 0;
      while (counter < index) {
        cur = cur.next;
        counter++;
      }
      return cur;
    } else {
      let cur = this.tail;
      let counter = this.length - 1;
      while (counter > index) {
        cur = cur.prev;
        counter--;
      }
      return cur;
    }
  }

  /**
   * Set a node at a specific index.
   */
  setNodeAtIndex(index, value) {
    if (!this.getNodeAtIndex(index)) {
      return false;
    } else {
      this.getNodeAtIndex(index).value = value;
      return true;
    }
  }

  /**
   *  Insert a node at a specific index.
   */
  insertAtIndex(index, val) {
    let newNode = new Node(val);
    if (index < 0 || index > this.length) return null;
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);
    let preNode = this.getNodeAtIndex(index - 1);
    let curNode = preNode.next;
    newNode.next = curNode;
    curNode.prev = newNode;
    preNode.next = newNode;
    newNode.prev = preNode;
    this.length++;
    return this;
  }

  /**
   * Remove a node at a specific index.
   */

  removeAtIndex(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let curNode = this.getNodeAtIndex(index);
    curNode.prev.next = curNode.next;
    curNode.next.prev = curNode.prev;
    curNode.next = null;
    curNode.prev = null;
    this.length--;
    return this;
  }
}

class Node3 {
  /**
   * Create a new node instance
   */
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  /**
   * Insert a new value into the BST
   */
  insert(value) {
    const node = new Node(value);

    if (!this.root) {
      this.root = node;
      return this;
    }

    let current = this.root;

    while (current) {
      if (current.value == value) {
        return undefined;
      }
      if (node.value < current.value) {
        if (current.left === null) {
          current.left = node;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = node;
          return this;
        }
        current = current.right;
      }
    }
  }

  /**
   * Find a value in the BST.
   */
  find(value) {
    if (!this.root) {
      return undefined;
    }
    let current = this.root;
    while (current)
      if (current.value == value) {
        return current;
      } else if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    return undefined;
  }

  remove(value) {
    const deleteNode = (node, value) => {
      //if no root exists reteurn null
      //node = new Node(value)
      if (!node) {
        return null;
      }

      //if the node contains the value ...
      if (node.value == value) {
        //i now need to modify the subtree so that I can remove the current node
        //the procedure depends on how many children this node has

        //... and has NO childeren return null
        if (!node.left && !node.right) {
          return null;
        }

        //the parent of the root must point to the child of this root
        //... and has a right child, return that child
        else if (!node.left) {
          return node.right;

          //... and has a left child, return that child
        } else if (!node.right) {
          return node.left;
        }
        //... and has two children, move right to end of left
        //let newSubRoot = new Node(node.left)

        let temp = node.left;
        let tempNext = temp;
        while (tempNext.right) {
          tempNext = tempNext.right;
        }
        tempNext.right = node.right;
        return temp;
      } else if (value < node.value) {
        node.left = deleteNode(node.left, value);
        return node;
      } else {
        node.right = deleteNode(node.right, value);
        return node;
      }
    };
    // Recursively call the function passing in the root as node
    this.root = deleteNode(this.root, value);
  }
}

export default class Trie {
  /**
   * Creates a Trie
   * @return {Object} Trie
   */
  constructor() {
    this.end = false;
    this.prefixes = 0;
    this.children = {};
  }

  /**
   * Insert a string into the Trie
   * @param  {String} str String to add
   * @param  {Number} pos Optional position in Trie
   * @return {}
   */
  insert(str, pos = 0) {
    // Store this instance of the Trie class into a variable
    let current = this;
    // Iterate through the string for each letter
    for (let letter of str) {
      // Check if the letter of the str is a key in the children obj
      if (!current.children[letter]) {
        // If it doesn't exist, make the letter the key with value of a new Trie
        current = current.children[letter] = new Trie();
        current.prefixes = letter;
      }
      // If it does exist make current to the trie that contains current letter
      else {
        current = current.children[letter];
        current.prefixes = letter;
      }
    }
    current.end = true;
  }

  /**
   * Return all words in Trie with a given prefix
   * @param  {String} str Prefix to search for
   * @return {Array} Array of strings that match for prefix
   */
  getAllWords(word = '', words = []) {
    if (this.end) {
      words.push(word);
    }

    for (let key in this.children) {
      this.children[key].getAllWords(word + key, words);
    }
    return words;
  }

  autoComplete(str) {
    let current = this;
    let currTrie;

    for (let i = 0; i < str.length; i++) {
      currTrie = str[i];
    }

    for (let key in current.children) {
      if (key.prefixes == currTrie) {
        console.log(current.children[key]);
      }
    }
    console.log(current);
    console.log(current.children['c']);
    current.getAllWords();
  }
} 

// ALGORITHMS
function mergeSort(arr) {
  //Base case for when the length is <=1 return the arr
  if (arr.length <= 1) {
    return arr;
  }
  //Declared the mid which will be useful in cutting the array in half
  let mid = Math.floor(arr.length / 2);
  //Left recursively calls the function but with only the left side of the array as the parameter
  let left = mergeSort(arr.slice(0, mid));
  //Calls the function again with right side of the array
  let right = mergeSort(arr.slice(mid));
  //Return and call the helper function with the left and right as parameters
  return merge(left, right);
}

//Need a subroutine that handles the merging of arrays after the array is broken down to 1 item
function merge(left, right) {
  //Declare an empty array that the sorted items will go in to
  let sorted = [];
  //Loop that continues while there is items in both arrays
  while (left.length && right.length) {
    //Conditional if the 1st element in the left array is bigger push the 1st element in the RIGHT array
    if (left[0] > right[0]) {
      sorted.push(right.shift());
    } else {
      sorted.push(left.shift());
    }
  }
  //Combine arrays using concat and if anything is left over concat that to the end of the array
  return sorted.concat(left.slice().concat(right.slice()));
}

// console.log(mergeSort(array));

function binarySearch(arr, val, start, end) {
  if (start > end) {
    return false;
  }
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] == val) {
    return true;
  }
  if (arr[mid] > val) {
    return binarySearch(arr, val, start, mid - 1);
  } else {
    return binarySearch(arr, val, mid + 1, end);
  }
}

// console.log(binarySearch(mergeSort(array), target1, start, end));