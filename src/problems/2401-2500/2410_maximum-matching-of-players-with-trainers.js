/**
 * 2410. Maximum Matching of Players With Trainers
 *
 * Link: https://leetcode.com/problems/maximum-matching-of-players-with-trainers/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-26
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Two Pointers (topic_9)
 * - Greedy (topic_17)
 * - Sorting (topic_61049)
 *
 * Stats:
 * - Total Accepted: 183,657
 * - Total Submissions: 244,021
 * - Acceptance Rate: 75.3%
 *
 * Similar Problems:
 * - long-pressed-name (Easy)
 * - interval-list-intersections (Medium)
 * - largest-merge-of-two-strings (Medium)
 * - maximize-greatness-of-an-array (Medium)
 * - most-profit-assigning-work (Medium)
 * - successful-pairs-of-spells-and-potions (Medium)
 * - the-latest-time-to-catch-a-bus (Medium)
 * - maximum-number-of-tasks-you-can-assign (Hard)
 */

/**
 * Approach: Sorting + Greedy + Two Pointers
 * Time Complexity: O(n log n)
 * Space Complexity: O(1) auxiliary, O(n) for sorting
 *
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
const matchPlayersAndTrainers = (players, trainers) => {
        players.sort((a, b) => b - a);
        trainers.sort((a, b) => b - a);
        let res = 0;

        for (const p of players) {
                res += p <= trainers[res];
        }

        return res;
};

export { matchPlayersAndTrainers };
