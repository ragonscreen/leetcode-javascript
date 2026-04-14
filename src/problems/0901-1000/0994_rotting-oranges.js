/**
 * 0994. Rotting Oranges
 *
 * Link: https://leetcode.com/problems/rotting-oranges/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-14
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Breadth-First Search (topic_22)
 * - Matrix (topic_61053)
 *
 * Stats:
 * - Total Accepted: 1,622,442
 * - Total Submissions: 2,775,296
 * - Acceptance Rate: 58.5%
 *
 * Similar Problems:
 * - battleships-in-a-board (Medium)
 * - detonate-the-maximum-bombs (Medium)
 * - walls-and-gates (Medium)
 * - escape-the-spreading-fire (Hard)
 */

import { Queue } from '@datastructures-js/queue';

/**
 * Approach: BFS
 * Time Complexity: O(n * m)
 * Space Complexity: O(n * m)
 *
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = (grid) => {
        const n = grid.length;
        const m = grid[0].length;
        const q = new Queue();
        let countFresh = 0;

        for (let r = 0; r < n; r++) {
                for (let c = 0; c < m; c++) {
                        const v = grid[r][c];

                        if (v === 1) {
                                countFresh++;
                        }

                        if (v === 2) {
                                q.enqueue([r, c]);
                        }
                }
        }

        if (!countFresh) {
                return 0;
        }

        const dirs = [
                [-1, 0],
                [0, 1],
                [1, 0],
                [0, -1],
        ];

        let res = -1;

        while (q.size()) {
                res++;
                const size = q.size();

                for (let i = 0; i < size; i++) {
                        const [y, x] = q.dequeue();

                        for (const [dy, dx] of dirs) {
                                const ny = y + dy;
                                const nx = x + dx;

                                if (grid[ny]?.[nx] === 1) {
                                        q.enqueue([ny, nx]);
                                        grid[ny][nx] = 2;
                                        countFresh--;
                                }
                        }
                }
        }

        return countFresh ? -1 : res;
};

export { orangesRotting };
