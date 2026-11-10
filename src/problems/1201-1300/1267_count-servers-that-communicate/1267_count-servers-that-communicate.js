/**
 * 1267. Count Servers that Communicate
 *
 * Link: https://leetcode.com/problems/count-servers-that-communicate/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-11-10
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Depth-First Search (topic_21)
 * - Breadth-First Search (topic_22)
 * - Union-Find (topic_23)
 * - Matrix (topic_61053)
 * - Counting (topic_61062)
 * - Senior (position_senior)
 * - Weekly Contest 164 (contest_weekly-contest-164)
 *
 * Stats:
 *
 * - Total Accepted: 277,977
 * - Total Submissions: 361,776
 * - Acceptance Rate: 76.8%
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n * m)
 * Space Complexity: O(m)
 * `n` = `grid.length`, `m` = `grid[i].length`
 *
 * @param {number[][]} grid
 * @returns {number}
 */
const countServers = (grid) => {
        const n = grid.length;
        const m = grid[0].length;
        const ccnts = new Uint8Array(m);
        const ctaken = new Uint8Array(m);
        let res = 0;

        for (let y = 0; y < n; y++) {
                let cnt = 0;

                for (let x = 0; x < m; x++) {
                        if (grid[y][x] === 1) {
                                cnt++;
                                ccnts[x]++;
                        }
                }

                if (cnt <= 1) continue;

                res += cnt;

                for (let x = 0; x < m; x++) if (grid[y][x] === 1) ctaken[x]++;
        }

        for (let x = 0; x < m; x++) if (ccnts[x] > 1) res += ccnts[x] - ctaken[x];

        return res;
};

export { countServers };
