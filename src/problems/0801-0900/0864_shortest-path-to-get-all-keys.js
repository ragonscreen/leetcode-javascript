/**
 * 0864. Shortest Path to Get All Keys
 *
 * Link: https://leetcode.com/problems/shortest-path-to-get-all-keys/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-04-18
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Bit Manipulation (topic_19)
 * - Breadth-First Search (topic_22)
 * - Matrix (topic_61053)
 *
 * Stats:
 * - Total Accepted: 95,416
 * - Total Submissions: 175,081
 * - Acceptance Rate: 54.5%
 */

import { Queue } from '@datastructures-js/queue';

/**
 * Approach: BFS
 * Time Complexity: O(n * m * 2^k)
 * Space Complexity: O(n * m * 2^k)
 * `n` = length of `grid`, `m` = length of `grid[0]`, `k` = number of keys in `grid`
 *
 * @param {string[]} grid
 * @return {number}
 */
const shortestPathAllKeys = (grid) => {
        const n = grid.length;
        const m = grid[0].length;
        const a = 'a'.charCodeAt();
        const A = 'A'.charCodeAt();
        let y0 = 0;
        let x0 = 0;
        let keysNeeded = 0;

        for (let y = 0; y < n; y++) {
                for (let x = 0; x < m; x++) {
                        const c = grid[y][x];

                        if (c === '@') {
                                y0 = y;
                                x0 = x;
                        }

                        if (c >= 'a' && c <= 'f') {
                                const key = 2 ** (c.charCodeAt() - a);
                                keysNeeded |= key;
                        }
                }
        }

        const q = new Queue([[0, y0, x0]]); // [keys, startY, startX]
        const visited = new Set([`${0}-${y0}-${x0}`]);
        const dirs = [
                [-1, 0],
                [0, 1],
                [1, 0],
                [0, -1],
        ];

        let res = 0;

        while (q.size()) {
                const size = q.size();
                res++;

                for (let i = 0; i < size; i++) {
                        const [keys, y, x] = q.dequeue();

                        for (const [dy, dx] of dirs) {
                                const ny = y + dy;
                                const nx = x + dx;

                                // out of bounds
                                if (ny < 0 || ny >= n || nx < 0 || nx >= m) {
                                        continue;
                                }

                                const c = grid[ny][nx];

                                // wall
                                if (c === '#') {
                                        continue;
                                }

                                // lock
                                if (c >= 'A' && c <= 'F') {
                                        const lock = 2 ** (c.charCodeAt() - A);

                                        // don't have this lock's key -> cannot go over lock
                                        if ((keys | lock) !== keys) {
                                                continue;
                                        }
                                }

                                let newKeys = keys;

                                // key
                                if (c >= 'a' && c <= 'f') {
                                        // add key to current state
                                        const key = 2 ** (c.charCodeAt() - a);
                                        newKeys = keys | key;
                                }

                                // have all keys
                                if (newKeys === keysNeeded) {
                                        return res;
                                }

                                // save state
                                const state = `${newKeys}-${ny}-${nx}`;

                                if (!visited.has(state)) {
                                        q.enqueue([newKeys, ny, nx]);
                                        visited.add(state);
                                }
                        }
                }
        }

        return -1;
};

export { shortestPathAllKeys };
