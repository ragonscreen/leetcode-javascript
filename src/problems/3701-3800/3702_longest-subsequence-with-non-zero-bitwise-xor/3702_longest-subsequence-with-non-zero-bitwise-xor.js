/**
 * 3702. Longest Subsequence With Non-Zero Bitwise XOR
 *
 * Link: https://leetcode.com/problems/longest-subsequence-with-non-zero-bitwise-xor/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-08-27
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Bit Manipulation (topic_19)
 * - Senior (position_senior)
 * - Weekly Contest 470 (contest_weekly-contest-470)
 *
 * Stats:
 *
 * - Total Accepted: 138,399
 * - Total Submissions: 249,563
 * - Acceptance Rate: 55.5%
 */

/**
 * Approach: Bit Manipulation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @returns {number}
 */
const longestSubsequence = (nums) => {
        const n = nums.length;
        let ng = true;
        let xor = 0;

        for (let i = 0; i < n; i++) {
                const num = nums[i];
                xor ^= num;

                if (num > 0) {
                        ng = false;
                }
        }

        return ng ? 0 : xor > 0 ? n : n - 1;
};

export { longestSubsequence };
