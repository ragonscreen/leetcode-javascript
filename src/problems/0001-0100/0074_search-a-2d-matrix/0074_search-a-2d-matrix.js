/**
 * 74. Search a 2D Matrix
 *
 * Link: https://leetcode.com/problems/search-a-2d-matrix/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-02 (Updated: 2026-11-12)
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Binary Search (topic_11)
 * - Matrix (topic_61053)
 *
 * Stats:
 *
 * - Total Accepted: 2,839,746
 * - Total Submissions: 5,285,487
 * - Acceptance Rate: 53.7%
 *
 * Similar Problems:
 *
 * - search-a-2d-matrix-ii (Medium)
 * - split-message-based-on-limit (Hard)
 */

/**
 * Approach: Binary Search [II]
 * Time Complexity: O(lg (n * m))
 * Space Complexity: O(1)
 * `n` = `matrix.length`, `m` = `matrix[i].length`
 *
 * While the asymptotic time complexity of both Binary Search [I] and [II] is the same, [II] ends up
 * being faster in practice because it does not use the division or modulus division operators.
 *
 * @param {number[][]} matrix
 * @param {number} target
 * @returns {boolean}
 */
const searchMatrix = (matrix, target) => {
        const n = matrix.length;
        const m = matrix[0].length;

        if (target < matrix[0][0] || target > matrix[n - 1][m - 1]) return false;

        let ok = 0;
        let ng = n;

        while (ng - ok > 1) {
                const mid = (ok + ng) >> 1;

                if (matrix[mid][0] <= target) ok = mid;
                else ng = mid;
        }

        const row = matrix[ok];
        ok = 0;
        ng = m;

        while (ng - ok > 1) {
                const mid = (ok + ng) >> 1;

                if (row[mid] <= target) ok = mid;
                else ng = mid;
        }

        return row[ok] === target;
};

/**
 * Approach: Binary Search [I]
 * Time Complexity: O(lg (n * m))
 * Space Complexity: O(1)
 * `n` = `matrix.length`, `m` = `matrix[i].length`
 *
 * @param {number[][]} matrix
 * @param {number} target
 * @returns {boolean}
 */
const searchMatrix1 = (matrix, target) => {
        const n = matrix.length;
        const m = matrix[0].length;

        if (target < matrix[0][0] || target > matrix[n - 1][m - 1]) return false;

        let ok = 0;
        let ng = n * m;

        while (ng - ok > 1) {
                const mid = (ng + ok) >> 1;
                const y = 0 | (mid / m);
                const x = mid % m;

                if (matrix[y][x] <= target) ok = mid;
                else ng = mid;
        }

        return matrix[0 | (ok / m)][ok % m] === target;
};

export { searchMatrix, searchMatrix1 };
