/**
 * 3828. Final Element After Subarray Deletions
 *
 * Link: https://leetcode.com/problems/final-element-after-subarray-deletions/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-21
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Math (topic_8)
 * - Brainteaser (topic_32)
 * - Game Theory (topic_61073)
 * - Staff (position_staff)
 * - Weekly Contest 487 (contest_weekly-contest-487)
 *
 * Stats:
 * - Total Accepted: 32,333
 * - Total Submissions: 79,574
 * - Acceptance Rate: 40.6%
 */

/**
 * Approach: Math
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
const finalElement = (nums) => Math.max(nums[0], nums.at(-1));

export { finalElement };
