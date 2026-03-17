/**
 * 3637. Trionic Array I
 *
 * Link: https://leetcode.com/problems/trionic-array-i/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-02-03
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 *
 * Stats:
 * - Total Accepted: 193,471
 * - Total Submissions: 390,586
 * - Acceptance Rate: 49.5%
 */

/**
 * Approach: Linear Scan
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @return {boolean}
 */
const isTrionic = (nums) => {
        const n = nums.length;
        let i = 0;

        while (i < n - 1 && nums[i] < nums[i + 1]) {
                i++;
        }

        if (i === 0) {
                return false;
        }

        let tmp = i;

        while (i < n - 1 && nums[i] > nums[i + 1]) {
                i++;
        }

        if (i === tmp) {
                return false;
        }

        tmp = i;

        while (i < n - 1 && nums[i] < nums[i + 1]) {
                i++;
        }

        if (i === tmp) {
                return false;
        }

        return i === n - 1;
};

export { isTrionic };
