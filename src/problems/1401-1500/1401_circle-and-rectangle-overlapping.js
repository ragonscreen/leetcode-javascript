/**
 * 1401. Circle and Rectangle Overlapping
 *
 * Link: https://leetcode.com/problems/circle-and-rectangle-overlapping/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-24
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Math (topic_8)
 * - Geometry (topic_38)
 * - Staff (position_staff)
 * - Biweekly Contest 23 (contest_biweekly-contest-23)
 *
 * Stats:
 *
 * - Total Accepted: 107,269
 * - Total Submissions: 159,248
 * - Acceptance Rate: 67.4%
 */

/**
 * Approach: Math
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 *
 * @param {number} radius
 * @param {number} xCenter
 * @param {number} yCenter
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @returns {boolean}
 */
const checkOverlap = (radius, xCenter, yCenter, x1, y1, x2, y2) => {
        const dx = Math.max(0, x1 - xCenter, xCenter - x2);
        const dy = Math.max(0, y1 - yCenter, yCenter - y2);

        return dx ** 2 + dy ** 2 <= radius ** 2;
};

/**
 * Approach: Math
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 *
 * @param {number} radius
 * @param {number} xCenter
 * @param {number} yCenter
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @returns {boolean}
 */
const checkOverlap1 = (radius, xCenter, yCenter, x1, y1, x2, y2) => {
        const d2x =
                xCenter < x1 || xCenter > x2
                        ? Math.min((x1 - xCenter) ** 2, (x2 - xCenter) ** 2)
                        : 0;

        const d2y =
                yCenter < y1 || yCenter > y2
                        ? Math.min((y1 - yCenter) ** 2, (y2 - yCenter) ** 2)
                        : 0;

        return d2x + d2y <= radius ** 2;
};

export { checkOverlap, checkOverlap1 };
