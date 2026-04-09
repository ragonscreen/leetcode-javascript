/**
 * 0713. Subarray Product Less Than K
 *
 * Link: https://leetcode.com/problems/subarray-product-less-than-k/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-09
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Binary Search (topic_11)
 * - Sliding Window (topic_55821)
 * - Prefix Sum (topic_61068)
 *
 * Stats:
 * - Total Accepted: 604,658
 * - Total Submissions: 1,116,685
 * - Acceptance Rate: 54.1%
 *
 * Similar Problems:
 * - two-sum-less-than-k (Easy)
 * - maximum-product-subarray (Medium)
 * - maximum-size-subarray-sum-equals-k (Medium)
 * - number-of-smooth-descent-periods-of-a-stock (Medium)
 * - subarray-sum-equals-k (Medium)
 * - count-subarrays-with-score-less-than-k (Hard)
 */

/**
 * Approach: Sliding Window
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const numSubarrayProductLessThanK = (nums, k) => {
        let res = 0;
        let prd = 1;

        for (let l = 0, r = 0; r < nums.length; r++) {
                prd *= nums[r];

                while (prd >= k && l <= r) {
                        prd /= nums[l++];
                }

                res += r - l + 1;
        }

        return res;
};

export { numSubarrayProductLessThanK };
