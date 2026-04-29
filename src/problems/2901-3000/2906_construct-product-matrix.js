/**
 * 2906. Construct Product Matrix
 *
 * Link: https://leetcode.com/problems/construct-product-matrix/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-30
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Matrix (topic_61053)
 * - Prefix Sum (topic_61068)
 *
 * Stats:
 * - Total Accepted: 104,065
 * - Total Submissions: 201,077
 * - Acceptance Rate: 51.8%
 *
 * Similar Problems:
 * - product-of-array-except-self (Medium)
 */

/**
 * Approach: Prefix Sum
 * Time Complexity: O(n * m)
 * Space Complexity: O(1) auxiliary, O(n * m) total
 *
 * @param {number[][]} grid
 * @return {number[][]}
 */
const constructProductMatrix = (grid) => {
        const n = grid.length;
        const m = grid[0].length;
        const mod = 12_345;
        const pre = Array.from({ length: n }, () => new Array(m));
        let mult = 1;

        for (let y = 0; y < n; y++) {
                for (let x = 0; x < m; x++) {
                        pre[y][x] = mult;
                        mult = (mult * grid[y][x]) % mod;
                }
        }

        mult = 1;

        for (let y = n - 1; y > -1; y--) {
                for (let x = m - 1; x > -1; x--) {
                        pre[y][x] = (pre[y][x] * mult) % mod;
                        mult = (mult * grid[y][x]) % mod;
                }
        }

        return pre;
};

export { constructProductMatrix };
