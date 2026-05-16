/**
 * 2017. Grid Game
 *
 * Link: https://leetcode.com/problems/grid-game/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-16
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Matrix (topic_61053)
 * - Prefix Sum (topic_61068)
 *
 * Stats:
 * - Total Accepted: 139,426
 * - Total Submissions: 229,095
 * - Acceptance Rate: 60.9%
 *
 * Similar Problems:
 * - minimum-penalty-for-a-shop (Medium)
 */

/**
 * Approach: Prefix Sum + Greedy [Space Optimized]
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[][]} grid
 * @return {number}
 */
const gridGame = (grid) => {
        const n = grid[0].length;
        let bsum = 0;
        let tsum = 0;

        for (let i = 0; i < n; i++) {
                tsum += grid[0][i];
        }

        let res = tsum;

        for (let i = 0; i < n; i++) {
                tsum -= grid[0][i];
                res = Math.min(res, Math.max(tsum, bsum));
                bsum += grid[1][i];
        }

        return res;
};

/**
 * Approach: Prefix Sum + Greedy
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[][]} grid
 * @return {number}
 */
const gridGame1 = (grid) => {
        const n = grid[0].length;
        const tpre = new Float64Array(n);
        const bsuf = new Float64Array(n);

        for (let l = 0, r = n - 1; l < n; l++, r--) {
                tpre[l] = grid[0][l] + (tpre[l - 1] ?? 0);
                bsuf[r] = grid[1][r] + (bsuf[r + 1] ?? 0);
        }

        const mxr = tpre[n - 1];
        const mxl = bsuf[0];
        let res = tpre[n - 1];

        for (let i = 0; i < n; i++) {
                res = Math.min(res, Math.max(mxr - tpre[i], mxl - bsuf[i]));
        }

        return res;
};

export { gridGame, gridGame1 };
