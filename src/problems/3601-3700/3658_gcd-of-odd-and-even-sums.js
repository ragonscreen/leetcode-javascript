/**
 * 3658. GCD of Odd and Even Sums
 *
 * Link: https://leetcode.com/problems/gcd-of-odd-and-even-sums/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-08-05
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Math (topic_8)
 * - Number Theory (topic_61067)
 * - Mid Level (position_mid-level)
 * - Weekly Contest 464 (contest_weekly-contest-464)
 *
 * Stats:
 *
 * - Total Accepted: 289,909
 * - Total Submissions: 322,649
 * - Acceptance Rate: 89.9%
 */

/**
 * Approach: Math [II]
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 *
 * @param {number} n
 * @returns {number}
 */
const gcdOfOddEvenSums = (n) => n;

/**
 * Approach: Math [I]
 * Time Complexity: O(log N)
 * Space Complexity: O(1)
 * `N` = `n`
 *
 * @param {number} n
 * @returns {number}
 */
const gcdOfOddEvenSums1 = (n) => {
        const gcd = (a, b) => (a ? gcd(b % a, a) : b);
        const o = n * n;
        const e = n * (n + 1);

        return gcd(o, e);
};

export { gcdOfOddEvenSums, gcdOfOddEvenSums1 };
