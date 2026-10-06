/**
 * 3871. Count Commas in Range II
 *
 * Link: https://leetcode.com/problems/count-commas-in-range-ii/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-09
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Math (topic_8)
 * - Senior (position_senior)
 * - Weekly Contest 493 (contest_weekly-contest-493)
 *
 * Stats:
 *
 * - Total Accepted: 110,846
 * - Total Submissions: 239,695
 * - Acceptance Rate: 46.2%
 */

/**
 * Approach: Math
 * Time Complexity: O(lg N)
 * Space Complexity: O(1)
 * `N` = `n`
 *
 * @param {number} n
 * @returns {number}
 */
const countCommas = (n) => {
        let res = 0;
        let rem = 999;

        while (n > rem) {
                n -= rem;
                res += n;
                rem *= 1000;
        }

        return res;
};

export { countCommas };
