/**
 * 3689. Maximum Total Subarray Value I
 *
 * Link: https://leetcode.com/problems/maximum-total-subarray-value-i/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-06-09
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Greedy (topic_17)
 * - Senior (position_senior)
 * - Weekly Contest 468 (contest_weekly-contest-468)
 *
 * Stats:
 * - Total Accepted: 88,218
 * - Total Submissions: 128,700
 * - Acceptance Rate: 68.5%
 */

/**
 * Approach: Greedy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxTotalValue = (nums, k) => {
        let mx = nums[0];
        let mn = nums[0];

        for (let i = 1; i < nums.length; i++) {
                const num = nums[i];
                mx = Math.max(mx, num);
                mn = Math.min(mn, num);
        }

        return (mx - mn) * k;
};

/**
 * Approach: Greedy [One-Liner]
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxTotalValue1 = (nums, k) => (Math.max(...nums) - Math.min(...nums)) * k;

export { maxTotalValue, maxTotalValue1 };
