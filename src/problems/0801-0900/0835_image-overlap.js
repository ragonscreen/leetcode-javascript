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
        let res = 0;

        for (let y0 = 1 - n; y0 < n; y0++) {
                const ystart = Math.max(y0, 0);

                for (let x0 = 1 - n; x0 < n; x0++) {
                        const xstart = Math.max(x0, 0);
                        let cnt = 0;

                        for (let y1 = ystart; y1 < n; y1++) {
                                const y2 = y1 - y0;

                                if (y2 >= n) break;

                                for (let x1 = xstart; x1 < n; x1++) {
                                        const x2 = x1 - x0;

                                        if (x2 >= n) break;

                                        cnt += img1[y1][x1] && img2[y2][x2];
                                }
                        }

                        res = Math.max(res, cnt);
                }
        }

        return res;
};

export { largestOverlap };
