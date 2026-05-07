/**
 * 2087. Minimum Cost Homecoming of a Robot in a Grid
 *
 * Link: https://leetcode.com/problems/minimum-cost-homecoming-of-a-robot-in-a-grid/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-07
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Greedy (topic_17)
 *
 * Stats:
 * - Total Accepted: 27,393
 * - Total Submissions: 52,925
 * - Acceptance Rate: 51.8%
 *
 * Similar Problems:
 * - bomb-enemy (Medium)
 * - check-if-there-is-a-path-with-equal-number-of-0s-and-1s (Medium)
 * - count-square-submatrices-with-all-ones (Medium)
 * - minimum-path-sum (Medium)
 * - unique-paths (Medium)
 * - paths-in-matrix-whose-sum-is-divisible-by-k (Hard)
 */

import { Queue } from '@datastructures-js/queue';

/**
 * Approach: Greedy
 * Time Complexity: O(n + m)
 * Space Complexity: O(1)
 * `n` = length of `rowCosts`, `m` = length of `colCosts`
 *
 * @param {number[]} startPos
 * @param {number[]} homePos
 * @param {number[]} rowCosts
 * @param {number[]} colCosts
 * @return {number}
 */
const minCost = (startPos, homePos, rowCosts, colCosts) => {
        let [y, x] = startPos;
        const [n, m] = homePos;
        const dy = n > y ? 1 : -1;
        const dx = m > x ? 1 : -1;
        let res = 0;

        while (y !== n) {
                y += dy;
                res += rowCosts[y];
        }

        while (x !== m) {
                x += dx;
                res += colCosts[x];
        }

        return res;
};

/**
 * Approach: BFS + Greedy
 * Time Complexity: O(n * m)
 * Space Complexity: O(n * m)
 * `n` = length of `rowCosts`, `m` = length of `colCosts`
 *
 * @param {number[]} startPos
 * @param {number[]} homePos
 * @param {number[]} rowCosts
 * @param {number[]} colCosts
 * @return {number}
 */
const minCost1 = (startPos, homePos, rowCosts, colCosts) => {
        const n = rowCosts.length;
        const m = colCosts.length;
        const d = [
                [-1, 0],
                [0, 1],
                [1, 0],
                [0, -1],
        ];
        const p = (y, x) => m * y + x;
        const u = (k) => [0 | (k / m), k % m];
        const [y0, x0] = startPos;
        const [yn, xn] = homePos;
        const k0 = p(y0, x0);
        const q = new Queue([[0, k0]]);

        while (q.size()) {
                const [cost, k] = q.dequeue();
                const [y, x] = u(k);

                if (y === homePos[0] && x === homePos[1]) {
                        return cost;
                }

                for (const [dy, dx] of d) {
                        const ny = y + dy;
                        const nx = x + dx;

                        if (ny < 0 || ny >= n || nx < 0 || nx >= m) {
                                continue;
                        }

                        if (Math.abs(ny - yn) > Math.abs(y - yn)) {
                                continue;
                        }

                        if (Math.abs(nx - xn) > Math.abs(x - xn)) {
                                continue;
                        }

                        const nk = p(ny, nx);
                        const ncost = ny === y ? colCosts[nx] : rowCosts[ny];
                        const tcost = cost + ncost;
                        q.enqueue([tcost, nk]);
                }
        }
};

/**
 * Approach: BFS [TLE]
 * Time Complexity: O(n * m)
 * Space Complexity: O(n * m)
 * `n` = length of `rowCosts`, `m` = length of `colCosts`
 *
 * @param {number[]} startPos
 * @param {number[]} homePos
 * @param {number[]} rowCosts
 * @param {number[]} colCosts
 * @return {number}
 */
const minCost2 = (startPos, homePos, rowCosts, colCosts) => {
        const n = rowCosts.length;
        const m = colCosts.length;
        const sz = n * m;
        const d = [
                [-1, 0],
                [0, 1],
                [1, 0],
                [0, -1],
        ];
        const p = (y, x) => m * y + x;
        const u = (k) => [0 | (k / m), k % m];
        const [y0, x0] = startPos;
        const k0 = p(y0, x0);
        const q = new Queue([[0, k0]]);
        const v = new Uint8Array(sz);
        v[k0] = 1;

        while (q.size()) {
                const [cost, k] = q.dequeue();
                const [y, x] = u(k);

                if (y === homePos[0] && x === homePos[1]) {
                        return cost;
                }

                for (const [dy, dx] of d) {
                        const ny = y + dy;
                        const nx = x + dx;

                        if (ny < 0 || ny >= n || nx < 0 || nx >= m) {
                                continue;
                        }

                        const nk = p(ny, nx);

                        if (v[nk]) {
                                continue;
                        }

                        const ncost = ny === y ? colCosts[nx] : rowCosts[ny];
                        const tcost = cost + ncost;
                        q.enqueue([tcost, nk]);
                        v[nk] = 1;
                }
        }
};

export { minCost, minCost1, minCost2 };
