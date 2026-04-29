/**
 * 1306. Jump Game III
 *
 * Link: https://leetcode.com/problems/jump-game-iii/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-30
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Depth-First Search (topic_21)
 * - Breadth-First Search (topic_22)
 *
 * Stats:
 * - Total Accepted: 300,504
 * - Total Submissions: 449,653
 * - Acceptance Rate: 66.8%
 *
 * Similar Problems:
 * - jump-game (Medium)
 * - jump-game-ii (Medium)
 * - jump-game-vii (Medium)
 * - jump-game-viii (Medium)
 * - maximum-number-of-jumps-to-reach-the-last-index (Medium)
 */

import { Queue } from '@datastructures-js/queue';

/**
 * Approach: DFS
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
const canReach = (arr, start) => {
        const dfs = (i) => {
                if (i < 0 || i >= arr.length || arr[i] < 0) {
                        return false;
                }

                if (arr[i] === 0) {
                        return true;
                }

                const dist = arr[i];
                arr[i] = -1;

                return dfs(i + dist) || dfs(i - dist);
        };

        return dfs(start);
};

/**
 * Approach: BFS
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
const canReach1 = (arr, start) => {
        const n = arr.length;
        const q = new Queue([start]);
        const visited = new Uint8Array(n);
        visited[start] = 1;

        while (q.size()) {
                const i = q.dequeue();
                const dist = arr[i];

                if (dist === 0) {
                        return true;
                }

                for (const dx of [dist, -dist]) {
                        const nx = i + dx;

                        if (nx >= n || nx < 0) {
                                continue;
                        }

                        if (!visited[nx]) {
                                q.enqueue(nx);
                                visited[nx] = 1;
                        }
                }
        }

        return false;
};

export { canReach, canReach1 };
