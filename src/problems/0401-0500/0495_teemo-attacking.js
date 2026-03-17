/**
 * 0495. Teemo Attacking
 *
 * Link: https://leetcode.com/problems/teemo-attacking/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-03-08
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Simulation (topic_61055)
 *
 * Stats:
 * - Total Accepted: 217,612
 * - Total Submissions: 378,139
 * - Acceptance Rate: 57.5%
 *
 * Similar Problems:
 * - can-place-flowers (Easy)
 * - dota2-senate (Medium)
 * - merge-intervals (Medium)
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
const findPoisonedDuration = (timeSeries, duration) => {
        let res = 0;
        let currT = -1;

        for (const t of timeSeries) {
                const wastedDur = currT - t;

                if (wastedDur > 0) {
                        res -= wastedDur;
                }

                res += duration;
                currT = t + duration;
        }

        return res;
};

export { findPoisonedDuration };
