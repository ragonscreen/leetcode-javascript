/**
 * 3912. Valid Elements in an Array
 *
 * Link: https://leetcode.com/problems/valid-elements-in-an-array/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-04-26
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Stats:
 * - Total Accepted: 23,339
 * - Total Submissions: 41,683
 * - Acceptance Rate: 56.0%
 */

/**
 * Approach: Prefix Max
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const findValidElements = (nums) => {
        const n = nums.length;
        const valid = new Int8Array(n);
        let max = -1;

        for (let i = n - 1; i > -1; i--) {
                const num = nums[i];

                if (num > max) {
                        valid[i] = 1;
                        max = num;
                }
        }

        const res = [];
        max = -1;

        for (let i = 0; i < n; i++) {
                const num = nums[i];

                if (num > max || valid[i]) {
                        res.push(num);
                }

                if (num > max) {
                        max = num;
                }
        }

        return res;
};

export { findValidElements };
