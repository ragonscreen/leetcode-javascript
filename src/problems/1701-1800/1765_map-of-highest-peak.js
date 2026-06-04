/**
 * 1765. Map of Highest Peak
 *
 * Link: https://leetcode.com/problems/map-of-highest-peak/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-06-04
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Breadth-First Search (topic_22)
 * - Matrix (topic_61053)
 * - Senior Staff (position_senior-staff)
 * - Biweekly Contest 46 (contest_biweekly-contest-46)
 *
 * Stats:
 * - Total Accepted: 163,703
 * - Total Submissions: 215,796
 * - Acceptance Rate: 75.9%
 */

/**
 * Approach: BFS
 * Time Complexity: O(n * m)
 * Space Complexity: O(n * m)
 * `n` = `isWater.length`, `m` = `isWater[0].length`
 *
 * @param {number[][]} isWater
 * @return {number[][]}
 */
const highestPeak = (isWater) => {
        const n = isWater.length;
        const m = isWater[0].length;
        let q = [];

        for (let y = 0; y < n; y++) {
                for (let x = 0; x < m; x++) {
                        if (isWater[y][x] === 1) {
                                q.push(m * y + x);
                                isWater[y][x] = 0;
                        } else {
                                isWater[y][x] = -1;
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
                                        isWater[ny][nx] !== -1
                                ) {
                                        continue;
                                }

                                isWater[ny][nx] = dist;
                                q2.push(m * ny + nx);
                        }
                }

                q = q2;
                dist++;
        }

        return isWater;
};

export { highestPeak };
