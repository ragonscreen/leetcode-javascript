/**
 * 3105. Longest Strictly Increasing or Strictly Decreasing Subarray
 *
 * Link: https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-11-12
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Mid Level (position_mid-level)
 * - Weekly Contest 392 (contest_weekly-contest-392)
 *
 * Stats:
 *
 * - Total Accepted: 273,042
 * - Total Submissions: 410,011
 * - Acceptance Rate: 66.6%
 */

/**
 * Approach: Simulation [II]
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @returns {number}
 */
const longestMonotonicSubarray = (nums) => {
        const n = nums.length;
        let res = 1;
        let asc = 1;
        let dsc = 1;

        for (let i = 1; i < n; i++) {
                const v = nums[i];
                const u = nums[i - 1];

                if (v > u) {
                        asc++;
                        dsc = 1;
                        res = Math.max(res, asc);
                } else if (v < u) {
                        dsc++;
                        asc = 1;
                        res = Math.max(res, dsc);
                } else {
                        asc = 1;
                        dsc = 1;
                }
        }

        return res;
};

/**
 * Approach: Simulation [I]
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @returns {number}
 */
const longestMonotonicSubarray1 = (nums) => {
        const n = nums.length;
        let res = -1;
        let cur = 1;

        for (let i = 1; i < n; i++) {
                if (nums[i] > nums[i - 1]) {
                        cur++;
                } else {
                        res = Math.max(res, cur);
                        cur = 1;
                }
        }

        res = Math.max(res, cur);
        cur = 1;

        for (let i = 1; i < n; i++) {
                if (nums[i] < nums[i - 1]) {
                        cur++;
                } else {
                        res = Math.max(res, cur);
                        cur = 1;
                }
        }

        res = Math.max(res, cur);

        return res;
};

export { longestMonotonicSubarray, longestMonotonicSubarray1 };
