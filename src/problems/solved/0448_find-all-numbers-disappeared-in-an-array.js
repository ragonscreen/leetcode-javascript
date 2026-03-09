/**
 * 0448. Find All Numbers Disappeared in an Array
 * Link: https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 * Difficulty: Easy
 * Date: 2026-03-09
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Cyclic Sort + Negative Marking
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary space
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = (nums) => {
        for (const num of nums) {
                let idx = Math.abs(num) - 1;

                while (nums[idx] > 0) {
                        const tmp = nums[idx];
                        nums[idx] *= -1;
                        idx = tmp - 1;
                }
        }

        const res = [];

        for (let i = 0; i < nums.length; i++) {
                if (nums[i] > 0) {
                        res.push(i + 1);
                }
        }

        return res;
};

/**
 * Implementation: Negative Marking
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary space
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers1 = (nums) => {
        for (const num of nums) {
                const idx = Math.abs(num) - 1;

                if (nums[idx] > 0) {
                        nums[idx] *= -1;
                }
        }

        const res = [];

        for (let i = 0; i < nums.length; i++) {
                if (nums[i] > 0) {
                        res.push(i + 1);
                }
        }

        return res;
};

export { findDisappearedNumbers, findDisappearedNumbers1 };
