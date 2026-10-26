/**
 * 3784. Minimum Deletion Cost to Make All Characters Equal
 *
 * Link: https://leetcode.com/problems/minimum-deletion-cost-to-make-all-characters-equal/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-10-19
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - String (topic_10)
 * - Enumeration (topic_61066)
 * - Senior (position_senior)
 * - Weekly Contest 481 (contest_weekly-contest-481)
 *
 * Stats:
 *
 * - Total Accepted: 38,375
 * - Total Submissions: 69,785
 * - Acceptance Rate: 55.0%
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `s.length`
 *
 * @param {string} s
 * @param {number[]} cost
 * @returns {number}
 */
const minCost = (s, cost) => {
        const mp = new Float64Array(26);

        for (let i = 0; i < s.length; i++) mp[s.charCodeAt(i) - 97] += cost[i];

        const tot = mp.reduce((t, c) => t + c, 0);
        let res = Number.MAX_SAFE_INTEGER;

        for (const v of mp) res = Math.min(res, tot - v);

        return res;
};

export { minCost };
