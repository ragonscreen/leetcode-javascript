/**
 * 0977. Squares of a Sorted Array
 * Link: https://leetcode.com/problems/squares-of-a-sorted-array/
 * Difficulty: Easy
 * Date: 2026-03-06
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Two Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(n) total, O(1) auxiliary
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = (nums) => {
        const n = nums.length;
        const res = new Array(n);
        let l = 0;
        let r = n - 1;
        let idx = n - 1;

        while (l <= r) {
                const nl = Math.abs(nums[l]);
                const nr = Math.abs(nums[r]);

                if (nl < nr) {
                        res[idx--] = nr ** 2;
                        r--;
                } else {
                        res[idx--] = nl ** 2;
                        l++;
                }
        }

        return res;
};

export { sortedSquares };
