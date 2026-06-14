/**
 * 3959. Check Good Integer
 *
 * Link: https://leetcode.com/problems/check-good-integer/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-06-14
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Weekly Contest 506 (contest_weekly-contest-506)
 *
 * Stats:
 * - Total Accepted: 28,388
 * - Total Submissions: 34,300
 * - Acceptance Rate: 82.8%
 */

/**
 * Approach:
 * Time Complexity: O()
 * Space Complexity: O()
 *
 * @param {number} n
 * @return {boolean}
 */
const checkGoodInteger = (n) => {
        let sum = 0;

        while (n) {
                const d = n % 10;
                sum += d * (d - 1);
                n = 0 | (n / 10);
        }

        return sum >= 50;
};

export { checkGoodInteger };
