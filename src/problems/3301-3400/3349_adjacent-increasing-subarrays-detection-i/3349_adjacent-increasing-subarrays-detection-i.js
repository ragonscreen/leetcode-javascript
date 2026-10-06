/**
 * 3349. Adjacent Increasing Subarrays Detection I
 *
 * Link: https://leetcode.com/problems/adjacent-increasing-subarrays-detection-i/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-09-10
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Mid Level (position_mid-level)
 * - Weekly Contest 423 (contest_weekly-contest-423)
 *
 * Stats:
 *
 * - Total Accepted: 162,717
 * - Total Submissions: 338,963
 * - Acceptance Rate: 48.0%
 */

/**
 * Approach: Greedy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @param {number} k
 * @returns {boolean}
 */
const hasIncreasingSubarrays = (nums, k) => {
        for (let i = 1, cur = 1, pre = false; i < nums.length; i++) {
                if (nums[i] > nums[i - 1]) {
                        cur++;
                } else {
                        pre = cur >= k;
                        cur = 1;
                }

                if ((cur === k && pre) || cur === 2 * k) return true;
        }

        return false;
};

export { hasIncreasingSubarrays };
