/**
 * 0172. Factorial Trailing Zeroes
 *
 * Link: https://leetcode.com/problems/factorial-trailing-zeroes/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-14
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Math (topic_8)
 *
 * Stats:
 * - Total Accepted: 662,331
 * - Total Submissions: 1,423,781
 * - Acceptance Rate: 46.5%
 *
 * Similar Problems:
 * - maximum-trailing-zeros-in-a-cornered-path (Medium)
 * - abbreviating-the-product-of-a-range (Hard)
 * - number-of-digit-one (Hard)
 * - preimage-size-of-factorial-zeroes-function (Hard)
 */

/**
 * Approach: Math
 * Time Complexity: O(log_5 n)
 * Space Complexity: O(1)
 *
 * @param {number} n
 * @return {number}
 */
const trailingZeroes = (n) => {
        let res = 0;
        let pow = 1;

        while (5 ** pow <= n) {
                res += Math.floor(n / 5 ** pow++);
        }

        return res;
};

export { trailingZeroes };
