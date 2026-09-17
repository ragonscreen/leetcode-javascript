/**
 * 2395. Find Subarrays With Equal Sum
 *
 * Link: https://leetcode.com/problems/find-subarrays-with-equal-sum/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-09-18
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Mid Level (position_mid-level)
 * - Biweekly Contest 86 (contest_biweekly-contest-86)
 *
 * Stats:
 *
 * - Total Accepted: 80,189
 * - Total Submissions: 119,043
 * - Acceptance Rate: 67.4%
 *
 * Similar Problems:
 *
 * - two-sum (Easy)
 * - find-two-non-overlapping-sub-arrays-each-with-target-sum (Medium)
 * - partition-equal-subset-sum (Medium)
 */

/**
 * Approach: Sliding Window
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @returns {boolean}
 */
const findSubarrays = (nums) => {
        let sum = nums[0] + nums[1];
        const set = new Set([sum]);

        for (let i = 2; i < nums.length; i++) {
                sum = sum - nums[i - 2] + nums[i];

                if (set.has(sum)) return true;

                set.add(sum);
        }

        return false;
};

export { findSubarrays };
