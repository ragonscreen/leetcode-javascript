/**
 * 0815. Bus Routes
 *
 * Link: https://leetcode.com/problems/bus-routes/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-05-01
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Breadth-First Search (topic_22)
 *
 * Stats:
 * - Total Accepted: 289,508
 * - Total Submissions: 612,364
 * - Acceptance Rate: 47.3%
 *
 * Similar Problems:
 * - minimum-costs-using-the-train-line (Hard)
 */

import { MinPriorityQueue } from '@datastructures-js/priority-queue';

/**
 * Approach: BFS
 * Time Complexity: O(k + k log k) = O(k log k)
 * Space Complexity: O(k + n + m) [O(k + n)] since `m` is bounded by `k`
 * `n` = length of `routes`, `k` = total number of stops, `m` = maximum value across all stops
 *
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
const numBusesToDestination = (routes, source, target) => {
        if (source === target) {
                return 0;
        }

        const n = routes.length;
        const graph = new Map();
        let max = -1;

        for (let i = 0; i < n; i++) {
                for (const stop of routes[i]) {
                        max = Math.max(max, stop);

                        if (!graph.has(stop)) {
                                graph.set(stop, []);
                        }

                        graph.get(stop).push(i);
                }
        }

        const visitedIdx = new Uint8Array(n);
        const dists = new Uint16Array(max + 1).fill(-1); // fill with INF
        const minq = new MinPriorityQueue((e) => e[0], [[0, source, -1]]); // [dist, stop, stopIdx]
        dists[source] = 0;

        while (minq.size()) {
                const [dist, stop, stopIdx] = minq.dequeue();
                const possibleIdx = graph.get(stop) ?? [];
                graph.delete(stop);

                for (const i of possibleIdx) {
                        if (visitedIdx[i]) {
                                continue;
                        }

                        visitedIdx[i] = 1;
                        const newDist = dist + (i !== stopIdx);

                        for (const route of routes[i]) {
                                if (dists[route] <= newDist) {
                                        continue;
                                }

                                if (route === target) {
                                        return newDist;
                                }

                                minq.enqueue([newDist, route, i]);
                                dists[route] = newDist;
                        }
                }
        }

        return -1;
};

export { numBusesToDestination };
