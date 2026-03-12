/**
 * 3289. The Two Sneaky Numbers of Digitville
 * Link: https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/
 * Difficulty: Easy
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
const getSneakyNumbers = (nums) => {
        const n = nums.length;
        const res = [];

        for (let i = 0; i < n; i++) {
                let idx = Math.abs(nums[i]);

                if (idx === n) {
                        idx = 0;
                }

                if (nums[idx] >= 0) {
                        if (nums[idx] === 0) {
                                nums[idx] = -n;
                        } else {
                                nums[idx] *= -1;
                        }
                } else {
                        res.push(idx);
                }
        }

        return res;
};

export { getSneakyNumbers };
