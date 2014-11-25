function Node(n) {
    this.key = n;
    this.left = null;
    this.right = null;
    this.parent = null;
}

function BST() {
    this.root = null;
}

function Queue() {
    this.queue = [];
    this.head = 0;
    this.tail = 0;
}

Queue.prototype = {
    enqueue: function(n) {
        this.queue[this.tail] = n;
        this.tail++;
    },
    dequeue: function() {
        var temp = this.queue[this.head];
        this.head++;
        return temp;
    },
    isEmpty: function() {
        return this.head == this.tail;
    }
};

BST.prototype = {
    insert: function(n) {
        if (this.root === null) {
            this.root = new Node(n);
        } else {
            var temp = this.root;
            while (true) {
                if (n < temp.key) {
                    if (temp.left === null) {
                        temp.left = new Node(n);
                        temp.left.parent = temp;
                        break;
                    } else {
                        temp = temp.left;
                    }
                } else {
                    if (temp.right === null) {
                        temp.right = new Node(n);
                        temp.right.parent = temp;
                        break;
                    } else {
                        temp = temp.right;
                    }
                }
            }
        }
    },
    inOrder: function() {
       console.log("in order");
       this.root.inOrder();
    },
    preOrder: function() {
       console.log("preorder");
       this.root.preOrder();
    },
    postOrder: function() {
       console.log("postorder");
       this.root.postOrder();
    },
    breadthFirst: function() {
        console.log("breadth first");
        this.root.breadthFirst();
    },
    reverseBreadthFirst: function() {
        console.log("reverse breadth first");
        this.root.reverseBreadthFirst();
    }
};

Node.prototype = {
    inOrder: function() {
        if (this.left !== null) {
            this.left.inOrder();
        }
        console.log(this.key);
        if (this.right !== null) {
            this.right.inOrder();
        }
    },
    preOrder: function() {
        console.log(this.key);
        if (this.left !== null) {
            this.left.preOrder();
        }
        if (this.right !== null) {
            this.right.preOrder();
        }
    },
    postOrder: function() {
        if (this.left !== null) {
            this.left.postOrder();
        }
        if (this.right !== null) {
            this.right.postOrder();
        }
        console.log(this.key);
    },
    breadthFirst: function() {
        var q = new Queue();
        q.enqueue(this);
        while (!q.isEmpty()) {
            var node = q.dequeue();
            console.log(node.key);
            if (node.left !== null) {
                q.enqueue(node.left);
            }
            if (node.right !== null) {
                q.enqueue(node.right);
            }
        }
    },
    reverseBreadthFirst: function() {
        var s = [];
        var q = new Queue();
        q.enqueue(this);
        while (!q.isEmpty()) {
            var node = q.dequeue();
            s.push(node.key);
            if (node.left !== null) {
                q.enqueue(node.left);
            }
            if (node.right !== null) {
                q.enqueue(node.right);
            }
        }
        while (s.length !== 0) {
            console.log(s.pop());
        }

    }
};