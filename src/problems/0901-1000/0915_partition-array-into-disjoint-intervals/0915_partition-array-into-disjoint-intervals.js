/**
 * 915. Partition Array into Disjoint Intervals
 *
 * Link: https://leetcode.com/problems/partition-array-into-disjoint-intervals/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-10-16
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Staff (position_staff)
 * - Weekly Contest 104 (contest_weekly-contest-104)
 *
 * Stats:
 *
 * - Total Accepted: 102,712
 * - Total Submissions: 206,239
 * - Acceptance Rate: 49.8%
 *
 * Similar Problems:
 *
 * - minimum-index-of-a-valid-split (Medium)
 * - optimal-partition-of-string (Medium)
 * - sum-of-beauty-in-the-array (Medium)
 * - maximum-strength-of-k-disjoint-subarrays (Hard)
 */

/**
 * Approach: Prefix Sum
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @returns {number}
 */
const partitionDisjoint = (nums) => {
        const n = nums.length;
        const pmn = new Uint32Array(n);
        pmn[n - 1] = nums[n - 1];

        for (let i = n - 2; i > -1; i--) pmn[i] = Math.min(pmn[i + 1], nums[i]);

        for (let j = 0, mx = nums[0]; j < n; j++) {
                mx = Math.max(mx, nums[j]);

                if (mx <= pmn[j + 1]) return j + 1;
        }

        return -1;
};

export { partitionDisjoint };
