/**
 * 3514. Number of Unique XOR Triplets II
 *
 * Link: https://leetcode.com/problems/number-of-unique-xor-triplets-ii/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-08-25
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Math (topic_8)
 * - Bit Manipulation (topic_19)
 * - Enumeration (topic_61066)
 * - Staff (position_staff)
 * - Biweekly Contest 154 (contest_biweekly-contest-154)
 *
 * Stats:
 * - Total Accepted: 96,996
 * - Total Submissions: 183,298
 * - Acceptance Rate: 52.9%
 */

/**
 * Approach: Math
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @return {number}
 */
const uniqueXorTriplets = (nums) => {
        const set = Uint16Array.from(new Set(nums));
        const n = set.length;
        // next highest power of 2 from max(nums[i])
        // according to constraints
        const mx = 2048;
        const xor2 = new Uint8Array(mx);
        const xor3 = new Uint8Array(mx);

        for (let i = 0; i < n; i++) {
                for (let j = i; j < n; j++) {
                        xor2[set[i] ^ set[j]] = 1;
                }
        }

        for (let i = 0; i < mx; i++) {
                if (!xor2[i]) {
                        continue;
                }

                for (let j = 0; j < n; j++) {
                        xor3[i ^ set[j]] = 1;
                }
        }

        let res = 0;

        for (let i = 0; i < mx; i++) {
                res += xor3[i];
        }

        return res;
};

export { uniqueXorTriplets };
