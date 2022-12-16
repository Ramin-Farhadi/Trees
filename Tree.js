class Node {
  constructor(value) {
    this.right = null;
    this.left = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let parentNode = this.root;
      let bool = false;
      while (bool === false) {
        while (value > parentNode.value) {
          if (parentNode.right !== null) {
            parentNode = parentNode.right;
          } else {
            parentNode.right = newNode;
            bool = !bool;
          }
        }
        while (value < parentNode.value) {
          if (parentNode.left !== null) {
            parentNode = parentNode.left;
          } else {
            parentNode.left = newNode;
            bool = !bool;
          }
        }
      }
    }
  }
}
//   lookup(value) {}
//remove
// }

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(100);
tree.insert(95);
tree.insert(96);
tree.insert(98);
tree.insert(97);

console.log(tree);
