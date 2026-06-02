/**
 * 0419. Battleships in a Board
 *
 * Link: https://leetcode.com/problems/battleships-in-a-board/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-06-02
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Depth-First Search (topic_21)
 * - Matrix (topic_61053)
 *
 * Stats:
 * - Total Accepted: 286,687
 * - Total Submissions: 369,699
 * - Acceptance Rate: 77.5%
 *
 * Similar Problems:
 * - max-area-of-island (Medium)
 * - number-of-islands (Medium)
 * - rotting-oranges (Medium)
 * - walls-and-gates (Medium) (Premium)
 */

/**
 * Approach: Simulation [II]
 * Time Complexity: O(n * m)
 * Space Complexity: O(1)
 * `n` = `board.length`, `m` = `board[0].length`
 *
 * @param {character[][]} board
 * @return {number}
 */
const countBattleships = (board) => {
        const n = board.length;
        const m = board[0].length;
        let res = 0;

        for (let y = 0; y < n; y++) {
                for (let x = 0; x < m; x++) {
                        // count only top left of every ship
                        if (
                                board[y][x] === 'X' &&
                                board[y - 1]?.[x] !== 'X' &&
                                board[y][x - 1] !== 'X'
                        ) {
                                res++;
                        }
                }
        }

        return res;
};

/**
 * Approach: Simulation [I]
 * Time Complexity: O(n * m)
 * Space Complexity: O(1)
 * `n` = `board.length`, `m` = `board[0].length`
 *
 * @param {character[][]} board
 * @return {number}
 */
const countBattleships1 = (board) => {
        const n = board.length;
        const m = board[0].length;
        let res = 0;

        // count len >= 2 horizontals
        for (let y = 0; y < n; y++) {
                const row = board[y];

                for (let x = 0; x < m; x++) {
                        if (row[x] === 'X' && row[x + 1] === 'X') {
                                res++;

                                while (x < m && row[x] === 'X') {
                                        x++;
                                }
                        }
                }
        }

        // count singles and len >= 2 verticals
        for (let x = 0; x < m; x++) {
                for (let y = 0; y < n; y++) {
                        const cell = board[y][x];

                        if (cell !== 'X') {
                                continue;
                        }

                        const r = board[y][x + 1];
                        const l = board[y][x - 1];

                        if (r !== 'X' && l !== 'X') {
                                res++;

                                while (y < n && board[y][x] === 'X') {
                                        y++;
                                }
                        }
                }
        }

        return res;
};

export { countBattleships, countBattleships1 };
