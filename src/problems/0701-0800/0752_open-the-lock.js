/**
 * 0752. Open the Lock
 *
 * Link: https://leetcode.com/problems/open-the-lock/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-30
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - String (topic_10)
 * - Breadth-First Search (topic_22)
 *
 * Stats:
 * - Total Accepted: 405,462
 * - Total Submissions: 661,802
 * - Acceptance Rate: 61.3%
 *
 * Similar Problems:
 * - reachable-nodes-with-restrictions (Medium)
 */

import { Queue } from '@datastructures-js/queue';

/**
 * Approach: BFS
 * Time Complexity: O(4 * (m + 10^4)) = O(4 * 10^4) (as m <= 10^4) = O(1)
 * Space Complexity: O(4 * (m + 10^4)) = O(4 * 10^4) (as m <= 10^4) = O(1)
 * `m` = length of `deadends`
 *
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
const openLock = (deadends, target) => {
        const visited = new Set(deadends);

        if (visited.has('0000') || visited.has(target)) {
                return -1;
        }

        const q = new Queue(['0000']);
        visited.add('0000');
        let res = 0;

        while (q.size()) {
                const sz = q.size();

                for (let i = 0; i < sz; i++) {
                        const state = q.dequeue();

                        if (state === target) {
                                return res;
                        }

                        for (let j = 0; j < 4; j++) {
                                for (const dx of [1, -1]) {
                                        const v = (+state[j] + dx + 10) % 10;
                                        const s = `${state.slice(0, j)}${v}${state.slice(j + 1)}`;

                                        if (!visited.has(s)) {
                                                q.enqueue(s);
                                                visited.add(s);
                                        }
                                }
                        }
                }

                res++;
        }

        return -1;
};

export { openLock };
