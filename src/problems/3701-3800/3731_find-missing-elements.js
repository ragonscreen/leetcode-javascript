/**
 * 3731. Find Missing Elements
 *
 * Link: https://leetcode.com/problems/find-missing-elements/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-08-26
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Sorting (topic_61049)
 * - Mid Level (position_mid-level)
 * - Weekly Contest 474 (contest_weekly-contest-474)
 *
 * Stats:
 * - Total Accepted: 270,430
 * - Total Submissions: 305,370
 * - Acceptance Rate: 88.6%
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(k)
 * `n` = `nums.length`, `k` = `max(nums[i])`
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const findMissingElements = (nums) => {
        const n = nums.length;
        const mn = Math.min(...nums);
        const mx = Math.max(...nums);
        const cnt = mx - mn + 1;

        if (cnt === n) {
                return [];
        }

        const map = new Uint8Array(cnt);

        for (let i = 0; i < n; i++) {
                map[nums[i] - mn] = 1;
        }

        const res = new Uint8Array(cnt - n);

        for (let i = 0, ri = 0; i < cnt; i++) {
                if (map[i] === 0) {
                        res[ri++] = i + mn;
                }
        }

        return res;
};

export { findMissingElements };
