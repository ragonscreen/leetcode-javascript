/**
 * 3212. Count Submatrices With Equal Frequency of X and Y
 *
 * Link: https://leetcode.com/problems/count-submatrices-with-equal-frequency-of-x-and-y/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-28
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Matrix (topic_61053)
 * - Prefix Sum (topic_61068)
 *
 * Stats:
 * - Total Accepted: 107,001
 * - Total Submissions: 153,739
 * - Acceptance Rate: 69.6%
 *
 * Similar Problems:
 * - count-submatrices-with-all-ones (Medium)
 * - maximum-equal-frequency (Hard)
 */

/**
 * Approach: Prefix Sum [1D] [Optimal]
 * Time Complexity: O(n * m)
 * Space Complexity: O(m)
 *
 * @param {character[][]} grid
 * @return {number}
 */
const numberOfSubmatrices = (grid) => {
        const n = grid.length;
        const m = grid[0].length;
        const preY = new Uint16Array(m);
        const preX = new Uint16Array(m);
        let res = 0;

        for (let y = 0; y < n; y++) {
                for (let x = 0, cntY = 0, cntX = 0; x < m; x++) {
                        const c = grid[y][x];
                        preY[x] += c === 'Y';
                        preX[x] += c === 'X';
                        cntY += preY[x];
                        cntX += preX[x];
                        res += cntX && cntX === cntY;
                }
        }

        return res;
};

/**
 * Approach: Prefix Sum [2D]
 * Time Complexity: O(n * m) = O(n * m)
 * Space Complexity: O(n * m * 2) = O(n * m)
 *
 * @param {character[][]} grid
 * @return {number}
 */
const numberOfSubmatrices1 = (grid) => {
        const n = grid.length;
        const m = grid[0].length;
        const pre = Array.from({ length: n }, () => new Array(m));
        let res = 0;

        for (let y = 0; y < n; y++) {
                let rowY = 0;
                let rowX = 0;

                for (let x = 0; x < m; x++) {
                        const [prevY, prevX] = pre[y - 1]?.[x] ?? [0, 0];
                        rowY += grid[y][x] === 'Y';
                        rowX += grid[y][x] === 'X';
                        const cntY = rowY + prevY;
                        const cntX = rowX + prevX;
                        pre[y][x] = [cntY, cntX];
                        res += cntX && cntY === cntX;
                }
        }

        return res;
};

export { numberOfSubmatrices, numberOfSubmatrices1 };
