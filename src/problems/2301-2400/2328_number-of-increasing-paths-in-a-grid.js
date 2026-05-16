/**
 * 2328. Number of Increasing Paths in a Grid
 *
 * Link: https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-05-17
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Dynamic Programming (topic_13)
 * - Depth-First Search (topic_21)
 * - Breadth-First Search (topic_22)
 * - Graph Theory (topic_24)
 * - Topological Sort (topic_26)
 * - Memoization (topic_33)
 * - Matrix (topic_61053)
 *
 * Stats:
 * - Total Accepted: 83,315
 * - Total Submissions: 145,258
 * - Acceptance Rate: 57.4%
 *
 * Similar Problems:
 * - all-paths-from-source-to-target (Medium)
 * - longest-increasing-path-in-a-matrix (Hard)
 * - maximum-strictly-increasing-cells-in-a-matrix (Hard)
 */

/**
 * Approach: DFS + Memoization
 * Time Complexity: O(n * m)
 * Space Complexity: O(n * m)
 *
 * @param {number[][]} grid
 * @return {number}
 */
const countPaths = (grid) => {
        const MOD = 1e9 + 7;
        const n = grid.length;
        const m = grid[0].length;
        const p = (y, x) => m * y + x;
        const memo = new Int32Array(n * m);
        const d = [-1, 0, 1, 0, -1];

        const dfs = (y, x) => {
                const k = p(y, x);
                const have = memo[k];

                if (have) {
                        return have;
                }

                let cnt = 1;

                for (let i = 0; i < 4; i++) {
                        const ny = y + d[i];
                        const nx = x + d[i + 1];

                        if (ny < 0 || ny >= n || nx < 0 || nx >= m) {
                                continue;
                        }

                        if (grid[ny][nx] > grid[y][x]) {
                                cnt = (cnt + dfs(ny, nx)) % MOD;
                        }
                }

                memo[k] = cnt;

                return cnt;
        };

        let res = 0;

        for (let y = 0; y < n; y++) {
                for (let x = 0; x < m; x++) {
                        res = (res + dfs(y, x)) % MOD;
                }
        }

        return res;
};

export { countPaths };
