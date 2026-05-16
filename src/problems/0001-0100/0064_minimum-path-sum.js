/**
 * 0064. Minimum Path Sum
 *
 * Link: https://leetcode.com/problems/minimum-path-sum/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-16
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Dynamic Programming (topic_13)
 * - Matrix (topic_61053)
 *
 * Stats:
 * - Total Accepted: 1,858,523
 * - Total Submissions: 2,724,722
 * - Acceptance Rate: 68.2%
 *
 * Similar Problems:
 * - check-if-there-is-a-path-with-equal-number-of-0s-and-1s (Medium)
 * - maximum-number-of-points-with-cost (Medium)
 * - minimum-cost-homecoming-of-a-robot-in-a-grid (Medium)
 * - minimum-cost-of-a-path-with-special-roads (Medium)
 * - minimum-path-cost-in-a-grid (Medium)
 * - unique-paths (Medium)
 * - cherry-pickup (Hard)
 * - dungeon-game (Hard)
 * - paths-in-matrix-whose-sum-is-divisible-by-k (Hard)
 */

import { MinPriorityQueue } from '@datastructures-js/priority-queue';

/**
 * Approach: Dynamic Programming
 * Time Complexity: O(n * m)
 * Space Complexity: O(n * m)
 *
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = (grid) => {
        const n = grid.length;
        const m = grid[0].length;
        const p = (y, x) => m * y + x;
        const dp = new Uint32Array(n * m).fill(-1);
        dp[0] = grid[0][0];

        for (let y = 0; y < n; y++) {
                for (let x = 0; x < m; x++) {
                        if (y === 0 && x === 0) {
                                continue;
                        }

                        const p1 = p(y - 1, x);
                        const p2 = p(y, x - 1);
                        const min = Math.min(dp[p1], dp[p2]);
                        const val = x === 0 ? dp[p1] : y === 0 ? dp[p2] : min;
                        dp[p(y, x)] = val + grid[y][x];
                }
        }

        return dp.at(-1);
};

/**
 * Approach: Dijkstra's Algorithm
 * Time Complexity: O(n * m * log (n * m))
 * Space Complexity: O(n * m)
 *
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum1 = (grid) => {
        const n = grid.length;
        const m = grid[0].length;
        const p = (y, x) => m * y + x;
        const u = (k) => [0 | (k / m), k % m];
        const sz = n * m;
        const start = grid[0][0];
        const minq = new MinPriorityQueue((e) => e[0]);
        minq.enqueue([start, 0]);
        const dist = new Uint32Array(sz).fill(-1);
        dist[0] = start;
        const d = [
                [0, 1],
                [1, 0],
        ];

        while (minq.size()) {
                const [cost, pt] = minq.dequeue();

                if (pt === sz - 1) {
                        return cost;
                }

                if (dist[pt] < cost) {
                        continue;
                }

                const [y, x] = u(pt);

                for (const [dy, dx] of d) {
                        const ny = y + dy;
                        const nx = x + dx;

                        if (ny >= n || nx >= m) {
                                continue;
                        }

                        const newCost = cost + grid[ny][nx];
                        const k = p(ny, nx);

                        if (dist[k] > newCost) {
                                dist[k] = newCost;
                                minq.enqueue([newCost, k]);
                        }
                }
        }
};

export { minPathSum, minPathSum1 };
