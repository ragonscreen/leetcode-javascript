/**
 * 695. Max Area of Island
 *
 * Link: https://leetcode.com/problems/max-area-of-island/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-09
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
 *
 * Stats:
 *
 * - Total Accepted: 1,314,605
 * - Total Submissions: 1,770,775
 * - Acceptance Rate: 74.2%
 *
 * Similar Problems:
 *
 * - island-perimeter (Easy)
 * - battleships-in-a-board (Medium)
 * - detonate-the-maximum-bombs (Medium)
 * - largest-submatrix-with-rearrangements (Medium)
 * - maximum-number-of-fish-in-a-grid (Medium)
 * - number-of-islands (Medium)
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
const maxAreaOfIsland = (grid) => {
        const n = grid.length;
        const m = grid[0].length;
        const d = [-1, 0, 1, 0, -1];

        const dfs = (y, x) => {
                if (y < 0 || y >= n || x < 0 || x >= m || grid[y][x] === 0) return 0;

                grid[y][x] = 0;
                let cnt = 1;

                for (let di = 0; di < 4; di++) cnt += dfs(y + d[di], x + d[di + 1]);

                return cnt;
        };

        let res = 0;

        for (let y = 0; y < n; y++)
                for (let x = 0; x < m; x++) if (grid[y][x]) res = Math.max(res, dfs(y, x));

        return res;
};

export { maxAreaOfIsland };
