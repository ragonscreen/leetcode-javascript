/**
 * 3961. Maximize Sum of Device Ratings
 *
 * Link: https://leetcode.com/problems/maximize-sum-of-device-ratings/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-06-14
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Weekly Contest 506 (contest_weekly-contest-506)
 *
 * Stats:
 * - Total Accepted: 6,291
 * - Total Submissions: 19,407
 * - Acceptance Rate: 32.4%
 */

/**
 * Approach: Greedy
 * Time Complexity: O(n * m)
 * Space Complexity: O(1)
 * `n` = `units.length`, `m` = `units[0].length`
 *
 * @param {number[][]} units
 * @return {number}
 */
const maxRatings = (units) => {
        const INF = Number.MAX_SAFE_INTEGER;
        const n = units.length;
        const m = units[0].length;
        let sum1 = 0;
        let sum2 = 0;
        let gmn1 = INF;
        let gmn2 = INF;

        for (let i = 0; i < n; i++) {
                const items = units[i];
                let mn1 = INF;
                let mn2 = INF;

                for (let j = 0; j < m; j++) {
                        const val = items[j];

                        if (val < mn1) {
                                mn2 = mn1;
                                mn1 = val;
                        } else if (val < mn2) {
                                mn2 = val;
                        }
                }

                sum1 += mn1;
                sum2 += mn2;
                gmn1 = Math.min(gmn1, mn1);
                gmn2 = Math.min(gmn2, mn2);
        }

        return m === 1 ? sum1 : sum2 + gmn1 - gmn2;
};

export { maxRatings };
