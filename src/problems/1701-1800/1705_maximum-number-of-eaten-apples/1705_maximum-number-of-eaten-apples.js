/**
 * 1705. Maximum Number of Eaten Apples
 *
 * Link: https://leetcode.com/problems/maximum-number-of-eaten-apples/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-03
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Greedy (topic_17)
 * - Heap (Priority Queue) (topic_61050)
 * - Senior (position_senior)
 * - Weekly Contest 221 (contest_weekly-contest-221)
 *
 * Stats:
 *
 * - Total Accepted: 36,108
 * - Total Submissions: 81,744
 * - Acceptance Rate: 44.2%
 */

import { MinPriorityQueue } from '@datastructures-js/priority-queue';

/**
 * Approach: Greedy + Priority Queue
 * Time Complexity: O(n lg n)
 * Space Complexity: O(n)
 * `n` = `apples.length`
 *
 * @param {number[]} apples
 * @param {number[]} days
 * @returns {number}
 */
const eatenApples = (apples, days) => {
        const n = apples.length;
        const mnq = new MinPriorityQueue((e) => e[0]); // [expiry date, count]
        let res = 0;

        for (let day = 0; day < n || mnq.size(); day++) {
                if (apples[day] > 0) {
                        mnq.push([days[day] + day, apples[day]]);
                }

                // prune invalid apples
                while (mnq.size() && mnq.front()[0] <= day) {
                        mnq.pop();
                }

                if (!mnq.size()) {
                        continue;
                }

                const [exp, cnt] = mnq.front();
                res++;

                // only keep apple if can be eaten the next day
                if (exp > day + 1 && cnt > 1) {
                        mnq.front()[1]--;
                } else {
                        mnq.pop();
                }
        }

        return res;
};

export { eatenApples };
