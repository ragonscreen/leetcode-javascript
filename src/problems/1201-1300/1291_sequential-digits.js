/**
 * 1291. Sequential Digits
 *
 * Link: https://leetcode.com/problems/sequential-digits/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-26
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Enumeration (topic_61066)
 * - Staff (position_staff)
 * - Weekly Contest 167 (contest_weekly-contest-167)
 *
 * Stats:
 * - Total Accepted: 236,145
 * - Total Submissions: 361,255
 * - Acceptance Rate: 65.4%
 */

/**
 * Approach: Precomputation
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 *
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
const sequentialDigits = (low, high) => {
        const nums = [
                12, 23, 34, 45, 56, 67, 78, 89, 123, 234, 345, 456, 567, 678,
                789, 1234, 2345, 3456, 4567, 5678, 6789, 12_345, 23_456, 34_567,
                45_678, 56_789, 123_456, 234_567, 345_678, 456_789, 1_234_567,
                2_345_678, 3_456_789, 12_345_678, 23_456_789, 123_456_789,
        ];

        let l = 0;

        while (nums[l] < low) {
                l++;
        }

        let r = nums.length - 1;

        while (nums[r] > high) {
                r--;
        }

        return nums.slice(l, r + 1);
};

export { sequentialDigits };
