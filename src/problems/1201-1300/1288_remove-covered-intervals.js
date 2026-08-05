/**
 * 1288. Remove Covered Intervals
 *
 * Link: https://leetcode.com/problems/remove-covered-intervals/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-08-05
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Sorting (topic_61049)
 * - Senior (position_senior)
 * - Biweekly Contest 15 (contest_biweekly-contest-15)
 *
 * Stats:
 * - Total Accepted: 265,631
 * - Total Submissions: 441,665
 * - Acceptance Rate: 60.1%
 */

/**
 * Approach: Sorting
 * Time Complexity: O(n lg n)
 * Space Complexity: O(1) auxiliary, O(n) for sorting
 * `n` = `intervals.length`
 *
 * @param {number[][]} intervals
 * @return {number}
 */
const removeCoveredIntervals = (intervals) => {
        intervals.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
        let res = 1;
        let end = intervals[0][1];

        for (let i = 1; i < intervals.length; i++) {
                const r = intervals[i][1];

                if (r > end) {
                        end = r;
                        res++;
                }
        }

        return res;
};

export { removeCoveredIntervals };
