/**
 * 0778. Swim in Rising Water
 *
 * Link: https://leetcode.com/problems/swim-in-rising-water/
 * Category: Algorithms
 * Difficulty: Hard
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
 * - Total Accepted: 374,718
 * - Total Submissions: 553,208
 * - Acceptance Rate: 67.7%
 *
 * Similar Problems:
 * - path-with-minimum-effort (Medium)
 */

import { MinPriorityQueue } from '@datastructures-js/priority-queue';
import { Queue } from '@datastructures-js/queue';

/**
 * Approach: Dijkstra's Algorithm
 * Time Complexity: O(n^2 log n^2) = O(n^2 log n)
 * Space Complexity: O(n^2)
 *
 * @param {number[][]} grid
 * @return {number}
 */
const swimInWater = (grid) => {
        const n = grid.length;
        const visited = Array.from({ length: n }, () => new Array(n).fill(0));
        const minq = new MinPriorityQueue((e) => e[0], [[grid[0][0], 0, 0]]);
        visited[0][0] = 1;
        const dirs = [
                [-1, 0],
                [0, 1],
                [1, 0],
                [0, -1],
        ];

        while (minq.size()) {
                const [time, y, x] = minq.dequeue();

                if (y === n - 1 && x === n - 1) {
                        return time;
                }

                for (const [dy, dx] of dirs) {
                        const ny = y + dy;
                        const nx = x + dx;

                        if (visited[ny]?.[nx] === 0) {
                                visited[ny][nx] = 1;
                                const newTime = Math.max(time, grid[ny][nx]);
                                minq.enqueue([newTime, ny, nx]);
                        }
                }
        }

        return -1;
};

/**
 * Approach: Binary Search + BFS
 * Time Complexity: O(n^2 log (max - min))
 * Space Complexity: O(n^2)
 * `n` = length of `grid`, `max` = maximum value of `grid[i][j]`, `min` = minimum value of `grid[i][j]`
 *
 * @param {number[][]} grid
 * @return {number}
 */
const swimInWater1 = (grid) => {
        const n = grid.length;
        const visited = Array.from({ length: n }, () => new Array(n).fill(0));

        const bfs = (t) => {
                if (grid[0][0] > t || grid[n - 1][n - 1] > t) {
                        return false;
                }

                const q = new Queue([[0, 0]]);
                visited[0][0] = 1;
                const dirs = [
                        [-1, 0],
                        [0, 1],
                        [1, 0],
                        [0, -1],
                ];

                while (q.size()) {
                        const [y, x] = q.dequeue();

                        if (y === n - 1 && x === n - 1) {
                                return true;
                        }

                        for (const [dy, dx] of dirs) {
                                const ny = y + dy;
                                const nx = x + dx;

                                if (grid[ny]?.[nx] <= t && !visited[ny][nx]) {
                                        q.enqueue([ny, nx]);
                                        visited[ny][nx] = 1;
                                }
                        }
                }

                return false;
        };

        let max = -1;
        let min = grid[0][0];

        for (let y = 0; y < n; y++) {
                for (let x = 0; x < n; x++) {
                        const val = grid[y][x];
                        max = Math.max(max, val);
                        min = Math.min(min, val);
                }
        }

        let ok = max;
        let ng = min - 1;

        while (Math.abs(ok - ng) > 1) {
                const m = (ok + ng) >> 1;

                if (bfs(m)) {
                        ok = m;
                } else {
                        ng = m;
                }

                for (let y = 0; y < n; y++) {
                        for (let x = 0; x < n; x++) {
                                visited[y][x] = 0;
                        }
                }
        }

        return ok;
};

export { swimInWater, swimInWater1 };
