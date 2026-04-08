/**
 * 2779. Maximum Beauty of an Array After Applying Operation
 *
 * Link: https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-08
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Binary Search (topic_11)
 * - Sliding Window (topic_55821)
 * - Sorting (topic_61049)
 *
 * Stats:
 * - Total Accepted: 132,210
 * - Total Submissions: 226,513
 * - Acceptance Rate: 58.4%
 *
 * Similar Problems:
 * - maximum-size-subarray-sum-equals-k (Medium)
 * - partition-array-such-that-maximum-difference-is-k (Medium)
 */

/**
 * Approach: Sorting + Sliding Window
 * Time Complexity: O(n log n)
 * Space Complexity: O(1) auxiliary, O(n) for sorting
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maximumBeauty = (nums, k) => {
        nums.sort((a, b) => a - b);
        let res = 0;

        for (let l = 0, r = 0; r < nums.length; r++) {
                while (nums[l] + k < nums[r] - k) {
                        l++;
                }

                res = Math.max(res, r - l + 1);
        }

        return res;
};

export { maximumBeauty };
