/**
 * 225. Implement Stack using Queues
 *
 * Link: https://leetcode.com/problems/implement-stack-using-queues/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-10-28
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Stack (topic_15)
 * - Design (topic_25)
 * - Queue (topic_34)
 *
 * Stats:
 *
 * - Total Accepted: 1,302,889
 * - Total Submissions: 1,848,050
 * - Acceptance Rate: 70.5%
 *
 * Similar Problems:
 *
 * - implement-queue-using-stacks (Easy)
 */

/**
 * Approach: Queue
 */
class MyStack {
        /**
         * Time Complexity: O(1)
         * Space Complexity: O(1)
         */
        constructor() {
                this.q = [];
        }

        /**
         * Time Complexity: O(1)
         * Space Complexity: O(1)
         *
         * @param {number} x
         * @returns {void}
         */
        push(x) {
                this.q.push(x);
        }

        /**
         * Time Complexity: O(n)
         * Space Complexity: O(1)
         *
         * @returns {number}
         */
        pop() {
                for (let i = 0; i < this.q.length - 1; i++) this.q.push(this.q.shift());

                return this.q.shift();
        }

        /**
         * Time Complexity: O(n)
         * Space Complexity: O(1)
         *
         * @returns {number}
         */
        top() {
                for (let i = 0; i < this.q.length - 1; i++) this.q.push(this.q.shift());

                const val = this.q[0];
                this.q.push(this.q.shift());

                return val;
        }

        /**
         * Time Complexity: O(1)
         * Space Complexity: O(1)
         *
         * @returns {boolean}
         */
        empty() {
                return this.q.length === 0;
        }
}

export { MyStack };
