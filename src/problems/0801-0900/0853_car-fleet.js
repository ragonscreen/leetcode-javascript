/**
 * 0853. Car Fleet
 *
 * Link: https://leetcode.com/problems/car-fleet/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-01-12
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Stack (topic_15)
 * - Sorting (topic_61049)
 * - Monotonic Stack (topic_61054)
 *
 * Stats:
 * - Total Accepted: 472,647
 * - Total Submissions: 861,964
 * - Acceptance Rate: 54.8%
 *
 * Similar Problems:
 * - count-collisions-on-a-road (Medium)
 * - car-fleet-ii (Hard)
 */

/**
 * Approach: Counting Sort
 * Time Complexity: O(max(n, m))
 * Space Complexity: O(n)
 * `n` = `target`, `m` = length of `position`
 *
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
const carFleet = (target, position, speed) => {
        const cars = new Array(target).fill(null);

        for (let i = 0; i < position.length; i++) {
                const p = position[i];
                const time = (target - p) / speed[i];
                cars[p] = time;
        }

        let fleets = 0;
        let slowest = 0;

        for (let i = cars.length - 1; i >= 0; i--) {
                const car = cars[i];

                if (car && car > slowest) {
                        fleets++;
                        slowest = car;
                }
        }

        return fleets;
};

export { carFleet };
