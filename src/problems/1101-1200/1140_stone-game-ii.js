/**
 * 1140. Stone Game II
 *
 * Link: https://leetcode.com/problems/stone-game-ii/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-08-27
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Math (topic_8)
 * - Dynamic Programming (topic_13)
 * - Minimax (topic_35)
 * - Prefix Sum (topic_61068)
 * - Game Theory (topic_61073)
 * - Zero-Sum Game (topic_122082)
 * - Principal (position_principal)
 * - Weekly Contest 147 (contest_weekly-contest-147)
 *
 * Stats:
 * - Total Accepted: 287,526
 * - Total Submissions: 379,771
 * - Acceptance Rate: 75.7%
 *
 * Similar Problems:
 * - stone-game-ix (Medium)
 * - stone-game-vi (Medium)
 * - stone-game-vii (Medium)
 * - stone-game-v (Hard)
 * - stone-game-viii (Hard)
 */

/**
 * Approach: Prefix Sum + Recursion + Memoization [II]
 * Time Complexity: O(n^3)
 * Space Complexity: O(n^2)
 * `n` = `piles.length`
 *
 * @param {number[]} piles
 * @return {number}
 */
const stoneGameII = (piles) => {
        const n = piles.length;
        const p = new Uint32Array(n + 1);

        for (let i = n - 1; i > -1; i--) {
                p[i] = piles[i] + p[i + 1];
        }

        const memo = Array.from(
                { length: n + 1 },
                () => new Uint32Array(n + 1),
        );

        const rec = (i, m) => {
                // take all piles if possible
                if (i + 2 * m >= n) {
                        return p[i];
                }

                const val = memo[i][m];

                if (val > 0) {
                        return val;
                }

                let res = 0;

                for (let x = 1; x <= 2 * m; x++) {
                        const cntOpp = rec(i + x, Math.max(m, x));
                        const cntOur = p[i] - cntOpp;
                        res = Math.max(res, cntOur);
                }

                memo[i][m] = res;

                return res;
        };

        return rec(0, 1);
};

/**
 * Approach: Recursion + Memoization [I]
 * Time Complexity: O(n^3)
 * Space Complexity: O(n^2)
 * `n` = `piles.length`
 *
 * The recursive function calculates the difference between scores of A and B.
 * To find A we need to do some basic algebra:
 *
 *    tot + diff = (A + B) + (A - B)
 * => tot + diff = 2A
 * => A = (tot + diff) / 2
 *
 * @param {number[]} piles
 * @return {number}
 */
const stoneGameII1 = (piles) => {
        const n = piles.length;
        const NINF = -(10 ** 6 + 1); // constraint
        const memo = Array.from({ length: n + 1 }, () =>
                new Int32Array(n + 1).fill(NINF),
        );

        const rec = (i, m) => {
                if (i === n) {
                        return 0;
                }

                const val = memo[i][m];

                if (val > NINF) {
                        return val;
                }

                let score = 0;
                let res = NINF;

                for (let j = i, x = 1; j < n && x <= 2 * m; j++, x++) {
                        score += piles[j];
                        const nm = Math.min(n, Math.max(m, x));
                        res = Math.max(res, score - rec(j + 1, nm));
                }

                memo[i][m] = res;

                return res;
        };

        const tot = piles.reduce((a, b) => a + b, 0);
        const diff = rec(0, 1);

        return (tot + diff) >> 1;
};

export { stoneGameII, stoneGameII1 };
