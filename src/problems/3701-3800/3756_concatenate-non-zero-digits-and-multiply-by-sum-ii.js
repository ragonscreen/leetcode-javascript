/**
 * 3756. Concatenate Non-Zero Digits and Multiply by Sum II
 *
 * Link: https://leetcode.com/problems/concatenate-non-zero-digits-and-multiply-by-sum-ii/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-08-24
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Math (topic_8)
 * - String (topic_10)
 * - Prefix Sum (topic_61068)
 * - Staff (position_staff)
 * - Weekly Contest 477 (contest_weekly-contest-477)
 *
 * Stats:
 * - Total Accepted: 95,289
 * - Total Submissions: 223,327
 * - Acceptance Rate: 42.7%
 */

/**
 * Approach: Prefix Sum
 * Time Complexity: O(n + q)
 * Space Complexity: O(n) auxiliary, O(N + q) total
 * `n` = `s.length`, `q` = `queries.length`
 *
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
const sumAndMultiply = (s, queries) => {
        const MOD = 1e9 + 7;
        const BMOD = BigInt(MOD);
        const MX = 1e5 + 1;
        const pow10 = new Uint32Array(MX);
        pow10[0] = 1;

        for (let i = 1; i < MX; i++) {
                pow10[i] = (pow10[i - 1] * 10) % MOD;
        }

        const n = s.length;
        const q = queries.length;
        const ps = new Uint32Array(n + 1);
        const pc = new Uint32Array(n + 1);
        const px = new Uint32Array(n + 1);
        let sum = 0;
        let cnt = 0;
        let x = 0;

        for (let i = 0; i < n; i++) {
                const d = Number(s[i]);

                if (d !== 0) {
                        sum += d;
                        cnt++;
                        x = (x * 10 + d) % MOD;
                }

                ps[i + 1] = sum;
                pc[i + 1] = cnt;
                px[i + 1] = x;
        }

        const res = new Uint32Array(q);

        for (let qi = 0; qi < q; qi++) {
                let [l, r] = queries[qi];
                r++;
                const len = pc[r] - pc[l];
                const xl = Number((BigInt(px[l]) * BigInt(pow10[len])) % BMOD);
                let qx = px[r] - xl;
                qx = ((qx % MOD) + MOD) % MOD;
                const qsum = ps[r] - ps[l];
                res[qi] = (qsum * qx) % MOD;
        }

        return res;
};

export { sumAndMultiply };
