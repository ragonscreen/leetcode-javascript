/**
 * 0303. Range Sum Query - Immutable
 * Link: https://leetcode.com/problems/range-sum-query-immutable/
 * Difficulty: Easy
 * Date: 2026-02-06
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Prefix Sum
 * Space Complexity: O(n)
 */
class NumArray {
        /**
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
         *
         * @param {number} left
         * @param {number} right
         * @return {number}
         */
        sumRange = (left, right) => this.pre[right] - (this.pre[left - 1] ?? 0);
}

export { NumArray };
