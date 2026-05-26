/**
 * 1091. Shortest Path in Binary Matrix
 *
 * Link: https://leetcode.com/problems/shortest-path-in-binary-matrix/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-26
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Breadth-First Search (topic_22)
 * - Matrix (topic_61053)
 * - Staff (position_staff)
 * - Weekly Contest 141 (contest_weekly-contest-141)
 *
 * Stats:
 * - Total Accepted: 853,603
 * - Total Submissions: 1,656,623
 * - Acceptance Rate: 51.5%
 *
 * Similar Problems:
 * - paths-in-matrix-whose-sum-is-divisible-by-k (Hard)
 */

/**
 * Approach: BFS
 * Time Complexity: O(n^2)
 * Space Complexity: O(n^2)
 * `n` = `grid.length`
 *
 * @param {number[][]} grid
 * @return {number}
 */
const shortestPathBinaryMatrix = (grid) => {
        const n = grid.length;

        if (grid[0][0] || grid[n - 1][n - 1]) {
                return -1;
        }

        const p = (y, x) => n * y + x;
        const u = (k) => [0 | (k / n), k % n];
        const d = [-1, 0, 1, 0, -1, -1, 1, 1, -1];
        let q = [0];
        grid[0][0] = 1;
        let res = 1;

        while (q.length) {
                const q2 = [];

                for (let qi = 0; qi < q.length; qi++) {
                        const k = q[qi];

                        if (k === n * n - 1) {
                                return res;
                        }

                        const [y, x] = u(k);

                        for (let i = 0; i < 8; i++) {
                                const ny = y + d[i];
                                const nx = x + d[i + 1];
                                const nk = p(ny, nx);

                                if (
                                        ny < 0 ||
                                        ny >= n ||
                                        nx < 0 ||
                                        nx >= n ||
                                        grid[ny][nx]
                                ) {
                                        continue;
                                }

                                q2.push(nk);
                                grid[ny][nx] = 1;
                        }
                }

                q = q2;
                res++;
        }

        return -1;
};

export { shortestPathBinaryMatrix };
