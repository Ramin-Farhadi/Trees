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
  lookup(value) {
    if (this.root !== null) {
      if (this.root.value === value) {
        return true;
      }
      let parent = this.root;

      while (parent.left !== null || parent.right !== null) {
        if (parent.value === value) {
          return true;
        } else {
          while (value > parent.value) {
            if (parent === null) {
              return false;
            }
            parent = parent.right;
            if (!parent) {
              return false;
            }
            if (parent.value === value) {
              return true;
            }
          }
          while (value < parent.value) {
            parent = parent.left;
            if (!parent) {
              return false;
            }
            if (parent.value === value) {
              return true;
            }
          }
        }
      }
      return false;
    } else {
      return false;
    }
  }
}
//remove

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

console.log(tree);
