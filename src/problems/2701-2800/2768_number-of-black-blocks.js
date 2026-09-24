/**
 * 2768. Number of Black Blocks
 *
 * Link: https://leetcode.com/problems/number-of-black-blocks/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-24
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Enumeration (topic_61066)
 * - Staff (position_staff)
 * - Biweekly Contest 108 (contest_biweekly-contest-108)
 *
 * Stats:
 *
 * - Total Accepted: 23,679
 * - Total Submissions: 55,803
 * - Acceptance Rate: 42.4%
 */

/**
 * Approach: Simulation
 * Time Complexity: O(q)
 * Space Complexity: O(N * M)
 * `N` = `n`, `M` = `m`, `q` = `coordinates.length`
 *
 * @param {number} m
 * @param {number} n
 * @param {number[][]} coordinates
 * @returns {number[]}
 */
const countBlackBlocks = (m, n, coordinates) => {
        const map = new Map();
        const D = [0, 0, -1, -1, 0];
        const ppos = (y, x) => m * y + x;
        const mxn = n - 1;
        const mxm = m - 1;

        for (const [x, y] of coordinates) {
                for (let di = 0; di < 4; di++) {
                        const ny = y + D[di];
                        const nx = x + D[di + 1];

                        if (ny < 0 || ny === mxn || nx < 0 || nx === mxm) continue;

                        const pos = ppos(ny, nx);
                        map.set(pos, (map.get(pos) ?? 0) + 1);
                }
        }

        const res = new Float64Array(5);
        let tot = mxn * mxm;

        for (const frq of map.values()) {
                res[frq]++;
                tot--;
        }

        res[0] = tot;

        return res;
};

export { countBlackBlocks };
