/**
 * 3536. Maximum Product of Two Digits
 *
 * Link: https://leetcode.com/problems/maximum-product-of-two-digits/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-08-25
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Math (topic_8)
 * - Sorting (topic_61049)
 * - Mid Level (position_mid-level)
 * - Weekly Contest 448 (contest_weekly-contest-448)
 *
 * Stats:
 * - Total Accepted: 208,544
 * - Total Submissions: 275,526
 * - Acceptance Rate: 75.7%
 */

/**
 * Approach: Math
 * Time Complexity: O(log N)
 * Space Complexity: O(1)
 * `N` = `n`
 *
 * @param {number} n
 * @return {number}
 */
const maxProduct = (n) => {
        let mx1 = -1;
        let mx2 = -1;

        while (n) {
                const d = n % 10;

                if (d > mx1) {
                        mx2 = mx1;
                        mx1 = d;
                } else if (d > mx2) {
                        mx2 = d;
                }

                n = 0 | (n / 10);
        }

        return mx1 * mx2;
};

export { maxProduct };
