/**
 * 0073. Set Matrix Zeroes
 *
 * Link: https://leetcode.com/problems/set-matrix-zeroes/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-14
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Matrix (topic_61053)
 *
 * Stats:
 * - Total Accepted: 2,551,559
 * - Total Submissions: 4,068,091
 * - Acceptance Rate: 62.7%
 *
 * Similar Problems:
 * - game-of-life (Medium)
 * - number-of-laser-beams-in-a-bank (Medium)
 * - remove-all-ones-with-row-and-column-flips-ii (Medium)
 * - minimum-operations-to-remove-adjacent-ones-in-matrix (Hard)
 */

/**
 * Approach: Simulation
 * Time Complexity: O(m * n)
 * Space Complexity: O(1) auxiliary, O(m + n) total
 *
 * @param {number[][]} matrix
 * @return {void}
 */
const setZeroes = (matrix) => {
        const n = matrix.length;
        const m = matrix[0].length;
        let haveZeroTopRow = false;
        let haveZeroTopCol = false;

        for (let r = 0; r < n; r++) {
                for (let c = 0; c < m; c++) {
                        if (!matrix[r][c]) {
                                if (r === 0) {
                                        haveZeroTopRow = true;
                                }

                                if (c === 0) {
                                        haveZeroTopCol = true;
                                }

                                matrix[0][c] = 'Z'; // set cell in top row
                                matrix[r][0] = 'Z'; // set cell in top col
                        }
                }
        }

        for (let r = 1; r < n; r++) {
                const isZeroRow = matrix[r][0] === 'Z';

                for (let c = 1; c < m; c++) {
                        const isZeroCol = matrix[0][c] === 'Z';

                        if (isZeroRow || isZeroCol) {
                                matrix[r][c] = 0;
                        }
                }
        }

        // set top row
        for (let c = 0; c < m; c++) {
                if (matrix[0][c] === 'Z' || haveZeroTopRow) {
                        matrix[0][c] = 0;
                }
        }

        // set top col
        for (let r = 0; r < n; r++) {
                if (matrix[r][0] === 'Z' || haveZeroTopCol) {
                        matrix[r][0] = 0;
                }
        }
};

/**
 * Approach: Simulation
 * Time Complexity: O(m * n)
 * Space Complexity: O(m + n)
 *
 * @param {number[][]} matrix
 * @return {void}
 */
const setZeroes1 = (matrix) => {
        const n = matrix.length;
        const m = matrix[0].length;
        const setRow = new Set();
        const setCol = new Set();

        for (let r = 0; r < n; r++) {
                for (let c = 0; c < m; c++) {
                        if (!matrix[r][c]) {
                                setRow.add(r);
                                setCol.add(c);
                        }
                }
        }

        for (let r = 0; r < n; r++) {
                for (let c = 0; c < m; c++) {
                        if (setRow.has(r) || setCol.has(c)) {
                                matrix[r][c] = 0;
                        }
                }
        }
};

export { setZeroes, setZeroes1 };
