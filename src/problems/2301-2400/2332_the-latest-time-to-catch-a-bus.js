/**
 * 2332. The Latest Time to Catch a Bus
 *
 * Link: https://leetcode.com/problems/the-latest-time-to-catch-a-bus/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-27
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Two Pointers (topic_9)
 * - Binary Search (topic_11)
 * - Sorting (topic_61049)
 *
 * Stats:
 * - Total Accepted: 35,778
 * - Total Submissions: 119,104
 * - Acceptance Rate: 30.0%
 *
 * Similar Problems:
 * - maximum-matching-of-players-with-trainers (Medium)
 * - minimum-speed-to-arrive-on-time (Medium)
 * - rearranging-fruits (Hard)
 * - time-taken-to-cross-the-door (Hard)
 * - time-to-cross-a-bridge (Hard)
 */

/**
 * Approach: Sorting + Greedy + Two Pointers
 * Time Complexity: O(n log n + m log m)
 * Space Complexity: O(1) auxiliary, O(n + m) total
 *
 * @param {number[]} buses
 * @param {number[]} passengers
 * @param {number} capacity
 * @return {number}
 */
const latestTimeCatchTheBus = (buses, passengers, capacity) => {
        buses.sort((a, b) => a - b);
        passengers.sort((a, b) => a - b);
        let pi = 0;
        let filled;

        for (const bus of buses) {
                filled = 0;

                while (passengers[pi] <= bus && filled < capacity) {
                        pi++;
                        filled++;
                }
        }

        // try to catch last bus
        pi--;
        let res = filled < capacity ? buses.at(-1) : passengers[pi];

        // resolve time conflicts
        while (res === passengers[pi--]) {
                res--;
        }

        return res;
};

export { latestTimeCatchTheBus };
