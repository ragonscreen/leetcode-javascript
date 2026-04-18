/**
 * 1572. Matrix Diagonal Sum
 *
 * Link: https://leetcode.com/problems/matrix-diagonal-sum/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-04-18
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Matrix (topic_61053)
 *
 * Stats:
 * - Total Accepted: 520,479
 * - Total Submissions: 617,999
 * - Acceptance Rate: 84.2%
 *
 * Similar Problems:
 * - check-if-every-row-and-column-contains-all-numbers (Easy)
 * - check-if-matrix-is-x-matrix (Easy)
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[][]} mat
 * @return {number}
 */
const diagonalSum = (mat) => {
        const n = mat.length;
        let s1 = 0;
        let s2 = 0;

        for (let i = 0; i < n; i++) {
                s1 += mat[i][i];
                s2 += mat[i][n - 1 - i];
        }

        let sum = s1 + s2;

        if (n % 2) {
                const m = n >> 1;
                sum -= mat[m][m];
        }

        return sum;
};

export { diagonalSum };
