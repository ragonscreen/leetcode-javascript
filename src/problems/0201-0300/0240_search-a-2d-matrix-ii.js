/**
 * 0240. Search a 2D Matrix II
 *
 * Link: https://leetcode.com/problems/search-a-2d-matrix-ii/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-02
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Binary Search (topic_11)
 * - Divide and Conquer (topic_12)
 * - Matrix (topic_61053)
 *
 * Stats:
 * - Total Accepted: 1,356,360
 * - Total Submissions: 2,377,797
 * - Acceptance Rate: 57.0%
 *
 * Similar Problems:
 * - search-a-2d-matrix (Medium)
 */

/**
 * Approach: Linear Scan [Optimal]
 * Time Complexity: O(n + m)
 * Space Complexity: O(1)
 * `n` = length of `matrix`, `m` = length of `matrix[i]`
 *
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
        const n = matrix.length;
        const m = matrix[0].length;
        let j = 0;

        for (let i = n - 1; i >= 0; i--) {
                while (j < m && target > matrix[i][j]) {
                        j++;
                }

                if (j === m) {
                        return false;
                }

                if (matrix[i][j] === target) {
                        return true;
                }
        }

        return false;
};

/**
 * Approach: Binary Search
 * Time Complexity: O(n + m)
 * Space Complexity: O(1)
 * `n` = length of `matrix`, `m` = length of `matrix[i]`
 *
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix1 = (matrix, target) => {
        const n = matrix.length;
        const m = matrix[0].length;
        let l = 0;

        for (let i = n - 1; i >= 0; i--) {
                const row = matrix[i];
                let r = m - 1;

                while (l <= r) {
                        const mid = l + Math.floor((r - l) / 2);
                        const val = row[mid];

                        if (val < target) {
                                l = mid + 1;
                        } else if (val > target) {
                                r = mid - 1;
                        } else {
                                return true;
                        }
                }
        }

        return false;
};

export { searchMatrix, searchMatrix1 };
