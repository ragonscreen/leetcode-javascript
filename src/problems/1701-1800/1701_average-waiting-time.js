/**
 * 1701. Average Waiting Time
 *
 * Link: https://leetcode.com/problems/average-waiting-time/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-10
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Simulation (topic_61055)
 *
 * Stats:
 * - Total Accepted: 220,258
 * - Total Submissions: 301,450
 * - Acceptance Rate: 73.1%
 *
 * Similar Problems:
 * - average-height-of-buildings-in-each-segment (Medium)
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[][]} customers
 * @return {number}
 */
const averageWaitingTime = (customers) => {
        let res = 0;
        let t = customers[0][0];

        for (const [start, time] of customers) {
                t = Math.max(t, start);
                t += time;
                res += t - start;
        }

        return res / customers.length;
};

export { averageWaitingTime };
