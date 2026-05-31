/**
 * 1019. Next Greater Node In Linked List
 *
 * Link: https://leetcode.com/problems/next-greater-node-in-linked-list/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-21
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Linked List (topic_7)
 * - Stack (topic_15)
 * - Monotonic Stack (topic_61054)
 * - Staff (position_staff)
 * - Weekly Contest 130 (contest_weekly-contest-130)
 *
 * Stats:
 * - Total Accepted: 227,589
 * - Total Submissions: 353,722
 * - Acceptance Rate: 64.3%
 */

/**
 * Approach: Monotonic Stack
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * `n` = `head.length`
 *
 * @param {ListNode} head
 * @return {number[]}
 */
const nextLargerNodes = (head) => {
        const stack = [];
        const res = [];
        let i = 0;

        while (head) {
                const val = head.val;
                res.push(0);

                while (val > stack.at(-1)?.[1]) {
                        res[stack.pop()[0]] = val;
                }

                stack.push([i++, val]);
                head = head.next;
        }

        return res;
};

export { nextLargerNodes };
