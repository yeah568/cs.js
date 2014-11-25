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
}