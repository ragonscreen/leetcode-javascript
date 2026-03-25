/**
 * 2257. Count Unguarded Cells in the Grid
 *
 * Link: https://leetcode.com/problems/count-unguarded-cells-in-the-grid/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-03-25
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Matrix (topic_61053)
 * - Simulation (topic_61055)
 *
 * Stats:
 * - Total Accepted: 205,583
 * - Total Submissions: 297,946
 * - Acceptance Rate: 69.0%
 *
 * Similar Problems:
 * - available-captures-for-rook (Easy)
 * - bomb-enemy (Medium)
 */

/**
 * Approach: Simulation
 * Time Complexity: O(m * n)
 * Space Complexity: O(m * n)
 *
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
const countUnguarded = (m, n, guards, walls) => {
        const grid = new Array(m);
        let res = m * n - guards.length - walls.length;

        for (let r = 0; r < m; r++) {
                grid[r] = new Array(n).fill(1);
        }

        for (const [r, c] of guards) {
                grid[r][c] = 'G';
        }

        for (const [r, c] of walls) {
                grid[r][c] = 'W';
        }

        for (let r = 0; r < m; r++) {
                let isGuard = false;

                for (let c = 0; c < n; c++) {
                        const cell = grid[r][c];

                        if (isGuard && cell === 1) {
                                grid[r][c] = 0;
                                res--;
                        }

                        if (cell === 'G') {
                                isGuard = true;
                        }

                        if (cell === 'W') {
                                isGuard = false;
                        }
                }

                isGuard = false;

                for (let c = n - 1; c >= 0; c--) {
                        const cell = grid[r][c];

                        if (isGuard && cell === 1) {
                                grid[r][c] = 0;
                                res--;
                        }

                        if (cell === 'G') {
                                isGuard = true;
                        }

                        if (cell === 'W') {
                                isGuard = false;
                        }
                }
        }

        for (let c = 0; c < n; c++) {
                let isGuard = false;

                for (let r = 0; r < m; r++) {
                        const cell = grid[r][c];

                        if (isGuard && cell === 1) {
                                grid[r][c] = 0;
                                res--;
                        }

                        if (cell === 'G') {
                                isGuard = true;
                        }

                        if (cell === 'W') {
                                isGuard = false;
                        }
                }

                isGuard = false;

                for (let r = m - 1; r >= 0; r--) {
                        const cell = grid[r][c];

                        if (isGuard && cell === 1) {
                                grid[r][c] = 0;
                                res--;
                        }

                        if (cell === 'G') {
                                isGuard = true;
                        }

                        if (cell === 'W') {
                                isGuard = false;
                        }
                }
        }

        return res;
};

export { countUnguarded };
