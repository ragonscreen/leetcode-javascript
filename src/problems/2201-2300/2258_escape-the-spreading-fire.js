/**
 * 2258. Escape the Spreading Fire
 *
 * Link: https://leetcode.com/problems/escape-the-spreading-fire/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-09-10
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Binary Search (topic_11)
 * - Breadth-First Search (topic_22)
 * - Matrix (topic_61053)
 * - Senior Staff (position_senior-staff)
 * - Biweekly Contest 77 (contest_biweekly-contest-77)
 *
 * Stats:
 *
 * - Total Accepted: 23,639
 * - Total Submissions: 60,105
 * - Acceptance Rate: 39.3%
 *
 * Similar Problems:
 *
 * - rotting-oranges (Medium)
 * - last-day-where-you-can-still-cross (Hard)
 * - maximum-number-of-points-from-grid-queries (Hard)
 * - minimum-weighted-subgraph-with-the-required-paths (Hard)
 */

/**
 * Approach: BFS + Binary Search
 * Time Complexity: O(n * m)
 * Space Complexity: O(n * m)
 * `n` = `grid.length`, `m` = `grid[0].length`
 *
 * Multi-source BFS to find the earliest time for each cell to be engulfed by fire. Binary search
 * on time to find latest wait time possible while still finding a safe route.
 *
 * @param {number[][]} grid
 * @returns {number}
 */
const maximumMinutes = (grid) => {
        const BITS = 9;
        const MASK = (1 << BITS) - 1;
        const ppos = (y, x) => (y << BITS) | x;
        const upos = (pos) => [(pos >> BITS) & MASK, pos & MASK];
        const MX = 1 << (BITS * 2);
        const INF = 2 ** 31 - 1;
        const D = [-1, 0, 1, 0, -1];

        const n = grid.length;
        const m = grid[0].length;
        const sz = n * m;
        const g = new Int32Array(MX).fill(INF);
        const q = new Uint32Array(sz);
        let qb = 0;

        for (let y = 0; y < n; y++) {
                for (let x = 0; x < m; x++) {
                        const c = grid[y][x];

                        if (c > 0) {
                                const pos = ppos(y, x);

                                if (c === 2) {
                                        g[pos] = -1;
                                } else {
                                        g[pos] = 0;
                                        q[qb++] = pos;
                                }
                        }
                }
        }

        let qf = 0;
        let nxt = qb;
        let cur = 1;

        while (qf < qb) {
                const [y, x] = upos(q[qf++]);

                for (let di = 0; di < 4; di++) {
                        const ny = y + D[di];
                        const nx = x + D[di + 1];

                        if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;

                        const npos = ppos(ny, nx);

                        if (g[npos] < INF) continue;

                        g[npos] = cur;
                        q[qb++] = npos;
                }

                if (qf === nxt) {
                        nxt = qb;
                        cur++;
                }
        }

        const vis = new Int32Array(MX).fill(-1);
        const end = ppos(n - 1, m - 1);
        const tend = g[end];

        const check = (t) => {
                let tt = t + 1;
                q[0] = 0;
                qf = 0;
                qb = 1;
                nxt = qb;

                while (qf < qb) {
                        const [y, x] = upos(q[qf++]);

                        for (let di = 0; di < 4; di++) {
                                const ny = y + D[di];
                                const nx = x + D[di + 1];

                                if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;

                                const npos = ppos(ny, nx);

                                if (npos === end && tt <= tend) return true;
                                if (vis[npos] === t || g[npos] <= tt) continue;

                                q[qb++] = npos;
                                vis[npos] = t;
                        }

                        if (qf === nxt) {
                                nxt = qb;
                                tt++;
                        }
                }

                return false;
        };

        let ok = -1;
        let ng = Math.min(g[0], tend, 1e9) + 1;

        while (Math.abs(ok - ng) > 1) {
                const mid = (ok + ng) >> 1;
                if (check(mid)) ok = mid;
                else ng = mid;
        }

        return ok;
};

export { maximumMinutes };
