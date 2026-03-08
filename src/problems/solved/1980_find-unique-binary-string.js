/**
 * 1980. Find Unique Binary String
 * Link: https://leetcode.com/problems/find-unique-binary-string/
 * Difficulty: Medium
 * Date: 2026-03-08
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Cantor's Diagonalization
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary, O(n) total
 *
 * @param {string[]} nums
 * @return {string}
 */
const findDifferentBinaryString = (nums) => {
        let str = '';

        for (let i = 0; i < nums.length; i++) {
                str += nums[i][i] === '0' ? '1' : '0';
        }

        return str;
};

export { findDifferentBinaryString };
