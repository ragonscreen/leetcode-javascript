/**
 * 1551. Minimum Operations to Make Array Equal
 *
 * Link: https://leetcode.com/problems/minimum-operations-to-make-array-equal/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-10-17
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Math (topic_8)
 * - Senior (position_senior)
 * - Weekly Contest 202 (contest_weekly-contest-202)
 *
 * Stats:
 *
 * - Total Accepted: 125,009
 * - Total Submissions: 150,574
 * - Acceptance Rate: 83.0%
 *
 * Similar Problems:
 *
 * - minimum-operations-to-make-array-equal-ii (Medium)
 * - minimum-number-of-operations-to-make-arrays-similar (Hard)
 */

/**
 * Approach: Math
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 *
 * @param {number} n
 * @returns {number}
 */
const minOperations = (n) => {
        const m = n >> 1;

        return n & 1 ? m * (m + 1) : m * m;
};

export { minOperations };
