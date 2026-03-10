/**
 * 0643. Maximum Average Subarray I
 * Link: https://leetcode.com/problems/maximum-average-subarray-i/
 * Difficulty: Easy
 * Date: 2026-03-10
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Sliding Window
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = (nums, k) => {
        let sum = 0;

        for (let r = 0; r < k; r++) {
                sum += nums[r];
        }

        let max = sum;

        for (let l = 0, r = k; r < nums.length; l++, r++) {
                sum = sum - nums[l] + nums[r];
                max = Math.max(max, sum);
        }

        return max / k;
};

export { findMaxAverage };
