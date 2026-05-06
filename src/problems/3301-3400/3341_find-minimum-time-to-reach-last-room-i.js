/**
 * 3341. Find Minimum Time to Reach Last Room I
 *
 * Link: https://leetcode.com/problems/find-minimum-time-to-reach-last-room-i/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-07
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Graph Theory (topic_24)
 * - Heap (Priority Queue) (topic_61050)
 * - Matrix (topic_61053)
 * - Shortest Path (topic_61076)
 *
 * Stats:
 * - Total Accepted: 116,363
 * - Total Submissions: 209,895
 * - Acceptance Rate: 55.4%
 *
 * Similar Problems:
 * - minimum-cost-to-reach-destination-in-time (Hard)
 * - minimum-time-to-visit-a-cell-in-a-grid (Hard)
 */

import { MinPriorityQueue } from '@datastructures-js/priority-queue';

/**
 * Approach: Dijkstra's Algorithm
 * Time Complexity: O(n * m * lg (n * m))
 * Space Complexity: O(n * m)
 *
 * @param {number[][]} moveTime
 * @return {number}
 */
const minTimeToReach = (moveTime) => {
        const n = moveTime.length;
        const m = moveTime[0].length;
        const sz = n * m;
        const p = (y, x) => m * y + x;
        const u = (k) => [0 | (k / m), k % m];
        const dist = new Uint32Array(sz).fill(-1);
        dist[0] = 0;
        const minq = new MinPriorityQueue((e) => e[0], [[0, 0]]);
        const d = [
                [-1, 0],
                [0, 1],
                [1, 0],
                [0, -1],
        ];

        while (minq.size()) {
                const [cost, k] = minq.dequeue();
                const [y, x] = u(k);

                if (cost > dist[k]) {
                        continue;
                }

                if (k === sz - 1) {
                        return cost;
                }

                for (const [dy, dx] of d) {
                        const ny = y + dy;
                        const nx = x + dx;

                        if (ny < 0 || ny >= n || nx < 0 || nx >= m) {
                                continue;
                        }

                        const time = moveTime[ny][nx];
                        const newCost = Math.max(time, cost) + 1;
                        const nk = p(ny, nx);

                        if (dist[nk] > newCost) {
                                minq.enqueue([newCost, nk]);
                                dist[nk] = newCost;
                        }
                }
        }
};

export { minTimeToReach };
