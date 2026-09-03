/**
 * 3286. Find a Safe Walk Through a Grid
 *
 * Link: https://leetcode.com/problems/find-a-safe-walk-through-a-grid/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-26 (Updated: 2026-08-04)
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Breadth-First Search (topic_22)
 * - Graph Theory (topic_24)
 * - Heap (Priority Queue) (topic_61050)
 * - Matrix (topic_61053)
 * - Shortest Path (topic_61076)
 * - Staff (position_staff)
 * - Biweekly Contest 139 (contest_biweekly-contest-139)
 *
 * Stats:
 *
 * - Total Accepted: 37,024
 * - Total Submissions: 111,124
 * - Acceptance Rate: 33.3%
 *
 * Similar Problems:
 *
 * - shortest-path-in-a-grid-with-obstacles-elimination (Hard)
 */

/**
 * Approach: 0-1 BFS
 * Time Complexity: O(n * m)
 * Space Complexity: O(n * m)
 * `n` = `grid.length`, `m` = `grid[0].length`
 *
 * @param {number[][]} grid
 * @param {number} health
 * @returns {boolean}
 */
const findSafeWalk = (grid, health) => {
        if (health === grid[0][0]) {
                return false;
        }

        const n = grid.length;
        const m = grid[0].length;
        const sz = n * m;
        const d = [-1, 0, 1, 0, -1];
        const dq = new Uint32Array(sz * 2);
        const dist = new Uint32Array(sz).fill(-1);
        dist[0] = grid[0][0];
        let ql = sz;
        let qr = sz + 1;

        while (ql < qr) {
                const k = dq[ql++];
                const y = 0 | (k / m);
                const x = k % m;
                const dis = dist[k];

                if (k === sz - 1 && dis < health) {
                        return true;
                }

                for (let di = 0; di < 4; di++) {
                        const ny = y + d[di];
                        const nx = x + d[di + 1];

                        if (ny < 0 || ny >= n || nx < 0 || nx >= m) {
                                continue;
                        }

                        const nk = m * ny + nx;
                        const cost = grid[ny][nx];
                        const ncost = cost + dis;

                        if (ncost >= dist[nk]) {
                                continue;
                        }

                        dist[nk] = ncost;

                        if (cost === 0) {
                                dq[--ql] = nk;
                        } else {
                                dq[qr++] = nk;
                        }
                }
        }

        return dist.at(-1) < health;
};

/**
 * Approach: BFS
 * Time Complexity: O(n * m * K) [O(n * m * (n + m))]
 * Space Complexity: O(n * m * K) [O(n * m * (n + m))]
 * `n` = `gird.length`, `m` = `grid[0].length`, `K` = `health`
 *
 * @param {number[][]} grid
 * @param {number} health
 * @returns {boolean}
 */
const findSafeWalk1 = (grid, health) => {
        health -= grid[0][0];

        if (health === 0) {
                return false;
        }

        const n = grid.length;
        const m = grid[0].length;
        const p = (y, x) => m * y + x;
        const u = (k) => [0 | (k / m), k % m];
        const d = [-1, 0, 1, 0, -1];
        const dist = new Uint16Array(n * m);
        dist[0] = health;
        const q = [[health, 0]];
        let qi = 0;

        while (qi < q.length) {
                const [hp, k] = q[qi++];

                if (dist[k] > hp) {
                        continue;
                }

                if (k === n * m - 1) {
                        return true;
                }

                const [y, x] = u(k);

                for (let i = 0; i < 4; i++) {
                        const ny = y + d[i];
                        const nx = x + d[i + 1];
                        const nk = p(ny, nx);

                        if (ny < 0 || ny >= n || nx < 0 || nx >= m) {
                                continue;
                        }

                        const nhp = hp - grid[ny][nx];

                        if (dist[nk] < nhp) {
                                dist[nk] = nhp;
                                q.push([nhp, nk]);
                        }
                }
        }

        return false;
};

export { findSafeWalk, findSafeWalk1 };
