/**
 * 3903. Smallest Stable Index I
 *
 * Link: https://leetcode.com/problems/smallest-stable-index-i/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-09-04
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Prefix Sum (topic_61068)
 * - Mid Level (position_mid-level)
 * - Weekly Contest 498 (contest_weekly-contest-498)
 *
 * Stats:
 *
 * - Total Accepted: 102,267
 * - Total Submissions: 137,281
 * - Acceptance Rate: 74.5%
 */

/**
 * Approach: Prefix Sum
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
const firstStableIndex = (nums, k) => {
        const n = nums.length;
        const mns = new Uint32Array(n);

        for (let i = n - 1, mn = nums[n - 1]; i > -1; i--) {
                mn = Math.min(mn, nums[i]);
                mns[i] = mn;
        }

        for (let i = 0, mx = -1; i < n; i++) {
                mx = Math.max(mx, nums[i]);
                if (mx - mns[i] <= k) return i;
        }

        return -1;
};

export { firstStableIndex };
