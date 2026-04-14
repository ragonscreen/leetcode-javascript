/**
 * 0054. Spiral Matrix
 *
 * Link: https://leetcode.com/problems/spiral-matrix/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-14
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Matrix (topic_61053)
 * - Simulation (topic_61055)
 *
 * Stats:
 * - Total Accepted: 2,364,576
 * - Total Submissions: 4,181,522
 * - Acceptance Rate: 56.5%
 *
 * Similar Problems:
 * - spiral-matrix-ii (Medium)
 * - spiral-matrix-iii (Medium)
 * - spiral-matrix-iv (Medium)
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n * m)
 * Space Complexity: O(1) auxiliary, O(n * m) total
 *
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = (matrix) => {
        const n = matrix.length;
        const m = matrix[0].length;
        const dirs = [
                [0, 1],
                [1, 0],
                [0, -1],
                [-1, 0],
        ];

        const size = n * m;
        const res = new Array(size);
        let dir = 0;
        let y = 0;
        let x = 0;

        for (let i = 0; i < size; i++) {
                res[i] = matrix[y][x];
                matrix[y][x] = undefined;
                let [dy, dx] = dirs[dir];
                let ny = y + dy;
                let nx = x + dx;

                if (matrix[ny]?.[nx] === undefined) {
                        dir = (dir + 1) % 4;
                        [dy, dx] = dirs[dir];
                        ny = y + dy;
                        nx = x + dx;
                }

                y = ny;
                x = nx;
        }

        return res;
};

export { spiralOrder };
