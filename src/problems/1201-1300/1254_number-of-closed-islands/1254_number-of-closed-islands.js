/**
 * 1254. Number of Closed Islands
 *
 * Link: https://leetcode.com/problems/number-of-closed-islands/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-10-25
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
 * - Weekly Contest 162 (contest_weekly-contest-162)
 *
 * Stats:
 *
 * - Total Accepted: 374,878
 * - Total Submissions: 531,745
 * - Acceptance Rate: 70.5%
 */

/**
 * Approach: DFS
 * Time Complexity: O(n * m)
 * Space Complexity: O(1) auxiliary, O(n * m) total
 * `n` = `grid.length`, `m` = `grid[i].length`
 *
 * @param {number[][]} grid
 * @returns {number}
 */
const closedIsland = (grid) => {
        const n = grid.length;
        const m = grid[0].length;
        const D = [-1, 0, 1, 0, -1];
        let cur = true;
        let res = 0;

        const dfs = (y, x) => {
                if (y === 0 || y === n - 1 || x === 0 || x === m - 1) cur = false;

                grid[y][x] = 1;

                for (let di = 0; di < 4; di++) {
                        const ny = y + D[di];
                        const nx = x + D[di + 1];

                        if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;

                        if (grid[ny][nx] === 0) dfs(ny, nx);
                }
        };

        for (let y = 0; y < n; y++) {
                for (let x = 0; x < m; x++) {
                        if (grid[y][x] === 1) continue;

                        dfs(y, x);
                        res += cur;
                        cur = true;
                }
        }

        return res;
};

export { closedIsland };
