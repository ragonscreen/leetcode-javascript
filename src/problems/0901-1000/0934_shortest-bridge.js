/**
 * 0934. Shortest Bridge
 *
 * Link: https://leetcode.com/problems/shortest-bridge/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-06-04
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Depth-First Search (topic_21)
 * - Breadth-First Search (topic_22)
 * - Matrix (topic_61053)
 * - Senior Staff (position_senior-staff)
 * - Weekly Contest 109 (contest_weekly-contest-109)
 *
 * Stats:
 * - Total Accepted: 279,536
 * - Total Submissions: 469,778
 * - Acceptance Rate: 59.5%
 *
 * Similar Problems:
 * - minimum-number-of-operations-to-make-x-and-y-equal (Medium)
 */

/**
 * Approach: DFS + BFS
 * Time Complexity: O(n * m)
 * Space Complexity: O(n * m)
 * `n` = `grid.length`, `m` = `grid[0].length`
 *
 * @param {number[][]} grid
 * @return {number}
 */
const shortestBridge = (grid) => {
        const n = grid.length;
        const sz = n * n;
        const d = [-1, 0, 1, 0, -1];
        const v = new Uint8Array(sz);
        let q = [];

        // find first island
        const dfs = (k0) => {
                const stack = [k0];
                v[k0] = 1;

                while (stack.length) {
                        const k = stack.pop();
                        const y = 0 | (k / n);
                        const x = k % n;
                        let isBound = false;

                        for (let i = 0; i < 4; i++) {
                                const ny = y + d[i];
                                const nx = x + d[i + 1];
                                const nk = n * ny + nx;

                                if (
                                        ny < 0 ||
                                        ny >= n ||
                                        nx < 0 ||
                                        nx >= n ||
                                        v[nk]
                                ) {
                                        continue;
                                }

                                if (grid[ny][nx] === 0) {
                                        isBound = true;
                                        continue;
                                }

                                stack.push(nk);
                                v[nk] = 1;
                        }

                        if (isBound) {
                                q.push(k);
                        }
                }
        };

        // find shortest path
        const bfs = () => {
                let res = 0;

                while (q.length) {
                        const q2 = [];

                        for (let qi = 0; qi < q.length; qi++) {
                                const k = q[qi];
                                const y = 0 | (k / n);
                                const x = k % n;

                                for (let i = 0; i < 4; i++) {
                                        const ny = y + d[i];
                                        const nx = x + d[i + 1];
                                        const nk = n * ny + nx;

                                        if (
                                                ny < 0 ||
                                                ny >= n ||
                                                nx < 0 ||
                                                nx >= n ||
                                                v[nk]
                                        ) {
                                                continue;
                                        }

                                        if (grid[ny][nx] === 1) {
                                                return res;
                                        }

                                        q2.push(nk);
                                        v[nk] = 1;
                                }
                        }

                        q = q2;
                        res++;
                }
        };

        for (let y = 0; y < n; y++) {
                for (let x = 0; x < n; x++) {
                        if (grid[y][x]) {
                                dfs(n * y + x);
                                return bfs();
                        }
                }
        }
};

export { shortestBridge };
