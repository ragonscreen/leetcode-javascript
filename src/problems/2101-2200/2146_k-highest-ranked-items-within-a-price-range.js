/**
 * 2146. K Highest Ranked Items Within a Price Range
 *
 * Link: https://leetcode.com/problems/k-highest-ranked-items-within-a-price-range/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-24
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Breadth-First Search (topic_22)
 * - Sorting (topic_61049)
 * - Heap (Priority Queue) (topic_61050)
 * - Matrix (topic_61053)
 * - Staff (position_staff)
 * - Biweekly Contest 70 (contest_biweekly-contest-70)
 *
 * Stats:
 *
 * - Total Accepted: 23,101
 * - Total Submissions: 48,857
 * - Acceptance Rate: 47.3%
 *
 * Similar Problems:
 *
 * - as-far-from-land-as-possible (Medium)
 * - kth-largest-element-in-an-array (Medium)
 * - reward-top-k-students (Medium)
 */

/**
 * Approach: BFS + Sorting
 * Time Complexity: O(n * m lg (n * m))
 * Space Complexity: O(n * m)
 * `n` = `grid.length`, `m` = `grid[0].length`
 *
 * @param {number[][]} grid
 * @param {number[]} pricing
 * @param {number[]} start
 * @param {number} k
 * @returns {number[][]}
 */
const highestRankedKItems = (grid, pricing, start, k) => {
        const n = grid.length;
        const m = grid[0].length;
        const sz = n * m;
        const D = [-1, 0, 1, 0, -1];
        const V = new Uint8Array(sz);

        const ppos = (y, x) => m * y + x;
        const upos = (pos) => [0 | (pos / m), pos % m];

        const [lo, hi] = pricing;
        const out = [];

        const [y0, x0] = start;
        const c0 = grid[y0][x0];
        const pos0 = ppos(y0, x0);

        if (c0 >= lo && c0 <= hi) out.push([0, c0, pos0]);

        const q = new Uint32Array(sz);
        let qf = 0;
        let qb = 0;
        q[qb++] = pos0;
        V[pos0] = 1;

        let dist = 1;
        let nxt = qb;

        while (qf < qb) {
                const [y, x] = upos(q[qf++]);

                for (let di = 0; di < 4; di++) {
                        const ny = y + D[di];
                        const nx = x + D[di + 1];

                        if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;

                        const c = grid[ny][nx];

                        if (c === 0) continue;

                        const npos = ppos(ny, nx);

                        if (V[npos]) continue;

                        q[qb++] = npos;
                        V[npos] = 1;

                        if (c >= lo && c <= hi) out.push([dist, c, npos]);
                }

                if (qf === nxt) {
                        nxt = qb;
                        dist++;
                }
        }

        return out
                .sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]) // dist, price, pos
                .slice(0, k)
                .map((e) => upos(e[2]));
};

export { highestRankedKItems };
