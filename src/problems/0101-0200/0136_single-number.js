/**
 * 0136. Single Number
 *
 * Link: https://leetcode.com/problems/single-number/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-03-18
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Bit Manipulation (topic_19)
 *
 * Stats:
 * - Total Accepted: 4,455,340
 * - Total Submissions: 5,752,921
 * - Acceptance Rate: 77.4%
 *
 * Similar Problems:
 * - find-the-difference (Easy)
 * - find-the-xor-of-numbers-which-appear-twice (Easy)
 * - missing-number (Easy)
 * - find-the-duplicate-number (Medium)
 * - single-number-ii (Medium)
 * - single-number-iii (Medium)
 */

/**
 * Approach: Bit Manipulation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
        let xor = 0;

        for (const num of nums) {
                xor ^= num;
        }

        return xor;
};

export { singleNumber };
