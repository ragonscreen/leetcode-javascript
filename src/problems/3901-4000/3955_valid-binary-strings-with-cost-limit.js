/**
 * 3955. Valid Binary Strings With Cost Limit
 *
 * Link: https://leetcode.com/problems/valid-binary-strings-with-cost-limit/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-06-08
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Senior (position_senior)
 * - Weekly Contest 505 (contest_weekly-contest-505)
 *
 * Stats:
 * - Total Accepted: 27,403
 * - Total Submissions: 34,930
 * - Acceptance Rate: 78.5%
 */

/**
 * Approach: Backtracking
 * Time Complexity: O(N * 2^N)
 * Space Complexity: O(N * 2^N)
 * `N` = `n`
 *
 * @param {number} n
 * @param {number} k
 * @return {string[]}
 */
const generateValidStrings = (n, k) => {
        const res = [];

        const bt = (idx, pre, cost, cur) => {
                if (cost > k) {
                        return;
                }

                if (idx === n) {
                        res.push(cur.join(''));
                        return;
                }

                cur.push(0);
                bt(idx + 1, 0, cost, cur);
                cur.pop();

                if (pre !== 1) {
                        cur.push(1);
                        bt(idx + 1, 1, cost + idx, cur);
                        cur.pop();
                }
        };

        bt(0, 0, 0, []);

        return res;
};

export { generateValidStrings };
