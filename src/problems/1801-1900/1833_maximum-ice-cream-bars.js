/**
 * 1833. Maximum Ice Cream Bars
 *
 * Link: https://leetcode.com/problems/maximum-ice-cream-bars/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-06-23
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Greedy (topic_17)
 * - Sorting (topic_61049)
 * - Counting Sort (topic_61072)
 * - Senior (position_senior)
 * - Weekly Contest 237 (contest_weekly-contest-237)
 *
 * Stats:
 * - Total Accepted: 338,935
 * - Total Submissions: 438,864
 * - Acceptance Rate: 77.2%
 */

/**
 * Approach: Counting Sort
 * Time Complexity: O(n + k)
 * Space Complexity: O(k)
 * `n` = `costs.length`, `k` = `max(costs[i])`
 *
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
const maxIceCream = (costs, coins) => {
        const mx = Math.max(...costs) + 1;
        const cnts = new Uint32Array(mx);

        for (let i = 0; i < costs.length; i++) {
                cnts[costs[i]]++;
        }

        let res = 0;

        for (let cost = 1; cost < mx && coins >= cost; cost++) {
                const have = cnts[cost];

                if (have === 0) {
                        continue;
                }

                const cnt = Math.min(have, Math.floor(coins / cost));
                res += cnt;
                coins -= cost * cnt;
        }

        return res;
};

export { maxIceCream };
