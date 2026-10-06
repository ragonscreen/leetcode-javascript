/**
 * 115. Distinct Subsequences
 *
 * Link: https://leetcode.com/problems/distinct-subsequences/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-09-06
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - String (topic_10)
 * - Dynamic Programming (topic_13)
 *
 * Stats:
 *
 * - Total Accepted: 818,660
 * - Total Submissions: 1,528,124
 * - Acceptance Rate: 53.6%
 *
 * Similar Problems:
 *
 * - number-of-unique-good-subsequences (Hard)
 */

/**
 * Approach: Dynamic Programming
 * Time Complexity: O(n * m)
 * Space Complexity: O(n * m)
 * `n` = `s.length`, `m` = `t.length`
 *
 * @param {string} s
 * @param {string} t
 * @returns {number}
 */
const numDistinct = (s, t) => {
        const n = s.length;
        const m = t.length;
        const dp = Array.from({ length: m + 1 }, () => new Uint32Array(n + 1));

        for (let i = 0; i < n + 1; i++) dp[0][i] = 1;

        for (let i = 0; i < m; i++) {
                for (let j = 0; j < n; j++)
                        dp[i + 1][j + 1] = dp[i + 1][j] + (t[i] === s[j] ? dp[i][j] : 0);
        }

        return dp[m][n];
};

export { numDistinct };
