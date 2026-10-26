/**
 * 2588. Count the Number of Beautiful Subarrays
 *
 * Link: https://leetcode.com/problems/count-the-number-of-beautiful-subarrays/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-10-17
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Bit Manipulation (topic_19)
 * - Prefix Sum (topic_61068)
 * - Staff (position_staff)
 * - Weekly Contest 336 (contest_weekly-contest-336)
 *
 * Stats:
 *
 * - Total Accepted: 29,869
 * - Total Submissions: 54,379
 * - Acceptance Rate: 54.9%
 *
 * Similar Problems:
 *
 * - maximum-xor-for-each-query (Medium)
 * - count-the-number-of-ideal-arrays (Hard)
 */

/**
 * Approach: Prefix Sum + Bit Manipulation
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @returns {number}
 */
const beautifulSubarrays = (nums) => {
        const n = nums.length;
        const p = new Uint32Array(n);
        p[0] = nums[0];

        for (let i = 1; i < n; i++) p[i] = p[i - 1] ^ nums[i];

        const mp = new Uint32Array(Math.max(...p) + 1);
        mp[0] = 1;
        let res = 0;

        for (let i = 0; i < n; i++) {
                const val = p[i];
                res += mp[val];
                mp[val]++;
        }

        return res;
};

export { beautifulSubarrays };
