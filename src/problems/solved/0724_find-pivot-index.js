/**
 * 0724. Find Pivot Index
 * Link: https://leetcode.com/problems/find-pivot-index/
 * Difficulty: Easy
 * Date: 2026-03-10
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Prefix Sum (Space Optimised)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = (nums) => {
        const n = nums.length;
        let r = 0;

        for (let i = 0; i < n; i++) {
                r += nums[i];
        }

        let l = 0;

        for (let i = 0; i < n; i++) {
                const num = nums[i];
                r -= num;

                if (r === l) {
                        return i;
                }

                l += num;
        }

        return -1;
};

/**
 * Implementation: Prefix Sum (One Array)
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex1 = (nums) => {
        const n = nums.length;
        const pre = new Array(n);
        let sum = 0;

        for (let i = n - 1; i >= 0; i--) {
                pre[i] = sum;
                sum += nums[i];
        }

        sum = 0;

        for (let i = 0; i < n; i++) {
                pre[i] -= sum;
                sum += nums[i];

                if (pre[i] === 0) {
                        return i;
                }
        }

        return -1;
};

/**
 * Implementation: Prefix Sum (Two Arrays)
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex2 = (nums) => {
        const pre = new Array(nums.length);
        let sum = 0;

        for (let i = 0; i < nums.length; i++) {
                pre[i] = sum;
                sum += nums[i];
        }

        const post = new Array(nums.length);
        sum = 0;

        for (let i = nums.length - 1; i >= 0; i--) {
                post[i] = sum;
                sum += nums[i];
        }

        for (let i = 0; i < pre.length; i++) {
                if (pre[i] === post[i]) {
                        return i;
                }
        }

        return -1;
};

export { pivotIndex, pivotIndex1, pivotIndex2 };
