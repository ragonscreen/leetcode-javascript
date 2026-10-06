/**
 * 1029. Two City Scheduling
 *
 * Link: https://leetcode.com/problems/two-city-scheduling/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-03
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Greedy (topic_17)
 * - Sorting (topic_61049)
 * - Hungarian Algorithm (topic_92600)
 * - Successive Shortest Path Algorithm (topic_122029)
 * - Senior (position_senior)
 * - Weekly Contest 133 (contest_weekly-contest-133)
 *
 * Stats:
 *
 * - Total Accepted: 297,159
 * - Total Submissions: 431,136
 * - Acceptance Rate: 68.9%
 *
 * Similar Problems:
 *
 * - rearrange-array-to-maximize-prefix-score (Medium)
 */

/**
 * Approach: Sorting
 * Time Complexity: O(n lg n)
 * Space Complexity: O(1) auxiliary, O(n) for sorting
 * `n` = `costs.length`
 *
 * The people with the smallest relative cost to send to city B compared to A
 * should be sent to B. Since each city must receive half of the people, if we
 * sort `costs` by the relative cost `B - A` in non-decreasing order, the first
 * half should be sent to B and the second half to A.
 *
 * @param {number[][]} costs
 * @returns {number}
 */
const twoCitySchedCost = (costs) => {
        const n = costs.length;
        const m = n >> 1;
        costs.sort(([i, j], [p, q]) => j - i - (q - p));
        let res = 0;

        for (let i = 0; i < m; i++) {
                res += costs[i][1];
        }

        for (let i = m; i < n; i++) {
                res += costs[i][0];
        }

        return res;
};

export { twoCitySchedCost };
