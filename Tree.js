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
        if (value > parentNode.value) {
          if (parentNode.right !== null) {
            parentNode = parentNode.right;
          } else {
            parentNode.right = newNode;
            bool = !bool;
          }
        } else if (value < parentNode.value) {
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
          if (value > parent.value) {
            parent = parent.right;
            if (!parent) {
              return false;
            }
            if (parent.value === value) {
              return true;
            }
          } else if (value < parent.value) {
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

console.log(
  tree.lookup(9),
  tree.lookup(4),
  tree.lookup(6),
  tree.lookup(20),
  tree.lookup(170),
  tree.lookup(15),
  tree.lookup(1),
  tree.lookup(3),
  tree.lookup(6),
  tree.lookup(188),
  tree.lookup(145),
  tree.lookup(16)
);

console.log(tree);
