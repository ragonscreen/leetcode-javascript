/**
 * 2812. Find the Safest Path in a Grid
 *
 * Link: https://leetcode.com/problems/find-the-safest-path-in-a-grid/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-08-03
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Binary Search (topic_11)
 * - Breadth-First Search (topic_22)
 * - Union-Find (topic_23)
 * - Heap (Priority Queue) (topic_61050)
 * - Matrix (topic_61053)
 * - Staff (position_staff)
 * - Weekly Contest 357 (contest_weekly-contest-357)
 *
 * Stats:
 * - Total Accepted: 204,868
 * - Total Submissions: 357,469
 * - Acceptance Rate: 57.3%
 *
 * Similar Problems:
 * - path-with-minimum-effort (Medium)
 */

/**
 * Approach: BFS + Binary Search
 * Time Complexity: O(n * m * lg (n * m))
 * Space Complexity: O(n * m)
 * `n` = `grid.length`, `m` = `grid[0].length`
 *
 * @param {number[][]} grid
 * @return {number}
 */
const maximumSafenessFactor = (grid) => {
        const n = grid.length;
        const m = grid[0].length;
        const sz = n * m;
        const d = [-1, 0, 1, 0, -1];
        const p = (y, x) => m * y + x;

        if (grid[0][0] === 1 || grid[n - 1][m - 1] === 1) {
                return 0;
        }

        const dist = new Int32Array(sz).fill(-1);
        const q = new Int32Array(sz);
        let qe = 0;

        for (let y = 0; y < n; y++) {
                for (let x = 0; x < n; x++) {
                        if (grid[y][x] === 1) {
                                const k = p(y, x);
                                dist[k] = 0;
                                q[qe++] = k;
                        }
                }
        }

        let qf = 0;
        let mxDis = 0;

        while (qf < qe) {
                const k = q[qf++];
                const y = 0 | (k / m);
                const x = k % m;
                const dis = dist[k] + 1;

                for (let di = 0; di < 4; di++) {
                        const ny = y + d[di];
                        const nx = x + d[di + 1];

                        if (ny < 0 || ny >= n || nx < 0 || nx >= n) {
                                continue;
                        }

                        const nk = p(ny, nx);

                        if (dist[nk] !== -1) {
                                continue;
                        }

                        dist[nk] = dis;
                        q[qe++] = nk;
                        mxDis = Math.max(mxDis, dis);
                }
        }

        const v = new Uint8Array(sz);
        q.fill(0);

        const check = (val) => {
                if (dist[0] < val || dist[sz - 1] < val) {
                        return false;
                }

                v.fill(0);
                qf = 0;
                qe = 0;
                q[qe++] = 0;
                v[0] = 1;

                while (qf < qe) {
                        const k = q[qf++];

                        if (k === sz - 1) {
                                return true;
                        }

                        const y = 0 | (k / m);
                        const x = k % m;

                        for (let di = 0; di < 4; di++) {
                                const ny = y + d[di];
                                const nx = x + d[di + 1];

                                if (ny < 0 || nx < 0 || ny >= n || nx >= m) {
                                        continue;
                                }

                                const nk = p(ny, nx);

                                if (v[nk]) {
                                        continue;
                                }

                                if (dist[nk] >= val) {
                                        v[nk] = 1;
                                        q[qe++] = nk;
                                }
                        }
                }
        };

        let ok = 0;
        let ng = mxDis + 1;

        while (Math.abs(ok - ng) > 1) {
                const mid = (ok + ng) >> 1;

                if (check(mid)) {
                        ok = mid;
                } else {
                        ng = mid;
                }
        }

        return ok;
};

export { maximumSafenessFactor };
