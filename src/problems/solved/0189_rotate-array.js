/**
 * 0189. Rotate Array
 * Link: https://leetcode.com/problems/rotate-array/
 * Difficulty: Medium
 * Date: 2026-03-11
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Cyclic Traversal (Space Optimised)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {void}
 */
const rotate = (nums, k) => {
        const n = nums.length;
        let swaps = 0;

        for (let i = 0; i < n; i++) {
                let newIdx = (i + k) % n;
                let val = nums[i];

                while (swaps < n) {
                        swaps++;
                        const tmp = nums[newIdx];
                        nums[newIdx] = val;

                        if (newIdx === i) {
                                break;
                        }

                        newIdx = (newIdx + k) % n;
                        val = tmp;
                }
        }
};

/**
 * Implementation: Reverse
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {void}
 */
const rotate1 = (nums, k) => {
        const rev = (start, end) => {
                let l = start;
                let r = end;

                while (l < r) {
                        [nums[l], nums[r]] = [nums[r], nums[l]];
                        l++;
                        r--;
                }
        };

        const n = nums.length;
        const _k = k % n;
        rev(0, n - 1);
        rev(0, _k - 1);
        rev(_k, n - 1);
};

/**
 * Implementation: Cyclic Traversal
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {void}
 */
const rotate2 = (nums, k) => {
        const set = new Set();
        const n = nums.length;

        for (let i = 0; i < n; i++) {
                let newIdx = (i + k) % n;
                let val = nums[i];

                while (!set.has(newIdx)) {
                        set.add(newIdx);
                        const tmp = nums[newIdx];
                        nums[newIdx] = val;
                        newIdx = (newIdx + k) % n;
                        val = tmp;
                }
        }
};

export { rotate, rotate1, rotate2 };
