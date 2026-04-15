/**
 * 0021. Merge Two Sorted Lists
 *
 * Link: https://leetcode.com/problems/merge-two-sorted-lists/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-04-15
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Linked List (topic_7)
 * - Recursion (topic_31)
 *
 * Stats:
 * - Total Accepted: 6,198,067
 * - Total Submissions: 9,094,084
 * - Acceptance Rate: 68.2%
 *
 * Similar Problems:
 * - merge-sorted-array (Easy)
 * - merge-two-2d-arrays-by-summing-values (Easy)
 * - add-two-polynomials-represented-as-linked-lists (Medium)
 * - longest-common-subsequence-between-sorted-arrays (Medium)
 * - shortest-word-distance-ii (Medium)
 * - sort-list (Medium)
 * - merge-k-sorted-lists (Hard)
 */

import { ListNode } from '../../data-structures/linked-list/LinkedListNode.js';

/**
 * Approach: Iteration [Optimal]
 * Time Complexity: O(min(n, m))
 * Space Complexity: O(1)
 * `n` = number of nodes in `list1`, `m` = number of nodes in `list2`
 *
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) => {
        const head = new ListNode();
        let curr = head;
        let p = list1;
        let q = list2;

        while (p && q) {
                let next;

                if (p.val < q.val) {
                        next = p;
                        p = p.next;
                } else {
                        next = q;
                        q = q.next;
                }

                curr.next = next;
                curr = curr.next;
        }

        curr.next = p ? p : q;

        return head.next;
};

/**
 * Approach: Iteration
 * Time Complexity: O(n + m)
 * Space Complexity: O(1)
 * `n` = number of nodes in `list1`, `m` = number of nodes in `list2`
 *
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists1 = (list1, list2) => {
        const head = new ListNode();
        let curr = head;
        let p = list1;
        let q = list2;

        while (p || q) {
                let next;

                if (!q || p?.val < q?.val) {
                        next = p;
                        p = p.next;
                } else {
                        next = q;
                        q = q.next;
                }

                curr.next = next;
                curr = curr.next;
        }

        return head.next;
};

export { mergeTwoLists, mergeTwoLists1 };
