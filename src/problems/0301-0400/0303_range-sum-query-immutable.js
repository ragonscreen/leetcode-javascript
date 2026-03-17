/**
 * 0303. Range Sum Query - Immutable
 *
 * Link: https://leetcode.com/problems/range-sum-query-immutable/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-02-06
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Design (topic_25)
 * - Prefix Sum (topic_61068)
 *
 * Stats:
 * - Total Accepted: 895,205
 * - Total Submissions: 1,250,046
 * - Acceptance Rate: 71.6%
 *
 * Similar Problems:
 * - sum-of-variable-length-subarrays (Easy)
 * - maximum-size-subarray-sum-equals-k (Medium)
 * - range-sum-query-2d-immutable (Medium)
 * - range-sum-query-mutable (Medium)
 */

/**
 * Approach: Prefix Sum
 */
class NumArray {
        /**
         * Time Complexity: O(n)
         * Space Complexity: O(n)
         *
         * @param {number[]} nums
         */
        constructor(nums) {
                this.pre = [];
                let sum = 0;

                for (const n of nums) {
                        sum += n;
                        this.pre.push(sum);
                }
        }

        /**
         * Time Complexity: O(1)
         * Space Complexity: O(1)
         *
         * @param {number} left
         * @param {number} right
         * @return {number}
         */
        sumRange = (left, right) => this.pre[right] - (this.pre[left - 1] ?? 0);
}

export { NumArray };
