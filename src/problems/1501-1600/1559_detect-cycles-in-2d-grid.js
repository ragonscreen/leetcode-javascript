/**
 * 1559. Detect Cycles in 2D Grid
 *
 * Link: https://leetcode.com/problems/detect-cycles-in-2d-grid/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-27
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
 * - Total Accepted: 124,260
 * - Total Submissions: 199,685
 * - Acceptance Rate: 62.2%
 */

import { Queue } from '@datastructures-js/queue';

/**
 * Approach: BFS
 * Time Complexity: O(n * m * 4) = O(n * m)
 * Space Complexity: O(n * m)
 *
 * @param {character[][]} grid
 * @return {boolean}
 */
const containsCycle = (grid) => {
        const n = grid.length;
        const m = grid[0].length;
        const d = [
                [-1, 0],
                [0, 1],
                [1, 0],
                [0, -1],
        ];

        const visited = Array.from({ length: n }, () =>
                new Uint8Array(m).fill(0),
        );

        const bfs = (val, y0, x0) => {
                // tracking path length is not necessary because
                // a min length of 4 will always be required to revisit
                // the starting cell of a cycle, since we cannot travel diagonally
                const q = new Queue([[y0, x0, -1, -1]]); // [y, x, yLast, xLast]
                visited[y0][x0] = 1;

                while (q.size()) {
                        const [y, x, yLast, xLast] = q.dequeue();

                        for (const [dy, dx] of d) {
                                const ny = y + dy;
                                const nx = x + dx;

                                if (ny < 0 || ny >= n || nx < 0 || nx >= m) {
                                        continue;
                                }

                                if (grid[ny][nx] !== val) {
                                        continue;
                                }

                                if (ny === yLast && nx === xLast) {
                                        continue;
                                }

                                if (visited[ny][nx]) {
                                        return true;
                                }

                                q.enqueue([ny, nx, y, x]);
                                visited[ny][nx] = 1;
                        }
                }

                return false;
        };

        for (let y = 0; y < n; y++) {
                for (let x = 0; x < m; x++) {
                        if (visited[y][x]) {
                                continue;
                        }

                        if (bfs(grid[y][x], y, x)) {
                                return true;
                        }
                }
        }

        return false;
};

export { containsCycle };
