/**
 * 3546. Equal Sum Grid Partition I
 *
 * Link: https://leetcode.com/problems/equal-sum-grid-partition-i/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-03
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Matrix (topic_61053)
 * - Enumeration (topic_61066)
 * - Prefix Sum (topic_61068)
 * - Senior (position_senior)
 * - Weekly Contest 449 (contest_weekly-contest-449)
 *
 * Stats:
 *
 * - Total Accepted: 133,202
 * - Total Submissions: 252,056
 * - Acceptance Rate: 52.8%
 */

/**
 * Approach: Prefix Sum [Space Optimized]
 * Time Complexity: O(n * m)
 * Space Complexity: O(1)
 * `n` = `grid.length`, `m` = `grid[0].length`
 *
 * @param {number[][]} grid
 * @returns {boolean}
 */
const canPartitionGrid = (grid) => {
        const n = grid.length;
        const m = grid[0].length;
        const tot = grid.reduce((t, c) => t + c.reduce((tt, cc) => tt + cc, 0), 0);
        let sum = 0;

        for (let y = 0; y < n - 1; y++) {
                for (let x = 0; x < m; x++) {
                        sum += grid[y][x];
                }

                if (2 * sum === tot) {
                        return true;
                }
        }

        sum = 0;

        for (let x = 0; x < m - 1; x++) {
                for (let y = 0; y < n; y++) {
                        sum += grid[y][x];
                }

                if (2 * sum === tot) {
                        return true;
                }
        }

        return false;
};

/**
 * Approach: Prefix Sum
 * Time Complexity: O(n * m)
 * Space Complexity: O(n + m)
 * `n` = `grid.length`, `m` = `grid[0].length`
 *
 * @param {number[][]} grid
 * @returns {boolean}
 */
const canPartitionGrid1 = (grid) => {
        const n = grid.length;
        const m = grid[0].length;
        const pr = new Float64Array(n + 1);

        for (let y = 0; y < n; y++) {
                let rsum = 0;

                for (let x = 0; x < m; x++) {
                        rsum += grid[y][x];
                }

                pr[y + 1] = pr[y] + rsum;
        }

        let tot = pr[n];

        for (const num of pr) {
                if (2 * num === tot) {
                        return true;
                }
        }

        const pc = new Float64Array(m + 1);

        for (let x = 0; x < m; x++) {
                let csum = 0;

                for (let y = 0; y < n; y++) {
                        csum += grid[y][x];
                }

                pc[x + 1] = pc[x] + csum;
        }

        tot = pc[m];

        for (const num of pc) {
                if (2 * num === tot) {
                        return true;
                }
        }

        return false;
};

export { canPartitionGrid, canPartitionGrid1 };
