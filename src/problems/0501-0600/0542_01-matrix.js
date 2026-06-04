/**
 * 0542. 01 Matrix
 *
 * Link: https://leetcode.com/problems/01-matrix/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-06-04
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Dynamic Programming (topic_13)
 * - Breadth-First Search (topic_22)
 * - Matrix (topic_61053)
 * - Principal (position_principal)
 *
 * Stats:
 * - Total Accepted: 916,450
 * - Total Submissions: 1,697,513
 * - Acceptance Rate: 54.0%
 *
 * Similar Problems:
 * - difference-between-ones-and-zeros-in-row-and-column (Medium)
 * - shortest-path-to-get-food (Medium) (Premium)
 * - minimum-operations-to-remove-adjacent-ones-in-matrix (Hard) (Premium)
 */

/**
 * Approach: BFS
 * Time Complexity: O(n * m)
 * Space Complexity: O(n * m)
 * `n` = `grid.length`, `m` = `grid[0].length`
 *
 * @param {number[][]} mat
 * @return {number[][]}
 */
const updateMatrix = (mat) => {
        // instead of moving from every one-cell towards closest zero-cell,
        // move from each zero-cell towards one-cells
        const n = mat.length;
        const m = mat[0].length;
        let q = [];

        for (let y = 0; y < n; y++) {
                for (let x = 0; x < m; x++) {
                        const val = mat[y][x];

                        if (val === 0) {
                                q.push(m * y + x);
                        } else {
                                mat[y][x] = -1;
                        }
                }
        }

        const d = [-1, 0, 1, 0, -1];
        let dist = 1;

        while (q.length) {
                const q2 = [];

                for (let qi = 0; qi < q.length; qi++) {
                        const k = q[qi];
                        const y = 0 | (k / m);
                        const x = k % m;

                        for (let i = 0; i < 4; i++) {
                                const ny = y + d[i];
                                const nx = x + d[i + 1];

                                if (
                                        ny < 0 ||
                                        ny >= n ||
                                        nx < 0 ||
                                        nx >= m ||
                                        mat[ny][nx] !== -1
                                ) {
                                        continue;
                                }

                                mat[ny][nx] = dist;
                                q2.push(m * ny + nx);
                        }
                }

                q = q2;
                dist++;
        }

        return mat;
};

export { updateMatrix };
