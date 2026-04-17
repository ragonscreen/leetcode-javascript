/**
 * 1631. Path With Minimum Effort
 *
 * Link: https://leetcode.com/problems/path-with-minimum-effort/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-17
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Binary Search (topic_11)
 * - Depth-First Search (topic_21)
 * - Breadth-First Search (topic_22)
 * - Union-Find (topic_23)
 * - Heap (Priority Queue) (topic_61050)
 * - Matrix (topic_61053)
 *
 * Stats:
 * - Total Accepted: 455,149
 * - Total Submissions: 721,856
 * - Acceptance Rate: 63.1%
 *
 * Similar Problems:
 * - find-the-safest-path-in-a-grid (Medium)
 * - path-with-maximum-minimum-value (Medium)
 * - swim-in-rising-water (Hard)
 */

import { MinPriorityQueue } from '@datastructures-js/priority-queue';
import { Queue } from '@datastructures-js/queue';

/**
 * Approach: Dijkstra's Algorithm
 * Time Complexity: O(n * m log (n * m))
 * Space Complexity: O(n * m)
 *
 * @param {number[][]} heights
 * @return {number}
 */
const minimumEffortPath = (heights) => {
        const n = heights.length;
        const m = heights[0].length;
        const minq = new MinPriorityQueue((e) => e[0], [[0, 0, 0]]);
        const bestEfforts = Array.from({ length: n }, () =>
                new Array(m).fill(Number.MAX_SAFE_INTEGER),
        );
        bestEfforts[0][0] = 0;
        const dirs = [
                [-1, 0],
                [0, 1],
                [1, 0],
                [0, -1],
        ];

        while (minq.size()) {
                const [effort, y, x] = minq.dequeue();

                // outdated path - already have better path to this cell
                if (effort > bestEfforts[y][x]) {
                        continue;
                }

                if (y === n - 1 && x === m - 1) {
                        return effort;
                }

                for (const [dy, dx] of dirs) {
                        const ny = y + dy;
                        const nx = x + dx;

                        if (ny > -1 && ny < n && nx > -1 && nx < m) {
                                const newEffort = Math.max(
                                        effort,
                                        Math.abs(
                                                heights[y][x] - heights[ny][nx],
                                        ),
                                );

                                if (newEffort < bestEfforts[ny][nx]) {
                                        bestEfforts[ny][nx] = newEffort;
                                        minq.enqueue([newEffort, ny, nx]);
                                }
                        }
                }
        }
};

/**
 * Approach: Binary Search + BFS
 * Time Complexity: O(n * m log max)
 * Space Complexity: O(n * m)
 * `n` = length of `grid`, `m` = length of `grid[i]`, `max` = maximum value of `grid[i][j]`
 *
 * @param {number[][]} heights
 * @return {number}
 */
const minimumEffortPath1 = (heights) => {
        const n = heights.length;
        const m = heights[0].length;
        const visited = Array.from({ length: n }, () => new Array(m).fill(0));

        const bfs = (e) => {
                const q = new Queue([[0, 0]]);
                const dirs = [
                        [-1, 0],
                        [0, 1],
                        [1, 0],
                        [0, -1],
                ];

                while (q.size()) {
                        const [y, x] = q.dequeue();

                        if (y === n - 1 && x === m - 1) {
                                return true;
                        }

                        for (const [dy, dx] of dirs) {
                                const ny = y + dy;
                                const nx = x + dx;

                                if (
                                        Math.abs(
                                                heights[ny]?.[nx] -
                                                        heights[y][x],
                                        ) <= e &&
                                        !visited[ny][nx]
                                ) {
                                        q.enqueue([ny, nx]);
                                        visited[ny][nx] = 1;
                                }
                        }
                }

                return false;
        };

        let max = -1;

        for (let y = 0; y < n; y++) {
                for (let x = 0; x < m; x++) {
                        max = Math.max(max, heights[y][x]);
                }
        }

        let ok = max;
        let ng = -1;

        while (Math.abs(ok - ng) > 1) {
                const mid = (ok + ng) >> 1;

                if (bfs(mid)) {
                        ok = mid;
                } else {
                        ng = mid;
                }

                for (let y = 0; y < n; y++) {
                        for (let x = 0; x < m; x++) {
                                visited[y][x] = 0;
                        }
                }
        }

        return ok;
};

export { minimumEffortPath, minimumEffortPath1 };
