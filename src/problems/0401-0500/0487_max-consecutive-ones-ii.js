/**
 * 0487. Max Consecutive Ones II
 *
 * Link: https://leetcode.com/problems/max-consecutive-ones-ii/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-22
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Dynamic Programming (topic_13)
 * - Sliding Window (topic_55821)
 *
 * Stats:
 * - Total Accepted: 183,813
 * - Total Submissions: 353,454
 * - Acceptance Rate: 52.0%
 *
 * Similar Problems:
 * - max-consecutive-ones (Easy)
 * - all-divisions-with-the-highest-score-of-a-binary-array (Medium)
 * - max-consecutive-ones-iii (Medium)
 */

/**
 * Approach: Sliding Window
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = (nums) => {
        let res = 0;
        let flips = 0;

        for (let l = 0, r = 0; r < nums.length; r++) {
                flips += nums[r] ^ 1;

                while (flips > 1) {
                        flips -= nums[l++] ^ 1;
                }

                res = Math.max(res, r - l + 1);
        }

        return res;
};

export { findMaxConsecutiveOnes };
