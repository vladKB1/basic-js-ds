const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
    front = null;
    back = null;

    getUnderlyingList() {
        return this.front;
    }

    enqueue(x) {
        if (this.back) {
            this.back.next = new ListNode(x);
            this.back = this.back.next;
        } else
            if (!this.back) {
                this.back = new ListNode(x);
            }

        if (!this.front) {
            this.front = this.back;
        }
    }

    dequeue() {
        let x = this.front.value;

        if (this.front === this.back) {
            this.front = null;
            this.back = null;
        } else {
            let x = this.front;
            this.front = this.front.next;
            x.next = null;
        }

        return x;
    }
}

module.exports = {
    Queue
};
