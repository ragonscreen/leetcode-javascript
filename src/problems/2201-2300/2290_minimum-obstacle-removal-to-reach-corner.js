/**
 * 2290. Minimum Obstacle Removal to Reach Corner
 *
 * Link: https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-05-28
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
 * - Weekly Contest 295 (contest_weekly-contest-295)
 *
 * Stats:
 * - Total Accepted: 124,439
 * - Total Submissions: 176,093
 * - Acceptance Rate: 70.7%
 *
 * Similar Problems:
 * - shortest-path-in-a-grid-with-obstacles-elimination (Hard)
 */

import { MinPriorityQueue } from '@datastructures-js/priority-queue';

/**
 * Approach: 0-1 BFS [Deque]
 * Time Complexity: O(n * m)
 * Space Complexity: O(n * m)
 * `n` = `grid.length`, `m` = `grid[0].length`
 *
 * @param {number[][]} grid
 * @return {number}
 */
const minimumObstacles = (grid) => {
        const n = grid.length;
        const m = grid[0].length;
        const sz = n * m;
        const d = [-1, 0, 1, 0, -1];
        const dq = new Uint32Array(sz * 2);
        let li = sz;
        let ri = sz + 1;
        const dist = new Uint32Array(sz).fill(-1);
        dist[0] = 0;

        while (li < ri) {
                const k = dq[li++];
                const y = 0 | (k / m);
                const x = k % m;
                const cur = dist[k];

                for (let i = 0; i < 4; i++) {
                        const ny = y + d[i];
                        const nx = x + d[i + 1];

                        if (ny < 0 || ny >= n || nx < 0 || nx >= m) {
                                continue;
                        }

                        const cost = grid[ny][nx];
                        const newCost = cur + cost;
                        const nk = m * ny + nx;

                        if (newCost >= dist[nk]) {
                                continue;
                        }

                        dist[nk] = newCost;

                        if (cost === 0) {
                                dq[--li] = nk;
                        } else {
                                dq[ri++] = nk;
                        }
                }
        }

        return dist.at(-1);
};

/**
 * Approach: 0-1 BFS [Two Stacks]
 * Time Complexity: O(n * m)
 * Space Complexity: O(n * m)
 * `n` = `grid.length`, `m` = `grid[0].length`
 *
 * @param {number[][]} grid
 * @return {number}
 */
const minimumObstacles1 = (grid) => {
        const n = grid.length;
        const m = grid[0].length;
        const sz = n * m;
        const d = [-1, 0, 1, 0, -1];
        grid[0][0] = -1;
        let q0 = [0];
        let q1 = [];
        let res = 0;

        while (q0.length + q1.length) {
                if (!q0.length) {
                        res++;
                        [q0, q1] = [q1, q0];
                }

                const k = q0.pop();

                if (k === sz - 1) {
                        return res;
                }

                const y = 0 | (k / m);
                const x = k % m;

                for (let i = 0; i < 4; i++) {
                        const ny = y + d[i];
                        const nx = x + d[i + 1];
                        const nk = m * ny + nx;

                        if (
                                ny < 0 ||
                                ny >= n ||
                                nx < 0 ||
                                nx >= m ||
                                grid[ny][nx] === -1
                        ) {
                                continue;
                        }

                        const cost = grid[ny][nx];
                        grid[ny][nx] = -1;

                        if (cost === 0) {
                                q0.push(nk);
                        } else {
                                q1.push(nk);
                        }
                }
        }
};

/**
 * Approach: Dijkstra's Algorithm
 * Time Complexity: O(n * m * lg (n * m))
 * Space Complexity: O(n * m)
 * `n` = `grid.length`, `m` = `grid[0].length`
 *
 * @param {number[][]} grid
 * @return {number}
 */
const minimumObstacles2 = (grid) => {
        const n = grid.length;
        const m = grid[0].length;
        const sz = n * m;
        const d = [-1, 0, 1, 0, -1];
        const minq = new MinPriorityQueue((e) => e[0], [[0, 0]]);
        const dist = new Uint32Array(sz).fill(-1);

        while (minq.size()) {
                const [cost, k] = minq.dequeue();

                if (cost > dist[k]) {
                        continue;
                }

                if (k === sz - 1) {
                        return cost;
                }

                const y = 0 | (k / m);
                const x = k % m;

                for (let i = 0; i < 4; i++) {
                        const ny = y + d[i];
                        const nx = x + d[i + 1];

                        if (ny < 0 || ny >= n || nx < 0 || nx >= m) {
                                continue;
                        }

                        const newCost = cost + grid[ny][nx];
                        const nk = m * ny + nx;

                        if (dist[nk] > newCost) {
                                dist[nk] = newCost;
                                minq.enqueue([newCost, nk]);
                        }
                }
        }
};

export { minimumObstacles, minimumObstacles1, minimumObstacles2 };
