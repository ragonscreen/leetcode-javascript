/**
 * 1162. As Far from Land as Possible
 *
 * Link: https://leetcode.com/problems/as-far-from-land-as-possible/
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
 * - Staff (position_staff)
 * - Weekly Contest 150 (contest_weekly-contest-150)
 *
 * Stats:
 * - Total Accepted: 187,036
 * - Total Submissions: 357,599
 * - Acceptance Rate: 52.3%
 *
 * Similar Problems:
 * - k-highest-ranked-items-within-a-price-range (Medium)
 * - maximum-manhattan-distance-after-k-changes (Medium)
 * - shortest-distance-from-all-buildings (Hard) (Premium)
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
const maxDistance = (grid) => {
        const n = grid.length;
        const d = [-1, 0, 1, 0, -1];
        let q = [];
        let f0 = false;
        let f1 = false;

        for (let y = 0; y < n; y++) {
                for (let x = 0; x < n; x++) {
                        if (grid[y][x]) {
                                f1 = true;
                                q.push(n * y + x);
                        } else {
                                f0 = true;
                                grid[y][x] = -1;
                        }
                }
        }

        if (!(f1 && f0)) {
                return -1;
        }

        let dist = 1;

        while (q.length) {
                const q2 = [];

                for (let qi = 0; qi < q.length; qi++) {
                        const k = q[qi];
                        const y = 0 | (k / n);
                        const x = k % n;

                        for (let i = 0; i < 4; i++) {
                                const ny = y + d[i];
                                const nx = x + d[i + 1];

                                if (
                                        ny < 0 ||
                                        ny >= n ||
                                        nx < 0 ||
                                        nx >= n ||
                                        grid[ny][nx] !== -1
                                ) {
                                        continue;
                                }

                                q2.push(n * ny + nx);
                                grid[ny][nx] = dist;
                        }
                }

                dist++;
                q = q2;
        }

        return dist - 2;
};

export { maxDistance };
