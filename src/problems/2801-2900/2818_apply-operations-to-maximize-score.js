/**
 * 2818. Apply Operations to Maximize Score
 *
 * Link: https://leetcode.com/problems/apply-operations-to-maximize-score/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-09-15
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Math (topic_8)
 * - Stack (topic_15)
 * - Greedy (topic_17)
 * - Sorting (topic_61049)
 * - Monotonic Stack (topic_61054)
 * - Number Theory (topic_61067)
 * - Senior Staff (position_senior-staff)
 * - Weekly Contest 358 (contest_weekly-contest-358)
 *
 * Stats:
 *
 * - Total Accepted: 76,926
 * - Total Submissions: 144,144
 * - Acceptance Rate: 53.4%
 *
 * Similar Problems:
 *
 * - next-greater-element-iv (Hard)
 */

/**
 * Approach: Math + Monotonic Stack + Sorting + Greedy
 * Time Complexity: O(M log log M + n log n + n log K)
 * Space Complexity: O(M + n)
 * `n` = `nums.length`, `M` = `max(nums[i])`, `K` = `k`
 *
 * In practice, the sieve generation is only performed once, before all testcases are executed.
 *
 * Find the max width of the section for every `num` in `nums` such that `num` is the dominant
 * element of that section. Calculate the number of subarrays possible in each section.
 *
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
const maximumScore = (nums, k) => {
        const MOD = 1e9 + 7;
        const MOD_BI = BigInt(MOD);
        const MAX_N = Math.max(...nums) + 1;
        const SV = new Uint32Array(MAX_N);

        for (let i = 2; i < MAX_N; i++) if (SV[i] === 0) for (let j = i; j < MAX_N; j += i) SV[j]++;

        const n = nums.length;
        const idx = Uint32Array.from({ length: n }, (_, i) => i);
        const scr = Uint32Array.from(idx, (e) => SV[nums[e]]);
        const l = new Uint32Array(n);
        const r = new Uint32Array(n);
        const s = new Uint32Array(n);
        let sp = 0;

        for (let i = 0; i < n; i++) {
                const v = scr[i];
                let li = i;

                while (sp > 0 && v > scr[s[sp - 1]]) li = l[s[--sp]];

                s[sp++] = i;
                l[i] = li;
        }

        sp = 0;

        for (let i = n - 1; i > -1; i--) {
                const v = scr[i];
                let ri = i;

                while (sp > 0 && v >= scr[s[sp - 1]]) ri = r[s[--sp]];

                s[sp++] = i;
                r[i] = ri;
        }

        // returns BigInt
        const binpow = (a, b) => {
                let x = BigInt(a) % MOD_BI;
                let res = 1n;

                while (b > 0) {
                        if (b & 1) res = (res * x) % MOD_BI;
                        x = (x * x) % MOD_BI;
                        b >>= 1;
                }

                return res;
        };

        idx.sort((a, b) => nums[b] - nums[a]);
        let res = 1n;

        for (let i = 0, tot = 0; i < n && tot < k; i++) {
                const j = idx[i];
                const num = nums[j];
                const have = (j - l[j] + 1) * (r[j] - j + 1);
                const take = Math.min(have, k - tot);
                tot += take;
                res = (res * binpow(num, take)) % MOD_BI;
        }

        return Number(res);
};

export { maximumScore };
