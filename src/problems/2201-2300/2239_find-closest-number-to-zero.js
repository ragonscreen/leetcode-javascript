/**
 * 2239. Find Closest Number to Zero
 *
 * Link: https://leetcode.com/problems/find-closest-number-to-zero/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-04-03
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 *
 * Stats:
 * - Total Accepted: 208,435
 * - Total Submissions: 435,811
 * - Acceptance Rate: 47.8%
 *
 * Similar Problems:
 * - find-k-closest-elements (Medium)
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
const findClosestNumber = (nums) => {
        let minDiff = Math.abs(nums[0]);
        let res = nums[0];

        for (const num of nums) {
                const diff = Math.abs(num);

                if (diff === minDiff && num > res) {
                        res = num;
                }

                if (diff < minDiff) {
                        res = num;
                        minDiff = diff;
                }
        }

        return res;
};

export { findClosestNumber };
