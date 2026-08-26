/**
 * 2492. Minimum Score of a Path Between Two Cities
 *
 * Link: https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-08-05 (Updated: 2026-08-26)
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Depth-First Search (topic_21)
 * - Breadth-First Search (topic_22)
 * - Union-Find (topic_23)
 * - Graph Theory (topic_24)
 * - Staff (position_staff)
 * - Weekly Contest 322 (contest_weekly-contest-322)
 *
 * Stats:
 * - Total Accepted: 206,520
 * - Total Submissions: 311,770
 * - Acceptance Rate: 66.2%
 *
 * Similar Problems:
 * - checking-existence-of-edge-length-limited-paths (Hard)
 * - checking-existence-of-edge-length-limited-paths-ii (Hard) (Premium)
 */

/**
 * Approach: DFS
 * Time Complexity: O(N + m)
 * Space Complexity: O(N + m)
 * `N` = `n`, `m` = `roads.length`
 *
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
const minScore = (n, roads) => {
        const g = new Array(n + 1);

        for (const [u, v, w] of roads) {
                g[u] ??= new Map();
                g[u].set(v, w);
                g[v] ??= new Map();
                g[v].set(u, w);
        }

        const vis = new Uint8Array(n + 1);
        let res = Number.MAX_SAFE_INTEGER;

        const dfs = (u) => {
                if (vis[u]) {
                        return;
                }

                vis[u] = 1;

                for (const [v, w] of g[u]) {
                        res = Math.min(res, w);
                        dfs(v);
                }
        };

        dfs(1);

        return res;
};

export { minScore };
