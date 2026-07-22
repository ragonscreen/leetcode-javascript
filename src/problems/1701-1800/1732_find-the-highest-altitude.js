/**
 * 1732. Find the Highest Altitude
 *
 * Link: https://leetcode.com/problems/find-the-highest-altitude/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-06-19
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Prefix Sum (topic_61068)
 * - Mid Level (position_mid-level)
 * - Biweekly Contest 44 (contest_biweekly-contest-44)
 *
 * Stats:
 * - Total Accepted: 902,386
 * - Total Submissions: 1,066,130
 * - Acceptance Rate: 84.6%
 */

/**
 * Approach: Prefix Sum
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `gain.length`
 *
 * @param {number[]} gain
 * @return {number}
 */
const largestAltitude = (gain) => {
        let res = 0;

        for (let p = 0, i = 0; i < gain.length; i++) {
                p += gain[i];
                res = Math.max(res, p);
        }

        return res;
};

export { largestAltitude };
