/**
 * 0019. Remove Nth Node From End of List
 *
 * Link: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-20
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Linked List (topic_7)
 * - Two Pointers (topic_9)
 *
 * Stats:
 * - Total Accepted: 4,169,854
 * - Total Submissions: 8,114,344
 * - Acceptance Rate: 51.4%
 *
 * Similar Problems:
 * - delete-n-nodes-after-m-nodes-of-a-linked-list (Easy)
 * - delete-the-middle-node-of-a-linked-list (Medium)
 * - swapping-nodes-in-a-linked-list (Medium)
 */

/**
 * Approach: Two Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
        let r = head;

        for (let i = 0; i < n; i++) {
                r = r.next;
        }

        let prev = null;
        let l = head;

        while (r) {
                prev = l;
                l = l.next;
                r = r.next;
        }

        if (!prev) {
                return l.next;
        }

        prev.next = l.next;

        return head;
};

/**
 * Approach: Iteration
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd1 = (head, n) => {
        let len = 0;
        let curr = head;

        while (curr) {
                curr = curr.next;
                len++;
        }

        // removing first node
        if (len - n === 0) {
                return head.next;
        }

        let i = 0;
        let prev = null;
        curr = head;

        while (curr) {
                if (i === len - n) {
                        prev.next = curr.next;
                        break;
                }

                prev = curr;
                curr = curr.next;
                i++;
        }

        return head;
};

export { removeNthFromEnd, removeNthFromEnd1 };
