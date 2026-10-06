/**
 * 3870. Count Commas in Range
 *
 * Link: https://leetcode.com/problems/count-commas-in-range/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-09-08
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Math (topic_8)
 * - Mid Level (position_mid-level)
 * - Weekly Contest 493 (contest_weekly-contest-493)
 *
 * Stats:
 *
 * - Total Accepted: 199,733
 * - Total Submissions: 257,295
 * - Acceptance Rate: 77.6%
 */

/**
 * Approach: Math
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 *
 * @param {number} n
 * @returns {number}
 */
const countCommas = (n) => Math.max(n - 999, 0);

export { countCommas };
