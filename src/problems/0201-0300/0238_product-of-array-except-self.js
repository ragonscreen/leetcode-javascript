/**
 * 0238. Product of Array Except Self
 *
 * Link: https://leetcode.com/problems/product-of-array-except-self/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2025-12-12
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Prefix Sum (topic_61068)
 *
 * Stats:
 * - Total Accepted: 4,394,344
 * - Total Submissions: 6,400,781
 * - Acceptance Rate: 68.7%
 *
 * Similar Problems:
 * - construct-product-matrix (Medium)
 * - maximum-product-subarray (Medium)
 * - find-sum-of-array-product-of-magical-sequences (Hard)
 * - minimum-difference-in-sums-after-removal-of-elements (Hard)
 * - paint-house-ii (Hard)
 * - trapping-rain-water (Hard)
 */

/**
 * Approach: Prefix Sum
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary, O(n) total
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
        const n = nums.length;
        const res = new Array(n);
        let val = 1;

        for (let i = 0; i < n; i++) {
                res[i] = val;
                val *= nums[i];
        }

        val = 1;

        for (let i = n - 1; i >= 0; i--) {
                res[i] *= val;
                val *= nums[i];
        }

        return res;
};

export { productExceptSelf };
