/**
 * 0962. Maximum Width Ramp
 * Link: https://leetcode.com/problems/maximum-width-ramp/
 * Difficulty: Medium
 * Date: 2026-03-16
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Monotonic Stack
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
const maxWidthRamp = (nums) => {
        const n = nums.length;
        const stackIdx = [];

        for (let i = 0; i < n; i++) {
                if (!stackIdx.length || nums[i] <= nums[stackIdx.at(-1)]) {
                        stackIdx.push(i);
                }
        }

        let res = 0;

        for (let i = n - 1; i >= 0; i--) {
                const val = nums[i];

                while (stackIdx.length && val >= nums[stackIdx.at(-1)]) {
                        res = Math.max(res, i - stackIdx.at(-1));
                        stackIdx.pop();
                }
        }

        return res;
};

export { maxWidthRamp };
