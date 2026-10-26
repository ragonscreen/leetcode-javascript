/**
 * 200. Number of Islands
 *
 * Link: https://leetcode.com/problems/number-of-islands/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-10-26
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Depth-First Search (topic_21)
 * - Breadth-First Search (topic_22)
 * - Union-Find (topic_23)
 * - Matrix (topic_61053)
 *
 * Stats:
 *
 * - Total Accepted: 4,557,257
 * - Total Submissions: 6,974,413
 * - Acceptance Rate: 65.3%
 *
 * Similar Problems:
 *
 * - battleships-in-a-board (Medium)
 * - count-islands-with-total-value-divisible-by-k (Medium)
 * - count-sub-islands (Medium)
 * - count-unreachable-pairs-of-nodes-in-an-undirected-graph (Medium)
 * - find-all-groups-of-farmland (Medium)
 * - max-area-of-island (Medium)
 * - maximum-number-of-fish-in-a-grid (Medium)
 * - number-of-connected-components-in-an-undirected-graph (Medium) (Premium)
 * - number-of-distinct-islands (Medium) (Premium)
 * - surrounded-regions (Medium)
 * - walls-and-gates (Medium) (Premium)
 * - number-of-islands-ii (Hard) (Premium)
 */

/**
 * Approach: DFS
 * Time Complexity: O(n * m)
 * Space Complexity: O(1) auxiliary, O(n * m) total
 * `n` = `grid.length`, `m` = `grid[i].length`
 *
 * @param {character[][]} grid
 * @returns {number}
 */
const numIslands = (grid) => {
        const n = grid.length;
        const m = grid[0].length;
        const D = [-1, 0, 1, 0, -1];
        let res = 0;

        const dfs = (y, x) => {
                grid[y][x] = '0';

                for (let di = 0; di < 4; di++) {
                        const ny = y + D[di];
                        const nx = x + D[di + 1];

                        if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;

                        if (grid[ny][nx] ^ 0) dfs(ny, nx);
                }
        };

        for (let y = 0; y < n; y++) {
                for (let x = 0; x < m; x++) {
                        if (grid[y][x] ^ 1) continue;

                        dfs(y, x);
                        res++;
                }
        }

        return res;
};

export { numIslands };
