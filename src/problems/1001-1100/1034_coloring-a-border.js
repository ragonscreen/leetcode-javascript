/**
 * 1034. Coloring A Border
 *
 * Link: https://leetcode.com/problems/coloring-a-border/
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
 * - Staff (position_staff)
 * - Weekly Contest 134 (contest_weekly-contest-134)
 *
 * Stats:
 * - Total Accepted: 51,900
 * - Total Submissions: 101,018
 * - Acceptance Rate: 51.4%
 *
 * Similar Problems:
 * - island-perimeter (Easy)
 */

/**
 * Approach: DFS
 * Time Complexity: O(n * m)
 * Space Complexity: O(n * m)
 * `n` = `grid.length`, `m` = `grid[0].length`
 *
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @param {number} color
 * @return {number[][]}
 */
const colorBorder = (grid, row, col, color) => {
        const n = grid.length;
        const m = grid[0].length;
        const d = [-1, 0, 1, 0, -1];
        const v = new Uint8Array(n * m);
        v[m * row + col] = 1;
        const clr = grid[row][col];
        const stack = [m * row + col];
        const bounds = [];

        while (stack.length) {
                const k = stack.pop();
                const y = 0 | (k / m);
                const x = k % m;
                let isBound = false;

                for (let i = 0; i < 4; i++) {
                        const ny = y + d[i];
                        const nx = x + d[i + 1];
                        const nk = m * ny + nx;

                        if (
                                ny < 0 ||
                                ny >= n ||
                                nx < 0 ||
                                nx >= m ||
                                grid[ny][nx] !== clr
                        ) {
                                isBound = true;
                                continue;
                        }

                        if (v[nk]) {
                                continue;
                        }

                        v[nk] = 1;
                        stack.push(nk);
                }

                if (isBound) {
                        bounds.push(k);
                }
        }

        for (let i = 0; i < bounds.length; i++) {
                const k = bounds[i];
                const y = 0 | (k / m);
                const x = k % m;
                grid[y][x] = color;
        }

        return grid;
};

export { colorBorder };
