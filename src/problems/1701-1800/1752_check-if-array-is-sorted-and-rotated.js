/**
 * 1752. Check if Array Is Sorted and Rotated
 *
 * Link: https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-05-24
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Mid Level (position_mid-level)
 * - Weekly Contest 227 (contest_weekly-contest-227)
 *
 * Stats:
 * - Total Accepted: 986,958
 * - Total Submissions: 1,719,693
 * - Acceptance Rate: 57.4%
 *
 * Similar Problems:
 * - check-if-all-as-appears-before-all-bs (Easy)
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @return {boolean}
 */
const check = (nums) => {
        const n = nums.length;
        let cnt = 0;

        for (let i = 0; i < n; i++) {
                cnt += nums[i] > nums[(i + 1) % n];
        }

        return cnt <= 1;
};

export { check };
