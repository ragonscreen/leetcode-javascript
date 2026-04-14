/**
 * 0206. Reverse Linked List
 *
 * Link: https://leetcode.com/problems/reverse-linked-list/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-04-14
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Linked List (topic_7)
 * - Recursion (topic_31)
 *
 * Stats:
 * - Total Accepted: 6,231,020
 * - Total Submissions: 7,746,254
 * - Acceptance Rate: 80.4%
 *
 * Similar Problems:
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
 * @return {ListNode}
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

export { reverseList };
