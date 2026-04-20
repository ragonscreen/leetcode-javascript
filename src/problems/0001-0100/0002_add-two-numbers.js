/**
 * 0002. Add Two Numbers
 *
 * Link: https://leetcode.com/problems/add-two-numbers/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-20
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Linked List (topic_7)
 * - Math (topic_8)
 * - Recursion (topic_31)
 *
 * Stats:
 * - Total Accepted: 6,957,485
 * - Total Submissions: 14,401,648
 * - Acceptance Rate: 48.3%
 *
 * Similar Problems:
 * - add-binary (Easy)
 * - add-strings (Easy)
 * - add-to-array-form-of-integer (Easy)
 * - add-two-numbers-ii (Medium)
 * - add-two-polynomials-represented-as-linked-lists (Medium)
 * - double-a-number-represented-as-a-linked-list (Medium)
 * - multiply-strings (Medium)
 * - sum-of-two-integers (Medium)
 */

import { ListNode } from '../../data-structures/linked-list/LinkedListNode.js';

/**
 * Approach: Iteration
 * Time Complexity: O(max(n, m))
 * Space Complexity: O(1)
 * `n` = number of nodesin `l1`, `m` = number of nodes in `l2`
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
        const dummy = new ListNode();
        let curr = dummy;
        let p = l1;
        let q = l2;
        let carry = 0;

        while (p || q || carry) {
                const sum = (p?.val ?? 0) + (q?.val ?? 0) + carry;
                const val = sum % 10;
                carry = Math.floor(sum / 10);
                curr.next = new ListNode(val);
                curr = curr.next;
                p = p?.next;
                q = q?.next;
        }

        return dummy.next;
};

export { addTwoNumbers };
