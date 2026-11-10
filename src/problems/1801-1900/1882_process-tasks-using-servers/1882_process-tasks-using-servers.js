/**
 * 1882. Process Tasks Using Servers
 *
 * Link: https://leetcode.com/problems/process-tasks-using-servers/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-11-10
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Heap (Priority Queue) (topic_61050)
 * - Staff (position_staff)
 * - Weekly Contest 243 (contest_weekly-contest-243)
 *
 * Stats:
 *
 * - Total Accepted: 112,490
 * - Total Submissions: 212,649
 * - Acceptance Rate: 52.9%
 *
 * Similar Problems:
 *
 * - parallel-courses-iii (Hard)
 */

import { PriorityQueue } from '@datastructures-js/priority-queue';

/**
 * Approach: Priority Queue
 * Time Complexity: O((n + q) lg n)
 * Space Complexity: O(n) auxiliary, O(n + q) total
 * `n` = `servers.length`, `q` = `tasks.length`
 *
 * @param {number[]} servers
 * @param {number[]} tasks
 * @returns {number[]}
 */
const assignTasks = (servers, tasks) => {
        const q = tasks.length;
        const res = new Uint32Array(q);
        const cmpFn = (a, b) => a[1] - b[1] || a[0] - b[0];
        const pqFree = new PriorityQueue(
                cmpFn,
                servers.map((e, i) => [i, e]),
        ); // [i, w];
        const pqFull = new PriorityQueue(cmpFn); // [i, t];
        let t = 0;

        const checkFree = () => {
                while (pqFull.front()?.[1] <= t) {
                        const i = pqFull.pop()[0];
                        pqFree.push([i, servers[i]]);
                }
        };

        for (let qi = 0; qi < q; qi++) {
                t = Math.max(t, qi);
                checkFree();

                if (pqFree.isEmpty()) {
                        t = pqFull.front()[1];
                        checkFree();
                }

                const i = pqFree.pop()[0];
                res[qi] = i;
                pqFull.push([i, t + tasks[qi]]);
        }

        return res;
};

export { assignTasks };
