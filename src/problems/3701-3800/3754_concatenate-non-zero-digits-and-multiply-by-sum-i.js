/**
 * 3754. Concatenate Non-Zero Digits and Multiply by Sum I
 *
 * Link: https://leetcode.com/problems/concatenate-non-zero-digits-and-multiply-by-sum-i/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-07-08
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Math (topic_8)
 * - Mid Level (position_mid-level)
 * - Weekly Contest 477 (contest_weekly-contest-477)
 *
 * Stats:
 *
 * - Total Accepted: 193,538
 * - Total Submissions: 292,523
 * - Acceptance Rate: 66.2%
 */

/**
 * Approach: Math
 * Time Complexity: O(log N)
 * Space Complexity: O(1)
 * `N` = `n`
 *
 * @param {number} n
 * @returns {number}
 */
const sumAndMultiply = (n) => {
        let x = 0;
        let sum = 0;
        let f = 1;

        while (n) {
                const d = n % 10;

                if (d) {
                        x += d * f;
                        sum += d;
                        f *= 10;
                }

                n = 0 | (n / 10);
        }

        return x * sum;
};

export { sumAndMultiply };
