/**
 * 1493. Longest Subarray of 1's After Deleting One Element
 *
 * Link: https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-03-27
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Dynamic Programming (topic_13)
 * - Sliding Window (topic_55821)
 *
 * Stats:
 * - Total Accepted: 633,312
 * - Total Submissions: 890,536
 * - Acceptance Rate: 71.1%
 *
 * Similar Problems:
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
const longestSubarray = (nums) => {
        let res = 0;
        let zeroes = 0;

        for (let l = 0, r = 0; r < nums.length; r++) {
                if (nums[r] === 0) {
                        zeroes++;
                }

                while (zeroes > 1) {
                        if (nums[l] === 0) {
                                zeroes--;
                        }

                        l++;
                }

                res = Math.max(res, r - l);
        }

        return res;
};

export { longestSubarray };
