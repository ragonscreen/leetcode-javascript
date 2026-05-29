/**
 * 3300. Minimum Element After Replacement With Digit Sum
 *
 * Link: https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-05-29
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Math (topic_8)
 * - Mid Level (position_mid-level)
 * - Biweekly Contest 140 (contest_biweekly-contest-140)
 *
 * Stats:
 * - Total Accepted: 120,843
 * - Total Submissions: 137,150
 * - Acceptance Rate: 88.1%
 *
 * Similar Problems:
 * - sum-of-digits-of-string-after-convert (Easy)
 */

/**
 * Approach: Math
 * Time Complexity: O(n log k)
 * Space Complexity: O(1)
 * `n` = `nums.length`, `k` = `max(nums[i])`
 *
 * @param {number[]} nums
 * @return {number}
 */
const minElement = (nums) => {
        let res = Number.MAX_SAFE_INTEGER;

        for (let i = 0; i < nums.length; i++) {
                let num = nums[i];
                let sum = 0;

                while (num) {
                        sum += num % 10;
                        num = 0 | (num / 10);
                }

                res = Math.min(res, sum);
        }

        return res;
};

export { minElement };
