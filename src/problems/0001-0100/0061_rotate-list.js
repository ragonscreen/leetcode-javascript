/**
 * 0061. Rotate List
 *
 * Link: https://leetcode.com/problems/rotate-list/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-05
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Linked List (topic_7)
 * - Two Pointers (topic_9)
 *
 * Stats:
 * - Total Accepted: 1,648,395
 * - Total Submissions: 3,924,718
 * - Acceptance Rate: 42.0%
 *
 * Similar Problems:
 * - rotate-array (Medium)
 * - split-linked-list-in-parts (Medium)
 */

/**
 * Approach: Iteration
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = (head, k) => {
        let n = 0;
        let curr = head;

        while (curr) {
                curr = curr.next;
                n++;
        }

        k %= n;

        if (!k) {
                return head;
        }

        let start;
        curr = head;

        for (let i = 0; i < n - 1; i++) {
                if (i === n - k - 1) {
                        const tmp = curr.next;
                        curr.next = null;
                        curr = tmp;
                        start = tmp;
                } else {
                        curr = curr.next;
                }
        }

        curr.next = head;

        return start;
};

export { rotateRight };
