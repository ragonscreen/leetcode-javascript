/**
 * 1464. Maximum Product of Two Elements in an Array
 *
 * Link: https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-08-25
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Sorting (topic_61049)
 * - Heap (Priority Queue) (topic_61050)
 * - Mid Level (position_mid-level)
 * - Weekly Contest 191 (contest_weekly-contest-191)
 *
 * Stats:
 * - Total Accepted: 700,191
 * - Total Submissions: 824,126
 * - Acceptance Rate: 85.0%
 */

/**
 * Approach: Math
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = (nums) => {
        let mx1 = -1;
        let mx2 = -1;

        for (let i = 0; i < nums.length; i++) {
                const num = nums[i] - 1;

                if (num > mx1) {
                        mx2 = mx1;
                        mx1 = num;
                } else if (num > mx2) {
                        mx2 = num;
                }
        }

        return mx1 * mx2;
};

export { maxProduct };
