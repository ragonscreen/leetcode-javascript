/**
 * 1020. Number of Enclaves
 *
 * Link: https://leetcode.com/problems/number-of-enclaves/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-05
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Depth-First Search (topic_21)
 * - Breadth-First Search (topic_22)
 * - Union-Find (topic_23)
 * - Matrix (topic_61053)
 * - Staff (position_staff)
 * - Weekly Contest 130 (contest_weekly-contest-130)
 *
 * Stats:
 *
 * - Total Accepted: 463,830
 * - Total Submissions: 642,012
 * - Acceptance Rate: 72.2%
 */

/**
 * Approach: DFS
 * Time Complexity: O(n * m)
 * Space Complexity: O(1) auxiliary, O(n * m) total
 * `n` = `grid.length`, `m` = `grid[0].length`
 *
 * @param {number[][]} grid
 * @returns {number}
 */
const numEnclaves = (grid) => {
        const n = grid.length;
        const m = grid[0].length;
        const d = [-1, 0, 1, 0, -1];

        const dfs = (y, x) => {
                if (y < 0 || y >= n || x < 0 || x >= m) return;
                if (grid[y][x] === 0) return;

                grid[y][x] = 0;

                for (let di = 0; di < 4; di++) {
                        const ny = y + d[di];
                        const nx = x + d[di + 1];
                        dfs(ny, nx);
                }
        };

        for (let x = 0; x < m; x++) for (const y of [0, n - 1]) dfs(y, x);
        for (let y = 1; y < n - 1; y++) for (const x of [0, m - 1]) dfs(y, x);

        let res = 0;

        for (let y = 1; y < n - 1; y++) for (let x = 1; x < m - 1; x++) res += grid[y][x];

        return res;
};

/**
 * Approach: BFS
 * Time Complexity: O(n * m)
 * Space Complexity: O(n * m)
 * `n` = `grid.length`, `m` = `grid[0].length`
 *
 * @param {number[][]} grid
 * @returns {number}
 */
const numEnclaves1 = (grid) => {
        const n = grid.length;
        const m = grid[0].length;
        const ppos = (y, x) => m * y + x;
        const upos = (pos) => [0 | (pos / m), pos % m];
        const d = [-1, 0, 1, 0, -1];
        const q = new Uint32Array(n * m);
        let qf = 0;
        let qb = 0;

        for (let x = 0; x < m; x++) {
                for (const y of [0, n - 1]) {
                        const c = grid[y][x];

                        if (c === 1) {
                                q[qb++] = ppos(y, x);
                                grid[y][x] = 0;
                        }
                }
        }

        for (let y = 1; y < n - 1; y++) {
                for (const x of [0, m - 1]) {
                        const c = grid[y][x];

                        if (c === 1) {
                                q[qb++] = ppos(y, x);
                                grid[y][x] = 0;
                        }
                }
        }

        while (qf < qb) {
                const [y, x] = upos(q[qf++]);

                for (let di = 0; di < 4; di++) {
                        const ny = y + d[di];
                        const nx = x + d[di + 1];

                        if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
                        if (grid[ny][nx] === 0) continue;

                        grid[ny][nx] = 0;
                        q[qb++] = ppos(ny, nx);
                }
        }

        let res = 0;

        for (let y = 1; y < n - 1; y++) for (let x = 1; x < m - 1; x++) res += grid[y][x];

        return res;
};

export { numEnclaves, numEnclaves1 };
