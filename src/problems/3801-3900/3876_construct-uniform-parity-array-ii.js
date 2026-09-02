/**
 * 3876. Construct Uniform Parity Array II
 *
 * Link: https://leetcode.com/problems/construct-uniform-parity-array-ii/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-02
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Math (topic_8)
 * - Senior (position_senior)
 * - Weekly Contest 494 (contest_weekly-contest-494)
 *
 * Stats:
 * - Total Accepted: 40,386
 * - Total Submissions: 79,147
 * - Acceptance Rate: 51.0%
 */

/**
 * Approach: Math
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `nums1.length`
 *
 * The min value of the array cannot be reduced any further, and as such every
 * other value has to follow this value's parity. If the min value is odd, every
 * even number can be made odd. If the min value is even, the smallest odd
 * number cannot be made even.
 *
 * @param {number[]} nums1
 * @return {boolean}
 */
const uniformArray = (nums1) => {
        if (Math.min(...nums1) & 1) {
                return true;
        }

        for (const num of nums1) {
                if (num & 1) {
                        return false;
                }
        }

        return true;
};

export { uniformArray };
