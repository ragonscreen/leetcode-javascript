/**
 * 0807. Max Increase to Keep City Skyline
 *
 * Link: https://leetcode.com/problems/max-increase-to-keep-city-skyline/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-07
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Greedy (topic_17)
 * - Matrix (topic_61053)
 *
 * Stats:
 * - Total Accepted: 189,244
 * - Total Submissions: 219,003
 * - Acceptance Rate: 86.4%
 */

/**
 * Approach: Greedy
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 *
 * @param {number[][]} grid
 * @return {number}
 */
const maxIncreaseKeepingSkyline = (grid) => {
        const n = grid.length;
        const rmaxs = new Uint8Array(n);
        const cmaxs = new Uint8Array(n);

        for (let y = 0; y < n; y++) {
                for (let x = 0; x < n; x++) {
                        const v = grid[y][x];
                        rmaxs[y] = Math.max(rmaxs[y], v);
                        cmaxs[x] = Math.max(cmaxs[x], v);
                }
        }

        let res = 0;

        for (let y = 0; y < n; y++) {
                for (let x = 0; x < n; x++) {
                        res += Math.min(rmaxs[y], cmaxs[x]) - grid[y][x];
                }
        }

        return res;
};

export { maxIncreaseKeepingSkyline };
