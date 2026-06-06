/**
 * 3952. Maximum Total Value of Covered Indices
 *
 * Link: https://leetcode.com/problems/maximum-total-value-of-covered-indices/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-06-06
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Biweekly Contest 184 (contest_biweekly-contest-184)
 *
 * Stats:
 * - Total Accepted: 10,711
 * - Total Submissions: 43,196
 * - Acceptance Rate: 24.8%
 */

/**
 * Approach: Greedy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @param {string} s
 * @return {number}
 */
const maxTotal = (nums, s) => {
        let res = 0;

        for (let cur = 0, i = 0; i < nums.length; i++) {
                const num = nums[i];

                if (s[i] === '0') {
                        cur = num;
                } else {
                        res += Math.max(cur, num);
                        cur = Math.min(cur, num);
                }
        }

        return res;
};

/**
 * Approach: Dynamic Programming
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @param {string} s
 * @return {number}
 */
const maxTotal1 = (nums, s) => {
        let f = 0;
        let t = 0;

        for (let i = 0; i < nums.length; i++) {
                if (s[i] === '0') {
                        t = f;
                } else {
                        const mov = i > 0 ? nums[i - 1] + t : -1;
                        [f, t] = [Math.max(nums[i] + f, mov), Math.max(f, mov)];
                }
        }

        return f;
};

export { maxTotal, maxTotal1 };
