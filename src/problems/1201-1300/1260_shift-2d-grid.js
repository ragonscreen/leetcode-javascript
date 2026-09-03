/**
 * 1260. Shift 2D Grid
 *
 * Link: https://leetcode.com/problems/shift-2d-grid/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-08-24
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Matrix (topic_61053)
 * - Simulation (topic_61055)
 * - Mid Level (position_mid-level)
 * - Weekly Contest 163 (contest_weekly-contest-163)
 *
 * Stats:
 *
 * - Total Accepted: 251,641
 * - Total Submissions: 337,788
 * - Acceptance Rate: 74.5%
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n * m)
 * Space Complexity: O(1) auxiliary, O(n * m) total
 * `n` = `grid.length`, `m` = `grid[0].length`
 *
 * @param {number[][]} grid
 * @param {number} k
 * @returns {number[][]}
 */
const shiftGrid = (grid, k) => {
        const n = grid.length;
        const m = grid[0].length;
        const sz = n * m;
        const res = Array.from({ length: n }, () => new Array(m));

        for (let y = 0; y < n; y++) {
                for (let x = 0; x < m; x++) {
                        const k0 = m * y + x;
                        const kk = (k + k0) % sz;
                        const yk = 0 | (kk / m);
                        const xk = kk % m;
                        res[yk][xk] = grid[y][x];
                }
        }

        return res;
};

export { shiftGrid };
