/**
 * 0646. Maximum Length of Pair Chain
 *
 * Link: https://leetcode.com/problems/maximum-length-of-pair-chain/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-06-08
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Dynamic Programming (topic_13)
 * - Greedy (topic_17)
 * - Sorting (topic_61049)
 * - Senior Staff (position_senior-staff)
 *
 * Stats:
 * - Total Accepted: 318,785
 * - Total Submissions: 515,515
 * - Acceptance Rate: 61.8%
 *
 * Similar Problems:
 * - longest-increasing-subsequence (Medium)
 * - longest-non-decreasing-subarray-from-two-arrays (Medium)
 * - non-decreasing-subsequences (Medium)
 */

/**
 * Approach: Sorting + Greedy
 * Time Complexity: O(n lg n)
 * Space Complexity: O(1) auxiliary, O(n) for sorting
 * `n` = `pairs.length`
 *
 * @param {number[][]} pairs
 * @return {number}
 */
const findLongestChain = (pairs) => {
        pairs.sort((a, b) => a[1] - b[1]);
        let pre = Number.MIN_SAFE_INTEGER;
        let res = 0;

        for (let i = 0; i < pairs.length; i++) {
                const [s, e] = pairs[i];

                if (s > pre) {
                        res++;
                        pre = e;
                }
        }

        return res;
};

/**
 * Approach: Sorting + Dynamic Programming
 * Time Complexity: O(n^2)
 * Space Complexity: O(1) auxiliary, O(n) for sorting
 * `n` = `pairs.length`
 *
 * @param {number[][]} pairs
 * @return {number}
 */
const findLongestChain1 = (pairs) => {
        pairs.sort((a, b) => a[0] - b[0]);
        const n = pairs.length;
        const dp = new Uint16Array(n);

        for (let i = 0; i < n; i++) {
                const a = pairs[i][0];

                for (let j = 0; j < i; j++) {
                        const d = pairs[j][1];

                        if (d < a) {
                                dp[i] = Math.max(dp[i], dp[j] + 1);
                        }
                }
        }

        return dp.at(-1) + 1;
};

export { findLongestChain, findLongestChain1 };
