/**
 * 240. Search a 2D Matrix II
 *
 * Link: https://leetcode.com/problems/search-a-2d-matrix-ii/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-02 (Updated: 2026-11-12)
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Binary Search (topic_11)
 * - Divide and Conquer (topic_12)
 * - Matrix (topic_61053)
 *
 * Stats:
 *
 * - Total Accepted: 1,356,360
 * - Total Submissions: 2,377,797
 * - Acceptance Rate: 57.0%
 *
 * Similar Problems:
 *
 * - search-a-2d-matrix (Medium)
 */

/**
 * Approach: Two Pointers
 * Time Complexity: O(n + m)
 * Space Complexity: O(1)
 * `n` = `matrix.length`, `m` = `matrix[i].length`
 *
 * @param {number[][]} matrix
 * @param {number} target
 * @returns {boolean}
 */
const searchMatrix = (matrix, target) => {
        const n = matrix.length;
        const m = matrix[0].length;
        let y = n - 1;
        let x = 0;

        while (y > -1 && x < m) {
                const v = matrix[y][x];

                if (v < target) x++;
                else if (v > target) y--;
                else return true;
        }

        return false;
};

/**
 * Approach: Binary Search
 * Time Complexity: O(n + m)
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
        let ok = 0;

        for (let y = n - 1; y > -1; y--) {
                const row = matrix[y];
                let ng = m;

                while (ng - ok > 1) {
                        const mid = (ok + ng) >> 1;

                        if (row[mid] <= target) ok = mid;
                        else ng = mid;
                }

                if (row[ok] === target) return true;
        }

        return false;
};

export { searchMatrix, searchMatrix1 };
