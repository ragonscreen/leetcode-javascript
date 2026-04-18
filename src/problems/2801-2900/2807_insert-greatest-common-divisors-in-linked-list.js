/**
 * 2807. Insert Greatest Common Divisors in Linked List
 *
 * Link: https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-18
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Linked List (topic_7)
 * - Math (topic_8)
 * - Number Theory (topic_61067)
 *
 * Stats:
 * - Total Accepted: 296,194
 * - Total Submissions: 324,150
 * - Acceptance Rate: 91.4%
 *
 * Similar Problems:
 * - reverse-linked-list (Easy)
 */

import { ListNode } from '../../data-structures/linked-list/LinkedListNode.js';

/**
 * Approach: Math
 * Time Complexity: O(n log k)
 * Space Complexity: O(log k) auxiliary, O(n + log k) total
 * `n` = number of nodes in `head`, `k` = maximum value of a node in `head`
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
const insertGreatestCommonDivisors = (head) => {
        const g = (a, b) => (b ? g(b, a % b) : a);
        let curr = head;

        while (curr.next) {
                const next = curr.next;
                const gcd = g(curr.val, next.val);
                curr.next = new ListNode(gcd, next);
                curr = curr.next.next;
        }

        return head;
};

export { insertGreatestCommonDivisors };
