class Node {
    constructor(data) {
        this.data = data; 
        this.left = null;   
        this.right = null; 
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null; 
    }
    insert(data) {
        let newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode); 
        }
    }
    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inOrderTraverse(node) {
        if (node != null) {
            console.log(node.data)
            this.inOrderTraverse(node.left);
            this.inOrderTraverse(node.right);
        }
    }
}

const BST = new BinarySearchTree();
BST.insert(11); // establishes root node 
BST.insert(7);
BST.insert(9);
BST.insert(15);
BST.insert(6);
BST.insert(3);
console.log(BST);

console.log(BST.inOrderTraverse(BST.root))
