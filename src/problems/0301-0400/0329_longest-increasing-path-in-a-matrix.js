/**
 * 0329. Longest Increasing Path in a Matrix
 *
 * Link: https://leetcode.com/problems/longest-increasing-path-in-a-matrix/
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
 * - Total Accepted: 719,374
 * - Total Submissions: 1,270,766
 * - Acceptance Rate: 56.6%
 *
 * Similar Problems:
 * - number-of-increasing-paths-in-a-grid (Hard)
 */

/**
 * Approach: DFS + Memoization
 * Time Complexity: O(n * m)
 * Space Complexity: O(n * m)
 *
 * @param {number[][]} matrix
 * @return {number}
 */
const longestIncreasingPath = (matrix) => {
        const n = matrix.length;
        const m = matrix[0].length;
        const p = (y, x) => m * y + x;
        const memo = new Uint16Array(n * m);
        const d = [
                [-1, 0],
                [0, 1],
                [1, 0],
                [0, -1],
        ];

        const dfs = (y, x) => {
                const k = p(y, x);
                const have = memo[k];

                if (have) {
                        return have;
                }

                let max = 1;

                for (const [dy, dx] of d) {
                        const ny = y + dy;
                        const nx = x + dx;

                        if (ny < 0 || ny >= n || nx < 0 || nx >= m) {
                                continue;
                        }

                        if (matrix[ny][nx] > matrix[y][x]) {
                                max = Math.max(max, dfs(ny, nx) + 1);
                        }
                }

                memo[k] = max;

                return max;
        };

        let res = 1;

        for (let y = 0; y < n; y++) {
                for (let x = 0; x < m; x++) {
                        res = Math.max(res, dfs(y, x));
                }
        }

        return res;
};

export { longestIncreasingPath };
