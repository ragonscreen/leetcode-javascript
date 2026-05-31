/**
 * 3101. Count Alternating Subarrays
 *
 * Link: https://leetcode.com/problems/count-alternating-subarrays/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-21
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Math (topic_8)
 * - Staff (position_staff)
 * - Weekly Contest 391 (contest_weekly-contest-391)
 *
 * Stats:
 * - Total Accepted: 45,809
 * - Total Submissions: 79,705
 * - Acceptance Rate: 57.5%
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @return {number}
 */
const countAlternatingSubarrays = (nums) => {
        let res = 1;
        let sz = 1;

        for (let i = 1; i < nums.length; i++) {
                sz = nums[i] === nums[i - 1] ? 1 : sz + 1;
                res += sz;
        }

        return res;
};

export { countAlternatingSubarrays };
