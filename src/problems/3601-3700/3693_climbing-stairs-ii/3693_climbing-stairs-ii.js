/**
 * 3693. Climbing Stairs II
 *
 * Link: https://leetcode.com/problems/climbing-stairs-ii/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-11-10
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Dynamic Programming (topic_13)
 * - Senior (position_senior)
 * - Biweekly Contest 166 (contest_biweekly-contest-166)
 *
 * Stats:
 *
 * - Total Accepted: 83,503
 * - Total Submissions: 115,632
 * - Acceptance Rate: 72.2%
 */

/**
 * Approach: Dynamic Programming [II]
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `costs.length`
 *
 * @param {number} n
 * @param {number[]} costs
 * @returns {number}
 */
const climbStairs = (n, costs) => {
        let dp1 = 0;
        let dp2 = 0;
        let dp3 = 0;

        for (let i = 1; i <= n; i++) {
                const v = costs[i - 1] + Math.min(dp1 + 1, dp2 + 4, dp3 + 9);
                dp3 = dp2;
                dp2 = dp1;
                dp1 = v;
        }

        return dp1;
};

/**
 * Approach: Dynamic Programming [I]
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * `n` = `costs.length`
 *
 * @param {number} n
 * @param {number[]} costs
 * @returns {number}
 */
const climbStairs1 = (n, costs) => {
        const d = new Uint32Array(n + 1).fill(-1); // INF
        d[0] = 0;

        for (let i = 0; i < n; i++) {
                const v = d[i];

                for (let j = i + 1; j <= Math.min(n, i + 3); j++) {
                        const w = costs[j - 1] + (j - i) ** 2;
                        d[j] = Math.min(d[j], v + w);
                }
        }

        return d[n];
};

export { climbStairs, climbStairs1 };
