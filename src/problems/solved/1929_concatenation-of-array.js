/**
 * 1929. Concatenation of Array
 * Link: https://leetcode.com/problems/concatenation-of-array/
 * Difficulty: Easy
 * Date: 2026-02-03
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Iteration
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const getConcatenation = (nums) => {
        const n = nums.length;
        const res = new Array(n * 2);

        for (let i = 0; i < n; i++) {
                const v = nums[i];
                res[i] = v;
                res[i + n] = v;
        }

        return res;
};

export { getConcatenation };
