/**
 * 0209. Minimum Size Subarray Sum
 * Link: https://leetcode.com/problems/minimum-size-subarray-sum/
 * Difficulty: Medium
 * Date: 2026-03-04
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Sliding Window
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = (target, nums) => {
        const n = nums.length;
        let min = n + 1;
        let l = 0;
        let sum = 0;

        for (let r = 0; r < n; r++) {
                sum += nums[r];

                while (sum >= target) {
                        min = Math.min(min, r - l + 1);
                        sum -= nums[l++];
                }
        }

        return min === n + 1 ? 0 : min;
};

export { minSubArrayLen };
