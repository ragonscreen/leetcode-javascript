/**
 * 2126. Destroying Asteroids
 *
 * Link: https://leetcode.com/problems/destroying-asteroids/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-31
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Greedy (topic_17)
 * - Sorting (topic_61049)
 * - Staff (position_staff)
 * - Weekly Contest 274 (contest_weekly-contest-274)
 *
 * Stats:
 * - Total Accepted: 173,424
 * - Total Submissions: 290,169
 * - Acceptance Rate: 59.8%
 *
 * Similar Problems:
 * - asteroid-collision (Medium)
 */

/**
 * Approach: Sorting + Greedy
 * Time Complexity: O(n lg n)
 * Space Complexity: O(1) auxiliary, O(n) for sorting
 *
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
const asteroidsDestroyed = (mass, asteroids) => {
        asteroids.sort((a, b) => a - b);

        for (let i = 0; i < asteroids.length; i++) {
                const num = asteroids[i];

                if (num > mass) {
                        return false;
                }

                mass += num;
        }

        return true;
};

export { asteroidsDestroyed };
