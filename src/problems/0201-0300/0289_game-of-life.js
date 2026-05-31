/**
 * 0289. Game of Life
 *
 * Link: https://leetcode.com/problems/game-of-life/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-21
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Matrix (topic_61053)
 * - Simulation (topic_61055)
 *
 * Stats:
 * - Total Accepted: 642,544
 * - Total Submissions: 884,662
 * - Acceptance Rate: 72.6%
 *
 * Similar Problems:
 * - set-matrix-zeroes (Medium)
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n * m)
 * Space Complexity: O(1) auxiliary, O(n * m) total
 * `n` = `grid.length`, `m` = `grid[0].length`
 *
 * @param {number[][]} board
 * @return {void}
 */
const gameOfLife = (board) => {
        const n = board.length;
        const m = board[0].length;
        const d = [-1, 0, 1, 0, -1, -1, 1, 1, -1];

        for (let y = 0; y < n; y++) {
                for (let x = 0; x < m; x++) {
                        const c = board[y][x];
                        let cnt = 0;

                        for (let i = 0; i < 8; i++) {
                                const ny = y + d[i];
                                const nx = x + d[i + 1];

                                if (ny < 0 || ny >= n || nx < 0 || nx >= m) {
                                        continue;
                                }

                                cnt += Math.abs(board[ny][nx]) === 1;
                        }

                        if (c === 1) {
                                if (cnt < 2 || cnt > 3) {
                                        board[y][x] = -1;
                                }
                        } else {
                                if (cnt === 3) {
                                        board[y][x] = 2;
                                }
                        }
                }
        }

        for (let y = 0; y < n; y++) {
                for (let x = 0; x < m; x++) {
                        const c = board[y][x];

                        if (c === -1) {
                                board[y][x] = 0;
                        } else if (c === 2) {
                                board[y][x] = 1;
                        }
                }
        }
};

export { gameOfLife };
