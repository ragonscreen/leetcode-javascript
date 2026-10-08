/**
 * 3523. Make Array Non-decreasing
 *
 * Link: https://leetcode.com/problems/make-array-non-decreasing/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-10-08
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Stack (topic_15)
 * - Greedy (topic_17)
 * - Monotonic Stack (topic_61054)
 * - Senior (position_senior)
 * - Weekly Contest 446 (contest_weekly-contest-446)
 *
 * Stats:
 *
 * - Total Accepted: 35,673
 * - Total Submissions: 62,101
 * - Acceptance Rate: 57.4%
 */

/**
 * Approach: Greedy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @returns {number}
 */
const maximumPossibleSize = (nums) => {
        const n = nums.length;
        let res = n;

        for (let i = 1, cur = nums[0]; i < n; i++) {
                const num = nums[i];

                if (num < cur) res--;
                else if (num > cur) cur = num;
        }

        return res;
};

export { maximumPossibleSize };
