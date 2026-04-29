/**
 * 1345. Jump Game IV
 *
 * Link: https://leetcode.com/problems/jump-game-iv/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-04-30
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Breadth-First Search (topic_22)
 *
 * Stats:
 * - Total Accepted: 164,032
 * - Total Submissions: 354,325
 * - Acceptance Rate: 46.3%
 *
 * Similar Problems:
 * - jump-game-vii (Medium)
 * - jump-game-viii (Medium)
 * - maximum-number-of-jumps-to-reach-the-last-index (Medium)
 */

import { Queue } from '@datastructures-js/queue';

/**
 * Approach: BFS
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} arr
 * @return {number}
 */
const minJumps = (arr) => {
        const n = arr.length;
        const map = new Map();

        for (let i = 0; i < n; i++) {
                const num = arr[i];

                if (!map.has(num)) {
                        map.set(num, []);
                }

                map.get(num).push(i);
        }

        const q = new Queue([0]);
        const visited = new Uint8Array(n);
        visited[0] = 1;
        let res = 0;

        while (q.size()) {
                const sz = q.size();

                for (let i = 0; i < sz; i++) {
                        const j = q.dequeue();

                        if (j === n - 1) {
                                return res;
                        }

                        const val = arr[j];
                        const indices = map.get(val) ?? [];
                        indices.push(j + 1, j - 1);
                        map.delete(val);

                        for (let l = indices.length - 1; l > -1; l--) {
                                const k = indices[l];

                                if (k < 0 || k >= n || k === j) {
                                        continue;
                                }

                                if (!visited[k]) {
                                        q.enqueue(k);
                                        visited[k] = 1;
                                }
                        }
                }

                res++;
        }

        return -1;
};

export { minJumps };
