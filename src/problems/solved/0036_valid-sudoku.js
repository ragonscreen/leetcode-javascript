/**
 * 0036. Valid Sudoku
 * Link: https://leetcode.com/problems/valid-sudoku/
 * Difficulty: Medium
 * Date: 2025-12-15
 * Author: ragonscreen
 */

/**
 * Implementation: Hash Set
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 *
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board) => {
        const set = new Set();

        for (let r = 0; r < 9; r++) {
                for (let c = 0; c < 9; c++) {
                        const s = board[r][c];

                        if (s === '.') {
                                continue;
                        }

                        const b = 3 * Math.floor(r / 3) + Math.floor(c / 3);
                        const keyR = `r${r}:${s}`;
                        const keyC = `c${c}:${s}`;
                        const keyB = `b${b}:${s}`;

                        if (set.has(keyR) || set.has(keyC) || set.has(keyB)) {
                                return false;
                        }

                        set.add(keyR).add(keyC).add(keyB);
                }
        }

        return true;
};

export default isValidSudoku;
