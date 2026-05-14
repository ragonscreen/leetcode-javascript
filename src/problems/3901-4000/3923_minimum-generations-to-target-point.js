/**
 * 3923. Minimum Generations to Target Point
 *
 * Link: https://leetcode.com/problems/minimum-generations-to-target-point/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-14
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Stats:
 * - Total Accepted: 9,698
 * - Total Submissions: 22,490
 * - Acceptance Rate: 43.1%
 */

/**
 * Approach: BFS
 * Time Complexity: O((2d + 1) ^ 6) = O(d^6)
 * Space Complexity: O((2d + 1) ^ 3) = O(d^3)
 * `d` = difference between maximum and minimum value of coordinate in `points[i]`
 *
 * @param {number[][]} points
 * @param {number[]} target
 * @return {number}
 */
const minGenerations = (points, target) => {
        const p = (x, y, z) => x * 49 + y * 7 + z;

        const u = (key) => {
                let pt = key;
                const z = pt % 7;
                pt = 0 | (pt / 7);
                const y = pt % 7;
                pt = 0 | (pt / 7);
                const x = pt;

                return [x, y, z];
        };

        const n = points.length;
        const ptts = new Array(n);
        const set = new Uint8Array(343);
        let xmax = -1;
        let ymax = -1;
        let zmax = -1;
        let xmin = 7;
        let ymin = 7;
        let zmin = 7;

        for (let i = 0; i < n; i++) {
                const [x, y, z] = points[i];
                const key = p(x, y, z);
                ptts[i] = key;
                set[key] = 1;

                xmax = Math.max(xmax, x);
                ymax = Math.max(ymax, y);
                zmax = Math.max(zmax, z);
                xmin = Math.min(xmin, x);
                ymin = Math.min(ymin, y);
                zmin = Math.min(zmin, z);
        }

        const [tx, ty, tz] = target;
        const tt = p(tx, ty, tz);

        if (set[tt]) {
                return 0;
        }

        if (
                ptts.length === 1 ||
                tx > xmax ||
                ty > ymax ||
                tz > zmax ||
                tx < xmin ||
                ty < ymin ||
                tz < zmin
        ) {
                return -1;
        }

        let res = 1;

        while (true) {
                const gen = [];
                const sz = ptts.length;

                for (let i = 0; i < sz; i++) {
                        for (let j = i + 1; j < sz; j++) {
                                const [x1, y1, z1] = u(ptts[i]);
                                const [x2, y2, z2] = u(ptts[j]);

                                const cx = (x1 + x2) >> 1;
                                const cy = (y1 + y2) >> 1;
                                const cz = (z1 + z2) >> 1;

                                const key = p(cx, cy, cz);

                                if (!set[key]) {
                                        gen.push(key);
                                        set[key] = 1;

                                        if (key === tt) {
                                                return res;
                                        }
                                }
                        }
                }

                if (!gen.length) {
                        return -1;
                }

                for (const key of gen) {
                        ptts.push(key);
                }

                res++;
        }
};

export { minGenerations };
