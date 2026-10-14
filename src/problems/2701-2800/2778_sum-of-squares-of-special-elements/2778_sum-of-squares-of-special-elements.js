/**
 * 2778. Sum of Squares of Special Elements
 *
 * Link: https://leetcode.com/problems/sum-of-squares-of-special-elements/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-10-11
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Enumeration (topic_61066)
 * - Mid Level (position_mid-level)
 * - Weekly Contest 354 (contest_weekly-contest-354)
 *
 * Stats:
 *
 * - Total Accepted: 239,021
 * - Total Submissions: 275,106
 * - Acceptance Rate: 86.9%
 *
 * Similar Problems:
 *
 * - sum-of-all-odd-length-subarrays (Easy)
 * - sum-of-square-numbers (Medium)
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @returns {number}
 */
const sumOfSquares = (nums) => {
        const n = nums.length;

        return nums.reduce((t, c, i) => t + (n % (i + 1) === 0 ? c * c : 0), 0);
};

export { sumOfSquares };
