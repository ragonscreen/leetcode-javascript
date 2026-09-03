/**
 * 1344. Angle Between Hands of a Clock
 *
 * Link: https://leetcode.com/problems/angle-between-hands-of-a-clock/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-06-18
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Math (topic_8)
 * - Staff (position_staff)
 * - Biweekly Contest 19 (contest_biweekly-contest-19)
 *
 * Stats:
 *
 * - Total Accepted: 272,251
 * - Total Submissions: 390,761
 * - Acceptance Rate: 69.7%
 */

/**
 * Approach: Math
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 *
 * @param {number} hour
 * @param {number} minutes
 * @returns {number}
 */
const angleClock = (hour, minutes) => {
        const d = Math.abs(hour * 30 - minutes * 5.5);

        return Math.min(d, 360 - d);
};

export { angleClock };
