/**
 * 0209. Minimum Size Subarray Sum
 *
 * Link: https://leetcode.com/problems/minimum-size-subarray-sum/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-03-04
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Binary Search (topic_11)
 * - Sliding Window (topic_55821)
 * - Prefix Sum (topic_61068)
 *
 * Stats:
 * - Total Accepted: 1,815,145
 * - Total Submissions: 3,544,621
 * - Acceptance Rate: 51.2%
 *
 * Similar Problems:
 * - minimum-positive-sum-subarray (Easy)
 * - shortest-subarray-with-or-at-least-k-i (Easy)
 * - k-radius-subarray-averages (Medium)
 * - maximum-length-of-repeated-subarray (Medium)
 * - maximum-product-after-k-increments (Medium)
 * - maximum-size-subarray-sum-equals-k (Medium)
 * - minimum-operations-to-reduce-x-to-zero (Medium)
 * - minimum-window-substring (Hard)
 */

/**
 * Approach: Sliding Window
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
