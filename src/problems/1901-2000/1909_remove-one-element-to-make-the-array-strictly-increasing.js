/**
 * 1909. Remove One Element to Make the Array Strictly Increasing
 *
 * Link: https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-04-19
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 *
 * Stats:
 * - Total Accepted: 86,246
 * - Total Submissions: 290,187
 * - Acceptance Rate: 29.7%
 *
 * Similar Problems:
 * - find-the-maximum-factor-score-of-array (Medium)
 * - steps-to-make-array-non-decreasing (Medium)
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @return {boolean}
 */
const canBeIncreasing = (nums) => {
        const n = nums.length;

        const inc = (l, r) => {
                for (let i = l + 1; i < r; i++) {
                        if (nums[i] <= nums[i - 1]) {
                                return i;
                        }
                }

                return r;
        };

        const i = inc(0, n);

        // no invalid index
        if (i === n) {
                return true;
        }

        // remove invalid & check
        if (inc(i + 1, n) === n && (i + 1 === n || nums[i + 1] > nums[i - 1])) {
                return true;
        }

        // remove elem before invalid & check
        return inc(i, n) === n && (i - 2 < 0 || nums[i] > nums[i - 2]);
};

export { canBeIncreasing };
