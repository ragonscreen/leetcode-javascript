/**
 * 3550. Smallest Index With Digit Sum Equal to Index
 *
 * Link: https://leetcode.com/problems/smallest-index-with-digit-sum-equal-to-index/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-09-24
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Math (topic_8)
 * - Mid Level (position_mid-level)
 * - Weekly Contest 450 (contest_weekly-contest-450)
 *
 * Stats:
 *
 * - Total Accepted: 62,469
 * - Total Submissions: 78,461
 * - Acceptance Rate: 79.6%
 */

/**
 * Approach: Math
 * Time Complexity: O(n log K)
 * Space Complexity: O(1)
 * `n` = `nums.length`, `K` = `max(nums[i])`
 *
 * @param {number[]} nums
 * @returns {number}
 */
const smallestIndex = (nums) => {
        const f = (v) => {
                let sum = 0;

                while (v > 0) {
                        sum += v % 10;
                        v = 0 | (v / 10);
                }

                return sum;
        };

        return nums.findIndex((e, i) => f(e) === i);
};

export { smallestIndex };
