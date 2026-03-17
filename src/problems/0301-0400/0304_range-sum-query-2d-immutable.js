/**
 * 0304. Range Sum Query 2D - Immutable
 *
 * Link: https://leetcode.com/problems/range-sum-query-2d-immutable/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-02-16
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Design (topic_25)
 * - Matrix (topic_61053)
 * - Prefix Sum (topic_61068)
 *
 * Stats:
 * - Total Accepted: 472,787
 * - Total Submissions: 815,557
 * - Acceptance Rate: 58.0%
 *
 * Similar Problems:
 * - range-sum-query-immutable (Easy)
 * - find-the-grid-of-region-average (Medium)
 * - range-sum-query-2d-mutable (Medium)
 */

/**
 * Approach: Math + Prefix Sum
 */
class NumMatrix {
        /**
         * Time Complexity: O(n * m)
         * Space Complexity: O(n * m)
         * `n` = length of `matrix`, `m` = length of each column in `matrix`
         *
         * @param {number[][]} matrix
         */
        constructor(matrix) {
                this.pre = [];

                for (let r = 0; r < matrix.length; r++) {
                        const rowPre = [];
                        let sum = 0;

                        for (let c = 0; c < matrix[r].length; c++) {
                                sum += matrix[r][c];
                                const total = sum + (this.pre[r - 1]?.[c] ?? 0);
                                rowPre.push(total);
                        }

                        this.pre.push(rowPre);
                }
        }

        /**
         * Time Complexity: O(1)
         * Space Complexity: O(1)
         *
         * @param {number} row1
         * @param {number} col1
         * @param {number} row2
         * @param {number} col2
         * @return {number}
         */
        sumRegion(row1, col1, row2, col2) {
                const a = this.pre[row1 - 1]?.[col1 - 1] ?? 0;
                const b = this.pre[row1 - 1]?.[col2] ?? 0;
                const c = this.pre[row2][col1 - 1] ?? 0;
                const d = this.pre[row2][col2];

                return a + d - (b + c);
        }
}

export { NumMatrix };
