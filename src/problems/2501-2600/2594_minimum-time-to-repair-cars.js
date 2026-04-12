/**
 * 2594. Minimum Time to Repair Cars
 *
 * Link: https://leetcode.com/problems/minimum-time-to-repair-cars/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-12
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Binary Search (topic_11)
 *
 * Stats:
 * - Total Accepted: 155,164
 * - Total Submissions: 260,455
 * - Acceptance Rate: 59.6%
 *
 * Similar Problems:
 * - koko-eating-bananas (Medium)
 * - sort-transformed-array (Medium)
 */

/**
 * Approach: Binary Search
 * Time Complexity: O(n log (a * m^2))
 * Space Complexity: O(1)
 * `n` = length of `ranks`, `a` = minimum value in `ranks`, `m` = `cars`
 *
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
const repairCars = (ranks, cars) => {
        const check = (minutes) => {
                let repaired = 0;

                for (const rank of ranks) {
                        repaired += Math.floor(Math.sqrt(minutes / rank));

                        if (repaired >= cars) {
                                return true;
                        }
                }

                return false;
        };

        let ok = Math.min(...ranks) * cars ** 2; // always possible
        let ng = 0; // always impossible

        while (Math.abs(ok - ng) > 1) {
                const m = ng + Math.floor((ok - ng) / 2); // right shift not viable due to overflow

                if (check(m)) {
                        ok = m;
                } else {
                        ng = m;
                }
        }

        return ok;
};

export { repairCars };
