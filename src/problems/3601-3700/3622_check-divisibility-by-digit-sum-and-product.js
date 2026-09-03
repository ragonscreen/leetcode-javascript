/**
 * 3622. Check Divisibility by Digit Sum and Product
 *
 * Link: https://leetcode.com/problems/check-divisibility-by-digit-sum-and-product/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-08-31
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Math (topic_8)
 * - Mid Level (position_mid-level)
 * - Weekly Contest 459 (contest_weekly-contest-459)
 *
 * Stats:
 *
 * - Total Accepted: 222,559
 * - Total Submissions: 298,411
 * - Acceptance Rate: 74.6%
 */

/**
 * Approach: Math
 * Time Complexity: O(log N)
 * Space Complexity: O(1)
 * `N` = `n`
 *
 * @param {number} n
 * @returns {boolean}
 */
const checkDivisibility = (n) => {
        let x = n;
        let sum = 0;
        let mul = 1;

        while (x) {
                const d = x % 10;
                sum += d;
                mul *= d;
                x = 0 | (x / 10);
        }

        return n % (sum + mul) === 0;
};

export { checkDivisibility };
