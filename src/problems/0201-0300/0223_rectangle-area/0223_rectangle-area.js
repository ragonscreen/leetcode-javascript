/**
 * 223. Rectangle Area
 *
 * Link: https://leetcode.com/problems/rectangle-area/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-14
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Math (topic_8)
 * - Geometry (topic_38)
 *
 * Stats:
 *
 * - Total Accepted: 303,769
 * - Total Submissions: 604,056
 * - Acceptance Rate: 50.3%
 *
 * Similar Problems:
 *
 * - rectangle-overlap (Easy)
 * - find-the-largest-area-of-square-inside-two-rectangles (Medium)
 * - find-the-number-of-ways-to-place-people-i (Medium)
 * - find-the-number-of-ways-to-place-people-ii (Hard)
 */

/**
 * Approach: Math
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 *
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @returns {number}
 */
const computeArea = (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) => {
        const ow = Math.min(ax2, bx2) - Math.max(ax1, bx1);
        const ol = Math.min(ay2, by2) - Math.max(ay1, by1);
        const overlap = ow > 0 && ol > 0 ? ow * ol : 0;
        const area1 = (ax2 - ax1) * (ay2 - ay1);
        const area2 = (bx2 - bx1) * (by2 - by1);

        return area1 + area2 - overlap;
};

export { computeArea };
