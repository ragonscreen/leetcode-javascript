/**
 * 0232. Implement Queue using Stacks
 *
 * Link: https://leetcode.com/problems/implement-queue-using-stacks/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-03-23
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Stack (topic_15)
 * - Design (topic_25)
 * - Queue (topic_34)
 *
 * Stats:
 * - Total Accepted: 1,450,104
 * - Total Submissions: 2,086,683
 * - Acceptance Rate: 69.5%
 *
 * Similar Problems:
 * - implement-stack-using-queues (Easy)
 */

/**
 * Approach: Stack
 */
class MyQueue {
        /**
         * Time Complexity: O(1)
         * Space Complexity: O(1)
         */
        constructor() {
                this.stack1 = [];
                this.stack2 = [];
        }

        /**
         * Time Complexity: O(1)
         * Space Complexity: O(1)
         *
         * @param {number} x
         * @return {void}
         */
        push(x) {
                this.stack1.push(x);
        }

        /**
         * Time Complexity: O(1) amortised
         * Space Complexity: O(n)
         *
         * @return {number}
         */
        pop() {
                if (!this.stack2.length) {
                        while (this.stack1.length) {
                                this.stack2.push(this.stack1.pop());
                        }
                }

                return this.stack2.pop();
        }

        /**
         * Time Complexity: O(1) amortised
         * Space Complexity: O(n)
         *
         * @return {number}
         */
        peek() {
                if (!this.stack2.length) {
                        while (this.stack1.length) {
                                this.stack2.push(this.stack1.pop());
                        }
                }

                return this.stack2.at(-1);
        }

        /**
         * Time Complexity: O(1)
         * Space Complexity: O(1)
         *
         * @return {boolean}
         */
        empty() {
                return !(this.stack1.length || this.stack2.length);
        }
}

/**
 * Approach: Simulation
 */
class MyQueue1 {
        /**
         * Time Complexity: O(1)
         * Space Complexity: O(1)
         */
        constructor() {
                this.elements = [];
                this.offset = 0;
        }

        /**
         * Time Complexity: O(1) amortised
         * Space Complexity: O(n)
         *
         * @return {void}
         */
        _reset() {
                if (this.offset === Math.floor(this.elements.length / 2)) {
                        this.elements = this.elements.slice(this.offset);
                        this.offset = 0;
                }

                if (this.offset === this.elements.length) {
                        this.elements = [];
                        this.offset = 0;
                }
        }

        /**
         * Time Complexity: O(1)
         * Space Complexity: O(1)
         *
         * @param {number} x
         * @return {void}
         */
        push(x) {
                this.elements.push(x);
        }

        /**
         * Time Complexity: O(1) amortised
         * Space Complexity: O(n)
         *
         * @return {number}
         */
        pop() {
                if (this.empty()) {
                        return;
                }

                const top = this.elements[this.offset++];
                this._reset();

                return top;
        }

        /**
         * Time Complexity: O(1) amortised
         * Space Complexity: O(n)
         *
         * @return {number}
         */
        peek() {
                return this.elements[this.offset];
        }

        /**
         * Time Complexity: O(1)
         * Space Complexity: O(1)
         *
         * @return {boolean}
         */
        empty() {
                return !this.elements.length;
        }
}

export { MyQueue, MyQueue1 };
