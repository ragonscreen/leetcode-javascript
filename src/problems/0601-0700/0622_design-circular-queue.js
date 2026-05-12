/**
 * 0622. Design Circular Queue
 *
 * Link: https://leetcode.com/problems/design-circular-queue/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-12
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Linked List (topic_7)
 * - Design (topic_25)
 * - Queue (topic_34)
 *
 * Stats:
 * - Total Accepted: 480,480
 * - Total Submissions: 879,517
 * - Acceptance Rate: 54.6%
 *
 * Similar Problems:
 * - design-circular-deque (Medium)
 * - design-front-middle-back-queue (Medium)
 */

import { ListNode } from '../../data-structures/linked-list/LinkedListNode.js';

/**
 * Approach: Array
 */
class MyCircularQueue {
        /**
         * Time Complexity: O(1)
         * Space Complexity: O(n)
         *
         * @param {number} k
         */
        constructor(k) {
                this.queue = new Uint16Array(k);
                this.cap = k;
                this.size = 0;
                this.left = 0;
                this.right = -1;
        }

        /**
         * Time Complexity: O(1)
         * Space Complexity: O(1)
         *
         * @param {number} value
         * @return {boolean}
         */
        enQueue(value) {
                if (this.isFull()) {
                        return false;
                }

                this.right = (this.right + 1) % this.cap;
                this.queue[this.right] = value;
                this.size++;

                return true;
        }

        /**
         * Time Complexity: O(1)
         * Space Complexity: O(1)
         *
         * @return {boolean}
         */
        deQueue() {
                if (this.isEmpty()) {
                        return false;
                }

                this.left = (this.left + 1) % this.cap;
                this.size--;

                return true;
        }

        /**
         * Time Complexity: O(1)
         * Space Complexity: O(1)
         *
         * @return {number}
         */
        Front() {
                return this.isEmpty() ? -1 : this.queue[this.left];
        }

        /**
         * Time Complexity: O(1)
         * Space Complexity: O(1)
         *
         * @return {number}
         */
        Rear() {
                return this.isEmpty() ? -1 : this.queue[this.right];
        }

        /**
         * Time Complexity: O(1)
         * Space Complexity: O(1)
         *
         * @return {boolean}
         */
        isEmpty() {
                return this.size === 0;
        }

        /**
         * Time Complexity: O(1)
         * Space Complexity: O(1)
         *
         * @return {boolean}
         */
        isFull() {
                return this.size === this.cap;
        }
}

/**
 * Approach: Linked List
 */
class MyCircularQueue1 {
        /**
         * Time Complexity: O(1)
         * Space Complexity: O(n)
         *
         * @param {number} k
         */
        constructor(k) {
                this.space = k;
                this.left = new ListNode();
                this.right = this.left;
        }

        /**
         * Time Complexity: O(1)
         * Space Complexity: O(1)
         *
         * @param {number} value
         * @return {boolean}
         */
        enQueue(value) {
                if (this.isFull()) {
                        return false;
                }

                const node = new ListNode(value);
                this.right.next = node;
                this.right = node;
                this.space--;

                return true;
        }

        /**
         * Time Complexity: O(1)
         * Space Complexity: O(1)
         *
         * @return {boolean}
         */
        deQueue() {
                if (this.isEmpty()) {
                        return false;
                }

                this.left.next = this.left.next.next;

                if (!this.left.next) {
                        this.right = this.left;
                }

                this.space++;

                return true;
        }

        /**
         * Time Complexity: O(1)
         * Space Complexity: O(1)
         *
         * @return {number}
         */
        Front() {
                return this.isEmpty() ? -1 : this.left.next.val;
        }

        /**
         * Time Complexity: O(1)
         * Space Complexity: O(1)
         *
         * @return {number}
         */
        Rear() {
                return this.isEmpty() ? -1 : this.right.val;
        }

        /**
         * Time Complexity: O(1)
         * Space Complexity: O(1)
         *
         * @return {boolean}
         */
        isEmpty() {
                return this.left.next === null;
        }

        /**
         * Time Complexity: O(1)
         * Space Complexity: O(1)
         *
         * @return {boolean}
         */
        isFull() {
                return this.space === 0;
        }
}

export { MyCircularQueue, MyCircularQueue1 };
