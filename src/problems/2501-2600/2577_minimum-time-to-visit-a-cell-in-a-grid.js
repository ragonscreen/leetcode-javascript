/**
 * 2577. Minimum Time to Visit a Cell In a Grid
 *
 * Link: https://leetcode.com/problems/minimum-time-to-visit-a-cell-in-a-grid/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-05-07 (Updated: 2026-05-28)
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Breadth-First Search (topic_22)
 * - Graph Theory (topic_24)
 * - Heap (Priority Queue) (topic_61050)
 * - Matrix (topic_61053)
 * - Shortest Path (topic_61076)
 * - Senior Staff (position_senior-staff)
 * - Weekly Contest 334 (contest_weekly-contest-334)
 *
 * Stats:
 * - Total Accepted: 88,536
 * - Total Submissions: 157,366
 * - Acceptance Rate: 56.3%
 *
 * Similar Problems:
 * - find-minimum-time-to-reach-last-room-i (Medium)
 * - find-minimum-time-to-reach-last-room-ii (Medium)
 */

import { MinPriorityQueue } from '@datastructures-js/priority-queue';

/**
 * Approach: Dijkstra's Algorithm
 * Time Complexity: O(n * m * lg (n * m))
 * Space Complexity: O(n * m)
 *
 * @param {number[][]} grid
 * @return {number}
 */
const minimumTime = (grid) => {
        // cannot move back and forth if first move is invalid
        if (grid[0][1] > 1 && grid[1][0] > 1) {
                return -1;
        }

        const n = grid.length;
        const m = grid[0].length;
        const sz = n * m;
        const p = (y, x) => m * y + x;
        const u = (k) => [0 | (k / m), k % m];
        const dist = new Uint32Array(sz).fill(-1);
        dist[0] = 0;
        const minq = new MinPriorityQueue((e) => e[0], [[0, 0]]);
        const d = [-1, 0, 1, 0, -1];

        while (minq.size()) {
                const [cost, k] = minq.dequeue();
                const [y, x] = u(k);

                if (cost > dist[k]) {
                        continue;
                }

                if (k === sz - 1) {
                        return cost;
                }

                for (let i = 0; i < 4; i++) {
                        const ny = y + d[i];
                        const nx = x + d[i + 1];

                        if (ny < 0 || ny >= n || nx < 0 || nx >= m) {
                                continue;
                        }

                        const time = grid[ny][nx];
                        let newCost;

                        if (time <= cost) {
                                newCost = cost + 1;
                        } else {
                                // move back and forth between cells to kill time
                                const diff = time - cost;
                                newCost = time;
                                newCost += (diff % 2) ^ 1; // diff % 2 ? 0 : 1;
                        }

                        const nk = p(ny, nx);

                        if (dist[nk] > newCost) {
                                minq.enqueue([newCost, nk]);
                                dist[nk] = newCost;
                        }
                }
        }
};

export { minimumTime };
