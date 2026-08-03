/**
 * 0994. Rotting Oranges
 *
 * Link: https://leetcode.com/problems/rotting-oranges/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-14 (Updated: 2026-08-03)
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Breadth-First Search (topic_22)
 * - Matrix (topic_61053)
 * - Staff (position_staff)
 * - Weekly Contest 124 (contest_weekly-contest-124)
 *
 * Stats:
 * - Total Accepted: 1,778,563
 * - Total Submissions: 3,004,524
 * - Acceptance Rate: 59.2%
 *
 * Similar Problems:
 * - battleships-in-a-board (Medium)
 * - detonate-the-maximum-bombs (Medium)
 * - walls-and-gates (Medium) (Premium)
 * - escape-the-spreading-fire (Hard)
 */

/**
 * Approach: BFS
 * Time Complexity: O(n * m)
 * Space Complexity: O(n * m)
 * `n` = `grid.length`, `m` = `grid[0].length`
 *
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = (grid) => {
        const n = grid.length;
        const m = grid[0].length;
        const sz = n * m;
        const p = (y, x) => m * y + x;
        const d = [-1, 0, 1, 0, -1];
        const q = new Uint8Array(sz);
        let qe = 0;
        let cnt = 0;

        for (let y = 0; y < n; y++) {
                for (let x = 0; x < m; x++) {
                        const c = grid[y][x];

                        if (c === 1) {
                                cnt++;
                        }

                        if (c === 2) {
                                q[qe++] = p(y, x);
                        }
                }
        }

        if (!cnt) {
                return 0;
        }

        let res = 0;
        let qf = 0;
        let nxt = qe;

        while (qf < qe) {
                const k = q[qf++];
                const y = 0 | (k / m);
                const x = k % m;

                for (let di = 0; di < 4; di++) {
                        const ny = y + d[di];
                        const nx = x + d[di + 1];

                        if (ny < 0 || ny >= n || nx < 0 || nx >= m) {
                                continue;
                        }

                        if (grid[ny][nx] === 1) {
                                q[qe++] = p(ny, nx);
                                grid[ny][nx] = 2;
                                cnt--;
                        }
                }

                if (qf === nxt) {
                        nxt = qe;
                        res++;
                }
        }

        return cnt ? -1 : res - 1;
};

export { orangesRotting };
