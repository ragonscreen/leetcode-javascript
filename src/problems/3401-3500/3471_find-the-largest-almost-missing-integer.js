/**
 * 3471. Find the Largest Almost Missing Integer
 *
 * Link: https://leetcode.com/problems/find-the-largest-almost-missing-integer/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-08-31
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Mid Level (position_mid-level)
 * - Weekly Contest 439 (contest_weekly-contest-439)
 *
 * Stats:
 * - Total Accepted: 163,892
 * - Total Submissions: 332,174
 * - Acceptance Rate: 49.3%
 *
 * Similar Problems:
 * - missing-number (Easy)
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(d)
 * `n` = `nums.length`, `d` = `max(nums[i])`
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const largestInteger = (nums, k) => {
        const n = nums.length;
        const mx = Math.max(...nums);

        if (k === n) {
                return mx;
        }

        if (k === 1) {
                const map = new Uint8Array(mx + 1);

                for (const num of nums) {
                        map[num]++;
                }

                for (let i = mx; i > -1; i--) {
                        if (map[i] === 1) {
                                return i;
                        }
                }

                return -1;
        }

        const a = nums[0];
        const b = nums[n - 1];
        let ca = 0;
        let cb = 0;

        for (const num of nums) {
                ca += num === a;
                cb += num === b;
        }

        if (ca === 1 && cb === 1) {
                return Math.max(a, b);
        }

        if (ca === 1) {
                return a;
        }

        if (cb === 1) {
                return b;
        }

        return -1;
};

export { largestInteger };
