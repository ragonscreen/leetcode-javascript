/**
 * 0048. Rotate Image
 *
 * Link: https://leetcode.com/problems/rotate-image/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-05
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Math (topic_8)
 * - Matrix (topic_61053)
 *
 * Stats:
 * - Total Accepted: 2,893,427
 * - Total Submissions: 3,617,497
 * - Acceptance Rate: 80.0%
 *
 * Similar Problems:
 * - determine-whether-matrix-can-be-obtained-by-rotation (Easy)
 */

/**
 * Approach: Math + Simulation
 * Time Complexity: O(n^2)
 * Space Complexity: O(1) auxiliary, O(n^2) total
 *
 * @param {number[][]} matrix
 * @return {void}
 */
const rotate = (matrix) => {
        let min = 0;
        let max = matrix.length - 1;

        while (min < max) {
                for (let i = min; i < max; i++) {
                        const pts = [
                                [i, max],
                                [max, max - i + min],
                                [max - i + min, min],
                                [min, i],
                        ];

                        let val = matrix[min][i];

                        for (const [y, x] of pts) {
                                const tmp = matrix[y][x];
                                matrix[y][x] = val;
                                val = tmp;
                        }
                }

                min++;
                max--;
        }
};

export { rotate };
