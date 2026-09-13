/**
 * 835. Image Overlap
 *
 * Link: https://leetcode.com/problems/image-overlap/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-14
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Matrix (topic_61053)
 * - Senior Staff (position_senior-staff)
 * - Weekly Contest 84 (contest_weekly-contest-84)
 *
 * Stats:
 *
 * - Total Accepted: 171,660
 * - Total Submissions: 245,853
 * - Acceptance Rate: 69.8%
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n^4)
 * Space Complexity: O(1)
 * `n` = `img1.length`
 *
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @returns {number}
 */
const largestOverlap = (img1, img2) => {
        const n = img1.length;

        const count = (y0, x0) => {
                let res = 0;

                for (let y = Math.max(y0, 0); y < n; y++) {
                        for (let x = Math.max(x0, 0); x < n; x++) {
                                const yy = y - y0;
                                const xx = x - x0;

                                if (yy >= n || xx >= n) continue;

                                res += img1[y][x] && img2[yy][xx];
                        }
                }

                return res;
        };

        let res = 0;

        for (let y = 1 - n; y < n; y++)
                for (let x = 1 - n; x < n; x++) res = Math.max(res, count(y, x));

        return res;
};

export { largestOverlap };
