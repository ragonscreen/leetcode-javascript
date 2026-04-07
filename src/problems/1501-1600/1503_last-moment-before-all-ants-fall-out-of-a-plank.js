/**
 * 1503. Last Moment Before All Ants Fall Out of a Plank
 *
 * Link: https://leetcode.com/problems/last-moment-before-all-ants-fall-out-of-a-plank/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-07
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Brainteaser (topic_32)
 * - Simulation (topic_61055)
 *
 * Stats:
 * - Total Accepted: 99,202
 * - Total Submissions: 145,513
 * - Acceptance Rate: 68.2%
 *
 * Similar Problems:
 * - count-collisions-on-a-road (Medium)
 * - movement-of-robots (Medium)
 */

/**
 * Approach: Math
 * Time Complexity: O(n + m)
 * Space Complexity: O(1)
 * `n` = length of `left`, `m` = length of `right`
 *
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
const getLastMoment = (n, left, right) => {
        const maxRight = n - Math.min(...right);
        const maxLeft = Math.max(...left);

        return Math.max(maxLeft, maxRight);
};

export { getLastMoment };
