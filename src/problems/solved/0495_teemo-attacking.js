/**
 * 0495. Teemo Attacking
 * Link: https://leetcode.com/problems/teemo-attacking/
 * Difficulty: Easy
 * Date: 2026-03-08
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Simulation
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
