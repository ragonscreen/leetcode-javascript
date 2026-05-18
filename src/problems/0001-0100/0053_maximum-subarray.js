/**
 * 0053. Maximum Subarray
 *
 * Link: https://leetcode.com/problems/maximum-subarray/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-19
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Divide and Conquer (topic_12)
 * - Dynamic Programming (topic_13)
 *
 * Stats:
 * - Total Accepted: 6,124,333
 * - Total Submissions: 11,489,132
 * - Acceptance Rate: 53.3%
 *
 * Similar Problems:
 * - best-time-to-buy-and-sell-stock (Easy)
 * - degree-of-an-array (Easy)
 * - k-items-with-the-maximum-sum (Easy)
 * - maximum-value-of-a-string-in-an-array (Easy)
 * - find-the-substring-with-maximum-cost (Medium)
 * - longest-turbulent-subarray (Medium)
 * - maximum-absolute-sum-of-any-subarray (Medium)
 * - maximum-good-subarray-sum (Medium)
 * - maximum-product-subarray (Medium)
 * - maximum-subarray-sum-after-one-operation (Medium)
 * - count-subarrays-with-score-less-than-k (Hard)
 * - maximize-subarray-sum-after-removing-all-occurrences-of-one-element (Hard)
 * - maximum-score-of-spliced-array (Hard)
 * - substring-with-largest-variance (Hard)
 */

/**
 * Approach: Greedy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
        let res = nums[0];
        let sum = 0;

        for (let i = 0; i < nums.length; i++) {
                const num = nums[i];
                sum += num;
                sum = Math.max(sum, num);
                res = Math.max(res, sum);
        }

        return res;
};

export { maxSubArray };
