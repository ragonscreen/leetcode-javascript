/**
 * 1722. Minimize Hamming Distance After Swap Operations
 *
 * Link: https://leetcode.com/problems/minimize-hamming-distance-after-swap-operations/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-21
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Depth-First Search (topic_21)
 * - Union-Find (topic_23)
 *
 * Stats:
 * - Total Accepted: 41,781
 * - Total Submissions: 69,708
 * - Acceptance Rate: 59.9%
 *
 * Similar Problems:
 * - make-lexicographically-smallest-array-by-swapping-elements (Medium)
 * - smallest-string-with-swaps (Medium)
 */

import { Queue } from '@datastructures-js/queue';

/**
 * Approach: BFS [TLE]
 * Time Complexity: O()
 * Space Complexity: O()
 *
 * @param {number[]} source
 * @param {number[]} target
 * @param {number[][]} allowedSwaps
 * @return {number}
 */
const minimumHammingDistance = (source, target, allowedSwaps) => {
        const n = source.length;
        const m = allowedSwaps.length;
        const g = new Map();

        for (let k = 0; k < m; k++) {
                const [i, j] = allowedSwaps[k];

                if (!g.has(i)) {
                        g.set(i, []);
                }

                if (!g.has(j)) {
                        g.set(j, []);
                }

                g.get(i).push(j);
                g.get(j).push(i);
        }

        const placed = new Set();

        const bfs = (val, idx) => {
                const q = new Queue(g.get(idx));

                if (val === target[idx] && !placed.has(idx)) {
                        placed.add(idx);

                        return 1;
                }

                const visited = new Set();

                while (q.size()) {
                        const i = q.dequeue();

                        for (const j of g.get(i)) {
                                if (val === target[j] && !placed.has(j)) {
                                        placed.add(j);

                                        return 1;
                                }

                                if (!visited.has(j)) {
                                        visited.add(j);
                                        q.enqueue(j);
                                }
                        }
                }

                return 0;
        };

        let res = n;

        for (let i = 0; i < n; i++) {
                res -= bfs(source[i], i);
        }

        return res;
};

/**
 * Approach: DFS [TLE]
 * Time Complexity: O()
 * Space Complexity: O()
 *
 * @param {number[]} source
 * @param {number[]} target
 * @param {number[][]} allowedSwaps
 * @return {number}
 */
const minimumHammingDistance1 = (source, target, allowedSwaps) => {
        const n = source.length;
        const m = allowedSwaps.length;
        const g = new Map();

        for (let k = 0; k < m; k++) {
                const [i, j] = allowedSwaps[k];

                if (!g.has(i)) {
                        g.set(i, []);
                }

                if (!g.has(j)) {
                        g.set(j, []);
                }

                g.get(i).push(j);
                g.get(j).push(i);
        }

        const placed = new Set();

        const dfs = (val, i, visited) => {
                if (val === target[i] && !placed.has(i)) {
                        placed.add(i);
                        return 1;
                }

                visited.add(i);

                for (const j of g.get(i) ?? []) {
                        if (visited.has(j)) {
                                continue;
                        }

                        if (dfs(val, j, visited)) {
                                return 1;
                        }
                }

                return 0;
        };

        let res = n;

        for (let i = 0; i < n; i++) {
                const visited = new Set();
                res -= dfs(source[i], i, visited);
                visited.clear();
        }

        return res;
};

export { minimumHammingDistance, minimumHammingDistance1 };
