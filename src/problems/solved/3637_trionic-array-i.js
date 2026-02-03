/**
 * 3637. Trionic Array I
 * Link: https://leetcode.com/problems/trionic-array-i/
 * Difficulty: Easy
 * Date: 2026-02-03
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Monotonicity Check
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
