/**
 * 2487. Remove Nodes From Linked List
 *
 * Link: https://leetcode.com/problems/remove-nodes-from-linked-list/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-05
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Linked List (topic_7)
 * - Stack (topic_15)
 * - Recursion (topic_31)
 * - Monotonic Stack (topic_61054)
 *
 * Stats:
 * - Total Accepted: 272,013
 * - Total Submissions: 363,085
 * - Acceptance Rate: 74.9%
 *
 * Similar Problems:
 * - next-greater-element-i (Easy)
 * - reverse-linked-list (Easy)
 * - delete-node-in-a-linked-list (Medium)
 * - delete-nodes-from-linked-list-present-in-array (Medium)
 */

/**
 * Approach: Iteration
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
const removeNodes = (head) => {
        // reverse
        let prev = null;
        let curr = head;

        while (curr) {
                const tmp = curr.next;
                curr.next = prev;
                prev = curr;
                curr = tmp;
        }

        // remove invalid
        curr = prev;

        while (curr) {
                while (curr?.next?.val < curr?.val) {
                        curr.next = curr.next.next;
                }

                curr = curr.next;
        }

        // reverse again
        curr = prev;
        prev = null;

        while (curr) {
                const tmp = curr.next;
                curr.next = prev;
                prev = curr;
                curr = tmp;
        }

        return prev;
};

export { removeNodes };
