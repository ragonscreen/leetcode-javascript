/**
 * 0143. Reorder List
 *
 * Link: https://leetcode.com/problems/reorder-list/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-17
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Linked List (topic_7)
 * - Two Pointers (topic_9)
 * - Stack (topic_15)
 * - Recursion (topic_31)
 *
 * Stats:
 * - Total Accepted: 1,501,060
 * - Total Submissions: 2,307,548
 * - Acceptance Rate: 65.1%
 *
 * Similar Problems:
 * - delete-the-middle-node-of-a-linked-list (Medium)
 * - take-k-of-each-character-from-left-and-right (Medium)
 */

import { ListNode } from '../../data-structures/linked-list/LinkedListNode.js';

/**
 * Approach: Iteration
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {ListNode} head
 * @return {void}
 */
const reorderList = (head) => {
        // get left half -> larger than right half for odd lengths
        let slow = head;
        let fast = head;

        while (fast.next?.next) {
                slow = slow.next;
                fast = fast.next?.next;
        }

        // get right half and reverse it
        const right = slow.next;
        slow.next = null;
        let curr = right;
        let prev = null;

        while (curr) {
                const next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
        }

        // interleave
        let l1 = head;
        let l2 = prev;

        while (l2) {
                const next1 = l1.next;
                const next2 = l2.next;
                l1.next = l2;
                l2.next = next1;
                l1 = next1;
                l2 = next2;
        }
};

export { reorderList };
