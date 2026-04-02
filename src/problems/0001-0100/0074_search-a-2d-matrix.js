/**
 * 0074. Search a 2D Matrix
 *
 * Link: https://leetcode.com/problems/search-a-2d-matrix/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-02
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Binary Search (topic_11)
 * - Matrix (topic_61053)
 *
 * Stats:
 * - Total Accepted: 2,839,746
 * - Total Submissions: 5,285,487
 * - Acceptance Rate: 53.7%
 *
 * Similar Problems:
 * - search-a-2d-matrix-ii (Medium)
 * - split-message-based-on-limit (Hard)
 */

/**
 * Approach: Binary Search
 * Time Complexity: O(log(n * m))
 * Space Complexity: O(1)
 *
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
        const n = matrix.length;
        const m = matrix[0].length;
        let l = 0;
        let r = m * n - 1;

        while (l <= r) {
                const mid = l + Math.floor((r - l) / 2);
                const y = Math.floor(mid / m);
                const x = mid % m;
                const val = matrix[y][x];

                if (val < target) {
                        l = mid + 1;
                } else if (val > target) {
                        r = mid - 1;
                } else {
                        return true;
                }
        }

        return false;
};

export { searchMatrix };
