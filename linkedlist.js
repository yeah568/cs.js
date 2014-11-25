function Node(n) {
    this.key = n;
    this.next = null;
    this.prev = null;
}

function LinkedList() {
    this.length = 0;
    this.head = null;
    this.tail = null;
}

LinkedList.prototype = {
    insert: function(k) {
        var node = new Node(k);
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
            this.length++;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
            this.length++;
        }
    },
    remove: function(k) {
        var temp = this.head;
        while (temp) {
            if (temp.key == k) {
                temp.prev.next = temp.next;
                temp.next.prev = temp.prev;
                this.length--;

            }
            temp = temp.next;
        }
    },
    toArray: function() {
        var array = [];
        var temp = this.head;
        while (temp) {
            array.push(temp.key);
            temp = temp.next;
        }
        return array;
    }
};