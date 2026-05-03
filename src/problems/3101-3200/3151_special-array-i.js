/**
 * 3151. Special Array I
 *
 * Link: https://leetcode.com/problems/special-array-i/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-05-03
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 *
 * Stats:
 * - Total Accepted: 262,504
 * - Total Submissions: 321,612
 * - Acceptance Rate: 81.6%
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @return {boolean}
 */
const isArraySpecial = (nums) => {
        for (let i = 0; i < nums.length; i++) {
                if (nums[i] % 2 === nums[i + 1] % 2) {
                        return false;
                }
        }

        return true;
};

export { isArraySpecial };
