/**
 * 2996. Smallest Missing Integer Greater Than Sequential Prefix Sum
 *
 * Link: https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-08-27
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Sorting (topic_61049)
 * - Mid Level (position_mid-level)
 * - Biweekly Contest 121 (contest_biweekly-contest-121)
 *
 * Stats:
 * - Total Accepted: 188,860
 * - Total Submissions: 377,402
 * - Acceptance Rate: 50.0%
 *
 * Similar Problems:
 * - longest-common-prefix (Easy)
 * - next-greater-element-i (Easy)
 * - first-missing-positive (Hard)
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(k)
 * `n` = `nums.length`, `k` = `max(nums[i])`
 *
 * @param {number[]} nums
 * @return {number}
 */
const missingInteger = (nums) => {
        const n = nums.length;
        let res = nums[0];

        for (let i = 1; i < n; i++) {
                const num = nums[i];

                if (num !== nums[i - 1] + 1) {
                        break;
                }

                res += num;
        }

        const set = new Uint8Array(Math.max(...nums) + 1);

        for (const num of nums) {
                set[num] = 1;
        }

        while (set[res]) {
                res++;
        }

        return res;
};

export { missingInteger };
