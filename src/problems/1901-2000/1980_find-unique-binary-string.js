/**
 * 1980. Find Unique Binary String
 *
 * Link: https://leetcode.com/problems/find-unique-binary-string/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-03-08
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - String (topic_10)
 * - Backtracking (topic_14)
 *
 * Stats:
 * - Total Accepted: 409,343
 * - Total Submissions: 503,987
 * - Acceptance Rate: 81.2%
 *
 * Similar Problems:
 * - find-all-numbers-disappeared-in-an-array (Easy)
 * - missing-number (Easy)
 * - random-pick-with-blacklist (Hard)
 */

/**
 * Approach: Cantor's Diagonalization
 * Time Complexity: O(n)
 * Space Complexity: O(n)
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
