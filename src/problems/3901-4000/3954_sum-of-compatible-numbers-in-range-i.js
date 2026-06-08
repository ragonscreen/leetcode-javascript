/**
 * 3954. Sum of Compatible Numbers in Range I
 *
 * Link: https://leetcode.com/problems/sum-of-compatible-numbers-in-range-i/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-06-07
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Mid Level (position_mid-level)
 * - Weekly Contest 505 (contest_weekly-contest-505)
 *
 * Stats:
 * - Total Accepted: 35,167
 * - Total Submissions: 59,724
 * - Acceptance Rate: 58.9%
 */

/**
 * Approach: Simulation
 * Time Complexity: O(N + K)
 * Space Complexity: O(1)
 * `N` = `n`, `K` = `k`
 *
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const sumOfGoodIntegers = (n, k) => {
        const l = Math.max(1, n - k);
        const r = n + k;
        let res = 0;

        for (let num = l; num <= r; num++) {
                if ((n & num) === 0) {
                        res += num;
                }
        }

        return res;
};

export { sumOfGoodIntegers };
