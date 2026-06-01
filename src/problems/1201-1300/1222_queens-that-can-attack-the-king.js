/**
 * 1222. Queens That Can Attack the King
 *
 * Link: https://leetcode.com/problems/queens-that-can-attack-the-king/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-21
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Matrix (topic_61053)
 * - Simulation (topic_61055)
 * - Senior (position_senior)
 * - Weekly Contest 158 (contest_weekly-contest-158)
 *
 * Stats:
 * - Total Accepted: 51,912
 * - Total Submissions: 71,372
 * - Acceptance Rate: 72.7%
 *
 * Similar Problems:
 * - minimum-moves-to-capture-the-queen (Medium)
 */

/**
 * Approach: Simulation
 * Time Complexity: O(64) = O(1)
 * Space Complexity: O(64) = O(1)
 *
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
const queensAttacktheKing = (queens, king) => {
        const n = 8;
        const grid = new Uint8Array(n * n);
        const p = (y, x) => n * y + x;
        const d = [-1, 0, 1, 0, -1, -1, 1, 1, -1];

        for (let i = 0; i < queens.length; i++) {
                const [qx, qy] = queens[i];
                grid[p(qy, qx)] = 1;
        }

        const res = [];

        for (let i = 0; i < 8; i++) {
                let [x, y] = king;

                while (true) {
                        const ny = y + d[i];
                        const nx = x + d[i + 1];

                        if (ny < 0 || ny >= n || nx < 0 || nx >= n) {
                                break;
                        }

                        if (grid[p(ny, nx)]) {
                                res.push([nx, ny]);
                                break;
                        }

                        y = ny;
                        x = nx;
                }
        }

        return res;
};

export { queensAttacktheKing };
