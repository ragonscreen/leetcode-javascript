/**
 * 836. Rectangle Overlap
 *
 * Link: https://leetcode.com/problems/rectangle-overlap/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-09-14
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Math (topic_8)
 * - Geometry (topic_38)
 * - Mid Level (position_mid-level)
 * - Weekly Contest 85 (contest_weekly-contest-85)
 *
 * Stats:
 *
 * - Total Accepted: 224,126
 * - Total Submissions: 455,286
 * - Acceptance Rate: 49.2%
 *
 * Similar Problems:
 *
 * - rectangle-area (Medium)
 */

/**
 * Approach: Math [II]
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 *
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @returns {boolean}
 */
const isRectangleOverlap = (rec1, rec2) => {
        const x = Math.min(rec1[2], rec2[2]) > Math.max(rec1[0], rec2[0]);
        const y = Math.min(rec1[3], rec2[3]) > Math.max(rec1[1], rec2[1]);

        return x && y;
};

/**
 * Approach: Math [I]
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 *
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @returns {boolean}
 */
const isRectangleOverlap1 = (rec1, rec2) => {
        let [x1, y1, x2, y2] = rec1;
        const [ax, ay] = [x1, y2];
        const [bx, by] = [x2, y2];
        const [cx, cy] = [x2, y1];
        const [dx, dy] = [x1, y1];

        [x1, y1, x2, y2] = rec2;
        const [px, py] = [x1, y2];
        const [qx, qy] = [x2, y2];
        const [rx, ry] = [x2, y1];
        const [sx, sy] = [x1, y1];

        const ok1i = px < cx && py > cy;
        const ok1j = rx > ax && ry < ay;

        const ok2i = qx > dx && qy > dy;
        const ok2j = sx < bx && sy < by;

        return (ok1i && ok1j) || (ok2i && ok2j);
};

export { isRectangleOverlap, isRectangleOverlap1 };
