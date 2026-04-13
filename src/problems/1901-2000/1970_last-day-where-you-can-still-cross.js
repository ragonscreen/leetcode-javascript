/**
 * 1970. Last Day Where You Can Still Cross
 *
 * Link: https://leetcode.com/problems/last-day-where-you-can-still-cross/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-04-13
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Binary Search (topic_11)
 * - Depth-First Search (topic_21)
 * - Breadth-First Search (topic_22)
 * - Union-Find (topic_23)
 * - Matrix (topic_61053)
 *
 * Stats:
 * - Total Accepted: 130,462
 * - Total Submissions: 190,038
 * - Acceptance Rate: 68.7%
 *
 * Similar Problems:
 * - bricks-falling-when-hit (Hard)
 * - escape-the-spreading-fire (Hard)
 */

import { Queue } from '@datastructures-js/queue';

/**
 * Approach: Binary Search + BFS
 * Time Complexity: O(k + n * m * log k)
 * Space Complexity: O(n * m)
 * `n` = `row`, `m` = `col`, `k` = length of `cells`
 *
 * @param {number} row
 * @param {number} col
 * @param {number[][]} cells
 * @return {number}
 */
const latestDayToCross = (row, col, cells) => {
        const grid = Array.from({ length: row }, () => new Array(col).fill(0));

        for (let i = 0; i < cells.length; i++) {
                const [r, c] = cells[i];
                grid[r - 1][c - 1] = i + 1;
        }

        const bfs = (day) => {
                const q = new Queue();
                const visited = Array.from({ length: row }, () =>
                        new Array(col).fill(false),
                );

                for (let c = 0; c < col; c++) {
                        if (grid[0]?.[c] > day) {
                                q.enqueue([0, c]);
                                visited[0][c] = true;
                        }
                }

                while (!q.isEmpty()) {
                        const [r, c] = q.dequeue();

                        if (r === row - 1) {
                                return true;
                        }

                        const pos = [
                                [r + 1, c], // down
                                [r - 1, c], // up
                                [r, c + 1], // right
                                [r, c - 1], // left
                        ];

                        for (const [_r, _c] of pos) {
                                if (grid[_r]?.[_c] > day && !visited[_r][_c]) {
                                        q.enqueue([_r, _c]);
                                        visited[_r][_c] = true;
                                }
                        }
                }

                return false;
        };

        let ok = 0; // always possible
        let ng = cells.length; // always impossible

        while (Math.abs(ok - ng) > 1) {
                const m = (ok + ng) >> 1;

                if (bfs(m)) {
                        ok = m;
                } else {
                        ng = m;
                }
        }

        return ok;
};

export { latestDayToCross };
