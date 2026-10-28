/**
 * 206. Reverse Linked List
 *
 * Link: https://leetcode.com/problems/reverse-linked-list/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-04-14 (Updated: 2026-10-28)
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Linked List (topic_7)
 * - Recursion (topic_31)
 *
 * Stats:
 *
 * - Total Accepted: 6,231,020
 * - Total Submissions: 7,746,254
 * - Acceptance Rate: 80.4%
 *
 * Similar Problems:
 *
 * - palindrome-linked-list (Easy)
 * - binary-tree-upside-down (Medium)
 * - insert-greatest-common-divisors-in-linked-list (Medium)
 * - maximum-twin-sum-of-a-linked-list (Medium)
 * - remove-nodes-from-linked-list (Medium)
 * - reverse-linked-list-ii (Medium)
 * - reverse-nodes-in-even-length-groups (Medium)
 */

/**
 * Approach: Iteration
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {ListNode} head
 * @returns {ListNode}
 */
const reverseList = (head) => {
        let prev = null;
        let curr = head;

        while (curr) {
                const next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
        }

        return prev;
};

/**
 * Approach: Recursion
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary, O(n) total
 *
 * @param {ListNode} head
 * @returns {ListNode}
 */
const reverseList1 = (head) => {
        if (!head) return null;

        let res = null;

        const rec = (curr) => {
                if (!curr.next) {
                        res = curr;

                        return curr;
                }

                const node = rec(curr.next);
                curr.next = null;
                node.next = curr;

                return curr;
        };

        rec(head);

        return res;
};

export { reverseList, reverseList1 };
