/**
 * 3513. Number of Unique XOR Triplets I
 *
 * Link: https://leetcode.com/problems/number-of-unique-xor-triplets-i/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-07-23
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Math (topic_8)
 * - Bit Manipulation (topic_19)
 * - Senior (position_senior)
 * - Biweekly Contest 154 (contest_biweekly-contest-154)
 *
 * Stats:
 *
 * - Total Accepted: 62,983
 * - Total Submissions: 126,013
 * - Acceptance Rate: 50.0%
 */

/**
 * Approach: Math
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @returns {number}
 */
const uniqueXorTriplets = (nums) => {
        const n = nums.length;

        return n <= 2 ? n : 2 ** (32 - Math.clz32(n));
};

export { uniqueXorTriplets };
