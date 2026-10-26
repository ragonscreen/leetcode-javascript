/**
 * 2240. Number of Ways to Buy Pens and Pencils
 *
 * Link: https://leetcode.com/problems/number-of-ways-to-buy-pens-and-pencils/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-10-17
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Math (topic_8)
 * - Enumeration (topic_61066)
 * - Senior (position_senior)
 * - Biweekly Contest 76 (contest_biweekly-contest-76)
 *
 * Stats:
 *
 * - Total Accepted: 42,818
 * - Total Submissions: 74,738
 * - Acceptance Rate: 57.3%
 *
 * Similar Problems:
 *
 * - count-integers-with-even-digit-sum (Easy)
 * - find-three-consecutive-integers-that-sum-to-a-given-number (Medium)
 */

/**
 * Approach: Simulation
 * Time Complexity: O(K / V)
 * Space Complexity: O(1)
 * `K` = `total`, `V` = `max(cost1, cost2)`
 *
 * @param {number} total
 * @param {number} cost1
 * @param {number} cost2
 * @returns {number}
 */
const waysToBuyPensPencils = (total, cost1, cost2) => {
        const mx = Math.max(cost1, cost2);
        const mn = Math.min(cost1, cost2);
        let res = 0;

        for (let cur = 0; cur <= total; cur += mx) res += Math.floor((total - cur) / mn) + 1;

        return res;
};

export { waysToBuyPensPencils };
