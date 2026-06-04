/**
 * 0967. Numbers With Same Consecutive Differences
 *
 * Link: https://leetcode.com/problems/numbers-with-same-consecutive-differences/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-06-04
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Backtracking (topic_14)
 * - Breadth-First Search (topic_22)
 * - Staff (position_staff)
 * - Weekly Contest 117 (contest_weekly-contest-117)
 *
 * Stats:
 * - Total Accepted: 157,639
 * - Total Submissions: 266,151
 * - Acceptance Rate: 59.2%
 */

/**
 * Approach: BFS
 * Time Complexity: O(2^N)
 * Space Complexity: O(2^N)
 * `N` = `n`
 *
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
const numsSameConsecDiff = (n, k) => {
        let q = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        for (let i = 1; i < n; i++) {
                const q2 = [];

                for (let qi = 0; qi < q.length; qi++) {
                        const num = q[qi];
                        const digit = num % 10;
                        const num10 = num * 10;
                        const nxt = digit + k;
                        const pre = digit - k;

                        if (nxt < 10) {
                                q2.push(num10 + nxt);
                        }

                        if (pre > -1 && pre !== nxt) {
                                q2.push(num10 + pre);
                        }
                }

                q = q2;
        }

        return q;
};

export { numsSameConsecDiff };
