/**
 * 707. Design Linked List
 *
 * Link: https://leetcode.com/problems/design-linked-list/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-10-26
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Linked List (topic_7)
 * - Design (topic_25)
 *
 * Stats:
 *
 * - Total Accepted: 533,086
 * - Total Submissions: 1,716,424
 * - Acceptance Rate: 31.1%
 *
 * Similar Problems:
 *
 * - design-skiplist (Hard)
 */

class ListNode {
        constructor(val = 0, next = null) {
                this.val = val;
                this.next = next;
        }
}

/**
 * Approach: Singly Linked List
 */
class MyLinkedList {
        head = null;
        tail = null;
        size = 0;

        /**
         * Time Complexity: O(n)
         * Space Complexity: O(1)
         * `n` = `list.size`
         *
         * @param {number} index
         * @returns {number}
         */
        get(index) {
                if (index < 0 || index >= this.size) return -1;

                let cur = this.head;

                for (let i = 0; i < index; i++) cur = cur.next;

                return cur.val;
        }

        /**
         * Time Complexity: O(1)
         * Space Complexity: O(1)
         *
         * @param {number} val
         * @returns {void}
         */
        addAtHead(val) {
                const node = new ListNode(val, this.head);
                this.head = node;

                if (this.size === 0) this.tail = node;

                this.size++;
        }

        /**
         * Time Complexity: O(1)
         * Space Complexity: O(1)
         *
         * @param {number} val
         * @returns {void}
         */
        addAtTail(val) {
                const node = new ListNode(val);

                if (this.size === 0) this.head = node;
                else this.tail.next = node;

                this.tail = node;
                this.size++;
        }

        /**
         * Time Complexity: O(n)
         * Space Complexity: O(1)
         * `n` = `list.size`
         *
         * @param {number} index
         * @param {number} val
         * @returns {void}
         */
        addAtIndex(index, val) {
                if (index < 0 || index > this.size) return;

                if (index === 0) {
                        this.addAtHead(val);
                } else if (index === this.size) {
                        this.addAtTail(val);
                } else {
                        let prev = this.head;

                        for (let i = 0; i < index - 1; i++) prev = prev.next;

                        const node = new ListNode(val, prev.next);
                        prev.next = node;
                        this.size++;
                }
        }

        /**
         * Time Complexity: O(n)
         * Space Complexity: O(1)
         * `n` = `list.size`
         *
         * @param {number} index
         * @returns {void}
         */
        deleteAtIndex(index) {
                if (index < 0 || index >= this.size) return;

                if (index === 0) {
                        this.head = this.head.next;

                        if (this.size === 1) this.tail = null;
                } else {
                        let prev = this.head;

                        for (let i = 0; i < index - 1; i++) prev = prev.next;

                        prev.next = prev.next.next;

                        if (index === this.size - 1) this.tail = prev;
                }

                this.size--;
        }
}

class ListNode1 {
        constructor(val = 0, prev = null, next = null) {
                this.val = val;
                this.prev = prev;
                this.next = next;
        }
}

/**
 * Approach: Doubly Linked List
 */
class MyLinkedList1 {
        head = null;
        tail = null;
        size = 0;

        /**
         * Time Complexity: O(n)
         * Space Complexity: O(1)
         * `n` = `list.size`
         *
         * @param {number} index
         * @returns {number}
         */
        get(index) {
                if (index < 0 || index >= this.size) return -1;

                let cur = this.head;

                for (let i = 0; i < index; i++) cur = cur.next;

                return cur.val;
        }

        /**
         * Time Complexity: O(1)
         * Space Complexity: O(1)
         *
         * @param {number} val
         * @returns {void}
         */
        addAtHead(val) {
                this.addAtIndex(0, val);
        }

        /**
         * Time Complexity: O(1)
         * Space Complexity: O(1)
         *
         * @param {number} val
         * @returns {void}
         */
        addAtTail(val) {
                this.addAtIndex(this.size, val);
        }

        /**
         * Time Complexity: O(n)
         * Space Complexity: O(1)
         * `n` = `list.size`
         *
         * @param {number} index
         * @param {number} val
         * @returns {void}
         */
        addAtIndex(index, val) {
                if (index < 0 || index > this.size) return;

                const node = new ListNode1(val);

                if (this.size === 0) {
                        node.next = null;
                        node.prev = null;
                        this.head = node;
                        this.tail = node;
                } else if (index === 0) {
                        node.next = this.head;
                        this.head.prev = node;
                        this.head = node;
                } else if (index === this.size) {
                        node.prev = this.tail;
                        this.tail.next = node;
                        this.tail = node;
                } else {
                        let cur = this.head;

                        for (let i = 0; i < index; i++) cur = cur.next;

                        const prev = cur.prev;
                        node.prev = prev;
                        node.next = cur;
                        prev.next = node;
                        cur.prev = node;
                }

                this.size++;
        }

        /**
         * Time Complexity: O(n)
         * Space Complexity: O(1)
         * `n` = `list.size`
         *
         * @param {number} index
         * @returns {void}
         */
        deleteAtIndex(index) {
                if (index < 0 || index >= this.size) return;

                if (this.size === 1) {
                        this.head = null;
                        this.tail = null;
                } else if (index === 0) {
                        this.head = this.head.next;
                        this.head.prev = null;
                } else if (index === this.size - 1) {
                        this.tail = this.tail.prev;
                        this.tail.next = null;
                } else {
                        let cur = this.head;

                        for (let i = 0; i < index; i++) cur = cur.next;

                        const prev = cur.prev;
                        const next = cur.next;
                        next.prev = prev;
                        prev.next = next;
                }

                this.size--;
        }
}

export { MyLinkedList, MyLinkedList1 };
