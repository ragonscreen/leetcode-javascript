/**
 * 2962. Count Subarrays Where Max Element Appears at Least K Times
 *
 * Link: https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-21
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Sliding Window (topic_55821)
 *
 * Stats:
 * - Total Accepted: 259,475
 * - Total Submissions: 415,888
 * - Acceptance Rate: 62.4%
 *
 * Similar Problems:
 * - find-the-number-of-subarrays-where-boundary-elements-are-maximum (Hard)
 */

/**
 * Approach: Sliding Window
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const countSubarrays = (nums, k) => {
        const max = Math.max(...nums);
        let res = 0;
        let cnt = 0;

        for (let l = 0, r = 0; r < nums.length; r++) {
                cnt += nums[r] === max;

                // find shortest valid window
                // third pointer not required as every
                // valid window starts at the 0th position
                while (cnt === k) {
                        cnt -= nums[l++] === max;
                }

                res += l;
        }

        return res;
};

export { countSubarrays };
