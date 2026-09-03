/**
 * 1620. Coordinate With Maximum Network Quality
 *
 * Link: https://leetcode.com/problems/coordinate-with-maximum-network-quality/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-03
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Enumeration (topic_61066)
 * - Senior (position_senior)
 * - Biweekly Contest 37 (contest_biweekly-contest-37)
 *
 * Stats:
 *
 * - Total Accepted: 12,296
 * - Total Submissions: 30,679
 * - Acceptance Rate: 40.1%
 */

/**
 * Approach: Simulation
 * Time Complexity: O(X * Y * n)
 * Space Complexity: O(1)
 * `X` = `max(towers[i][0])`, `Y` = `max(towers[i][1])`
 * `n` = `towers.length`
 *
 * @param {number[][]} towers
 * @param {number} radius
 * @returns {number[]}
 */
const bestCoordinate = (towers, radius) => {
        const r2 = radius ** 2;
        let res = [0, 0];
        let mxv = -1;

        // For every negative coord with quality `q` there must be at least one
        // non-negative coord with quality `q' > q` since tower coordinates are
        // all non-negative. Thus, we never need to consider negative results
        for (let x = 0; x < 51; x++) {
                for (let y = 0; y < 51; y++) {
                        let val = 0;

                        for (const [xx, yy, q] of towers) {
                                const d2 = (xx - x) ** 2 + (yy - y) ** 2;

                                if (d2 <= r2) {
                                        val += Math.floor(q / (1 + Math.sqrt(d2)));
                                }
                        }

                        // Iterate grid in [x, y] increasing order so coords are
                        // checked in lex order.
                        if (val > mxv) {
                                mxv = val;
                                res = [x, y];
                        }
                }
        }

        return res;
};

export { bestCoordinate };
