/**
 * 3619. Count Islands With Total Value Divisible by K
 *
 * Link: https://leetcode.com/problems/count-islands-with-total-value-divisible-by-k/
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
 * - Senior (position_senior)
 * - Biweekly Contest 161 (contest_biweekly-contest-161)
 *
 * Stats:
 *
 * - Total Accepted: 103,410
 * - Total Submissions: 160,610
 * - Acceptance Rate: 64.4%
 *
 * Similar Problems:
 *
 * - number-of-islands (Medium)
 */

/**
 * Approach: DFS
 * Time Complexity: O(n * m)
 * Space Complexity: O(1) auxiliary, O(n * m) total
 * `n` = `grid.length`, `m` = `grid[0].length`
 *
 * @param {number[][]} grid
 * @param {number} k
 * @returns {number}
 */
const countIslands = (grid, k) => {
        const n = grid.length;
        const m = grid[0].length;
        const D = [-1, 0, 1, 0, -1];
        let cur = 0;
        let res = 0;

        const dfs = (y, x) => {
                cur += grid[y][x];
                grid[y][x] = 0;

                for (let di = 0; di < 4; di++) {
                        const ny = y + D[di];
                        const nx = x + D[di + 1];

                        if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;

                        if (grid[ny][nx] > 0) dfs(ny, nx);
                }
        };

        for (let y = 0; y < n; y++) {
                for (let x = 0; x < m; x++) {
                        if (grid[y][x] === 0) continue;

                        dfs(y, x);
                        res += cur % k === 0;
                        cur = 0;
                }
        }

        return res;
};

export { countIslands };
