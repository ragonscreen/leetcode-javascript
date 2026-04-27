/**
 * 1391. Check if There is a Valid Path in a Grid
 *
 * Link: https://leetcode.com/problems/check-if-there-is-a-valid-path-in-a-grid/
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
 * - Total Accepted: 62,024
 * - Total Submissions: 107,048
 * - Acceptance Rate: 57.9%
 *
 * Similar Problems:
 * - check-if-there-is-a-valid-parentheses-string-path (Hard)
 */

import { Queue } from '@datastructures-js/queue';

/**
 * Approach: BFS
 * Time Complexity: O(n * m)
 * Space Complexity: O(n * m)
 * `n` = length of `grid`, `m` = length of `grid[0]`
 *
 * @param {number[][]} grid
 * @return {boolean}
 */
const hasValidPath = (grid) => {
        const n = grid.length;
        const m = grid[0].length;
        const visited = Array.from({ length: n }, () => new Uint8Array(m));
        visited[0][0] = 1;
        const q = new Queue([[0, 0]]);

        const links = [
                undefined,
                ['L', 'R'],
                ['U', 'D'],
                ['L', 'D'],
                ['R', 'D'],
                ['L', 'U'],
                ['R', 'U'],
        ];

        const op = {
                U: 'D',
                R: 'L',
                D: 'U',
                L: 'R',
        };

        const map = {
                U: [-1, 0],
                R: [0, 1],
                D: [1, 0],
                L: [0, -1],
        };

        while (q.size()) {
                const [y, x] = q.dequeue();

                if (y === n - 1 && x === m - 1) {
                        return true;
                }

                const dirs = links[grid[y][x]];

                for (const dir of dirs) {
                        const [dy, dx] = map[dir];
                        const ny = y + dy;
                        const nx = x + dx;

                        if (ny < 0 || ny >= n || nx < 0 || nx >= m) {
                                continue;
                        }

                        let newDir;

                        if (ny === y) {
                                newDir = nx > x ? 'R' : 'L';
                        } else {
                                newDir = ny > y ? 'D' : 'U';
                        }

                        // each street can take from the opposite
                        // directions that it can send to
                        const valid = links[grid[ny][nx]].some(
                                (e) => op[e] === newDir,
                        );

                        if (valid && !visited[ny][nx]) {
                                q.enqueue([ny, nx]);
                                visited[ny][nx] = 1;
                        }
                }
        }

        return false;
};

export { hasValidPath };
