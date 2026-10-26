/**
 * 3282. Reach End of Array With Max Score
 *
 * Link: https://leetcode.com/problems/reach-end-of-array-with-max-score/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-10-17
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Greedy (topic_17)
 * - Staff (position_staff)
 * - Weekly Contest 414 (contest_weekly-contest-414)
 *
 * Stats:
 *
 * - Total Accepted: 30,679
 * - Total Submissions: 90,214
 * - Acceptance Rate: 34.0%
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
const findMaximumScore = (nums) => {
        const n = nums.length;
        let res = 0;
        let cur = nums[0];
        let i = 0;

        for (let j = 1; j < n; j++) {
                if (nums[j] > cur) {
                        res += (j - i) * cur;
                        cur = nums[j];
                        i = j;
                }
        }

        res += (n - 1 - i) * cur;

        return res;
};

export { findMaximumScore };
