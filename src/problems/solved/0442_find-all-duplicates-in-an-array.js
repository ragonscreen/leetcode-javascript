/**
 * 0442. Find All Duplicates in an Array
 * Link: https://leetcode.com/problems/find-all-duplicates-in-an-array/
 * Difficulty: Medium
 * Date: 2026-03-12
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Negative Marking
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = (nums) => {
        const res = [];

        for (let i = 0; i < nums.length; i++) {
                const num = Math.abs(nums[i]);
                const idx = num - 1;

                if (nums[idx] > 0) {
                        nums[idx] *= -1;
                } else {
                        res.push(num);
                }
        }

        return res;
};

export { findDuplicates };
