/**
 * 2658. Maximum Number of Fish in a Grid
 *
 * Link: https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-19
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Depth-First Search (topic_21)
 * - Breadth-First Search (topic_22)
 * - Union-Find (topic_23)
 * - Matrix (topic_61053)
 *
 * Stats:
 * - Total Accepted: 163,269
 * - Total Submissions: 231,441
 * - Acceptance Rate: 70.5%
 *
 * Similar Problems:
 * - max-area-of-island (Medium)
 * - number-of-islands (Medium)
 */

import { Queue } from '@datastructures-js/queue';

/**
 * Approach: BFS
 * Time Complexity: O(n * m)
 * Space Complexity: O(1) auxiliary, O(n * m) total
 *
 * @param {number[][]} grid
 * @return {number}
 */
const findMaxFish = (grid) => {
        const n = grid.length;
        const m = grid[0].length;
        const dirs = [
                [-1, 0],
                [0, 1],
                [1, 0],
                [0, -1],
        ];

        const bfs = (y0, x0) => {
                const q = new Queue([[y0, x0]]);
                let res = grid[y0][x0];
                grid[y0][x0] = 0;

                while (q.size()) {
                        const [y, x] = q.dequeue();

                        for (const [dy, dx] of dirs) {
                                const ny = y + dy;
                                const nx = x + dx;

                                if (!grid[ny]?.[nx]) {
                                        continue;
                                }

                                res += grid[ny][nx];
                                grid[ny][nx] = 0;
                                q.enqueue([ny, nx]);
                        }
                }

                return res;
        };

        let res = 0;

        for (let y = 0; y < n; y++) {
                for (let x = 0; x < m; x++) {
                        if (grid[y][x]) {
                                res = Math.max(res, bfs(y, x));
                        }
                }
        }

        return res;
};

export { findMaxFish };
