/**
 * 0092. Reverse Linked List II
 *
 * Link: https://leetcode.com/problems/reverse-linked-list-ii/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-14
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Linked List (topic_7)
 *
 * Stats:
 * - Total Accepted: 1,302,665
 * - Total Submissions: 2,537,904
 * - Acceptance Rate: 51.3%
 *
 * Similar Problems:
 * - reverse-linked-list (Easy)
 */

/**
 * Approach: Iteration
 * Time Complexity: O(r)
 * Space Complexity: O(1)
 * `r` = `right`
 *
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
const reverseBetween = (head, left, right) => {
        if (left === right) {
                return head;
        }

        let revPrev = null;
        let revStart = null;
        let prev = null;
        let curr = head;
        let idx = 0;

        while (curr) {
                idx++;

                if (idx < left) {
                        if (idx === left - 1) {
                                revPrev = curr;
                        }

                        curr = curr.next;
                        continue;
                }

                if (idx > right) {
                        if (revPrev) {
                                revPrev.next = prev;
                        }

                        revStart.next = curr;
                        break;
                }

                if (!revStart) {
                        revStart = curr;
                }

                const next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
        }

        if (revPrev && idx === right) {
                revPrev.next = prev;
        }

        return left === 1 ? prev : head;
};

export { reverseBetween };
