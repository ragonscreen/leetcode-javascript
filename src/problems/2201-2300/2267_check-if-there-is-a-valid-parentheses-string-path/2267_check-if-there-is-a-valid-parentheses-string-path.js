/**
 * 2267. Check if There Is a Valid Parentheses String Path
 *
 * Link: https://leetcode.com/problems/check-if-there-is-a-valid-parentheses-string-path/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-09-29
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Dynamic Programming (topic_13)
 * - Matrix (topic_61053)
 * - Bracket Sequences (topic_122055)
 * - Senior Staff (position_senior-staff)
 * - Weekly Contest 292 (contest_weekly-contest-292)
 *
 * Stats:
 *
 * - Total Accepted: 57,088
 * - Total Submissions: 109,899
 * - Acceptance Rate: 51.9%
 *
 * Similar Problems:
 *
 * - check-if-a-parentheses-string-can-be-valid (Medium)
 * - check-if-there-is-a-valid-path-in-a-grid (Medium)
 */

/**
 * Approach: DFS
 * Time Complexity: O(n * m * (n + m))
 * Space Complexity: O(n * m * (n + m))
 * `n` = `grid.length`, `m` = `grid[i].length`
 *
 * @param {character[][]} grid
 * @returns {boolean}
 */
const hasValidPath = (grid) => {
        const n = grid.length;
        const m = grid[0].length;
        const sz = n + m - 1;

        if (sz & 1) return false;
        if (grid[0][0] === ')' || grid[n - 1][m - 1] === '(') return false;

        const D = [1, 0, 1];
        const BITS = 7;
        const BITS2 = BITS * 2;
        const MASK = (1 << BITS) - 1;
        const MXCTX = 1 << (BITS * 3);

        const pctx = (y, x, k) => (y << BITS2) | (x << BITS) | k;

        const delta = new Int8Array(n * m);

        for (let y = 0, r = 0; y < n; y++, r += m)
                for (let x = 0; x < m; x++) delta[r + x] = ((grid[y][x] === '(') << 1) - 1; // branchless true ? 1 : -1

        const start = pctx(0, 0, 1);
        const end = pctx(n - 1, m - 1, 0);
        const VIS = new Uint8Array(MXCTX);
        VIS[start] = 1;
        const st = [start];

        while (st.length) {
                const ctx = st.pop();

                if (ctx === end) return true;

                const y = ctx >> BITS2;
                const x = (ctx >> BITS) & MASK;
                const k = ctx & MASK;
                const rem = n - 1 - y + m - 1 - x;

                for (let di = 0; di < 2; di++) {
                        const ny = y + D[di];
                        const nx = x + D[di + 1];

                        if (ny >= n || nx >= m) continue;

                        const nk = k + delta[ny * m + nx];

                        if (nk < 0 || nk >= rem) continue;

                        const nctx = pctx(ny, nx, nk);

                        if (!VIS[nctx]) {
                                st.push(nctx);
                                VIS[nctx] = 1;
                        }
                }
        }

        return false;
};

export { hasValidPath };
