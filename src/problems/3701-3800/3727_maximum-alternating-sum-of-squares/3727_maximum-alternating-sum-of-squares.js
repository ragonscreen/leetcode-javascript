/**
 * 3727. Maximum Alternating Sum of Squares
 *
 * Link: https://leetcode.com/problems/maximum-alternating-sum-of-squares/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-10-13
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Greedy (topic_17)
 * - Sorting (topic_61049)
 * - Senior (position_senior)
 * - Weekly Contest 473 (contest_weekly-contest-473)
 *
 * Stats:
 *
 * - Total Accepted: 156,665
 * - Total Submissions: 206,746
 * - Acceptance Rate: 75.8%
 */

/**
 * Approach: Greedy + Sorting
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @returns {number}
 */
const maxAlternatingSum = (nums) => {
        const vals = Uint32Array.from(nums, (e) => e * e).sort();
        const n = nums.length;
        const mid = n >> 1;
        let res = 0;

        for (let i = 0; i < mid; i++) res -= vals[i];
        for (let i = mid; i < n; i++) res += vals[i];

        return res;
};

export { maxAlternatingSum };
