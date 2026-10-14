/**
 * 2897. Apply Operations on Array to Maximize Sum of Squares
 *
 * Link: https://leetcode.com/problems/apply-operations-on-array-to-maximize-sum-of-squares/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-10-12
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Greedy (topic_17)
 * - Bit Manipulation (topic_19)
 * - Senior Staff (position_senior-staff)
 * - Weekly Contest 366 (contest_weekly-contest-366)
 *
 * Stats:
 *
 * - Total Accepted: 81,512
 * - Total Submissions: 110,280
 * - Acceptance Rate: 73.9%
 *
 * Similar Problems:
 *
 * - minimize-or-of-remaining-elements-using-operations (Hard)
 */

/**
 * Approach: Greedy + Bit Manipulation
 * Time Complexity: O(n + K)
 * Space Complexity: O(1)
 * `n` = `nums.length`, `K` = `k`
 *
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
const maxSum = (nums, k) => {
        const MOD_BI = BigInt(1e9 + 7);
        const MXB = 30;
        const frq = new Uint32Array(MXB);

        for (const num of nums) for (let i = 0; i < MXB; i++) if (num & (1 << i)) frq[i]++;

        let res = 0n;

        for (let i = 0; i < k; i++) {
                let val = 0;

                for (let j = MXB - 1; j > -1; j--) {
                        if (frq[j]) {
                                val |= 1 << j;
                                frq[j]--;
                        }
                }

                const valBi = BigInt(val);
                res = (res + valBi * valBi) % MOD_BI;
        }

        return Number(res);
};

export { maxSum };
