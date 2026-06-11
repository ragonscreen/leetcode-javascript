/**
 * 3558. Number of Ways to Assign Edge Weights I
 *
 * Link: https://leetcode.com/problems/number-of-ways-to-assign-edge-weights-i/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-06-11
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Math (topic_8)
 * - Tree (topic_20)
 * - Depth-First Search (topic_21)
 * - Staff (position_staff)
 * - Biweekly Contest 157 (contest_biweekly-contest-157)
 *
 * Stats:
 * - Total Accepted: 35,688
 * - Total Submissions: 59,312
 * - Acceptance Rate: 60.2%
 */

/**
 * Approach: DFS
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * `n` = `edges.length`
 *
 * @param {number[][]} edges
 * @return {number}
 */
const assignEdgeWeights = (edges) => {
        const mod = 1e9 + 7;
        const n = edges.length;
        const pow2 = new Uint32Array(n + 1);
        pow2[0] = 1;

        for (let i = 1; i <= n; i++) {
                pow2[i] = (2 * pow2[i - 1]) % mod;
        }

        const g = Array.from({ length: n + 2 }, () => []);

        for (let i = 0; i < n; i++) {
                const [u, v] = edges[i];
                g[u].push(v);
                g[v].push(u);
        }

        const dfs = (node, pre) => {
                const e = g[node];
                let res = 0;

                for (let i = 0; i < e.length; i++) {
                        const v = e[i];

                        if (v !== pre) {
                                res = Math.max(res, dfs(v, node) + 1);
                        }
                }

                return res;
        };

        const depth = dfs(1, -1);

        return pow2[depth - 1];
};

export { assignEdgeWeights };
