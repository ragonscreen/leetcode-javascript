/**
 * 2685. Count the Number of Complete Components
 *
 * Link: https://leetcode.com/problems/count-the-number-of-complete-components/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-08-24
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Depth-First Search (topic_21)
 * - Breadth-First Search (topic_22)
 * - Union-Find (topic_23)
 * - Graph Theory (topic_24)
 * - Staff (position_staff)
 * - Weekly Contest 345 (contest_weekly-contest-345)
 *
 * Stats:
 * - Total Accepted: 254,919
 * - Total Submissions: 315,403
 * - Acceptance Rate: 80.8%
 *
 * Similar Problems:
 * - number-of-connected-components-in-an-undirected-graph (Medium) (Premium)
 */

/**
 * Approach: DFS [II]
 * Time Complexity: O(N + m)
 * Space Complexity: O(N)
 * `N` = `n`, `m` = `edges.length`
 *
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
const countCompleteComponents = (n, edges) => {
        const g = new Array(n);

        for (let i = 0; i < edges.length; i++) {
                const [u, v] = edges[i];
                g[u] ??= [];
                g[v] ??= [];
                g[u].push(v);
                g[v].push(u);
        }

        const vis = new Uint8Array(n);
        let edg = 0;
        let vtx = 0;

        const dfs = (u) => {
                vis[u] = 1;
                const nodes = g[u] ?? [];
                edg += nodes.length;
                vtx++;

                for (const v of nodes) {
                        if (!vis[v]) {
                                dfs(v);
                        }
                }
        };

        let res = 0;

        for (let i = 0; i < n; i++) {
                if (vis[i]) {
                        continue;
                }

                edg = 0;
                vtx = 0;
                dfs(i);

                if (edg === vtx * (vtx - 1)) {
                        res++;
                }
        }

        return res;
};

/**
 * Approach: DFS [I]
 * Time Complexity: O(N + m)
 * Space Complexity: O(N)
 * `N` = `n`, `m` = `edges.length`
 *
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
const countCompleteComponents1 = (n, edges) => {
        const g = new Array(n);

        for (let i = 0; i < edges.length; i++) {
                const [u, v] = edges[i];
                g[u] ??= [];
                g[v] ??= [];
                g[u].push(v);
                g[v].push(u);
        }

        const vis = new Uint8Array(n);
        let cur = [];

        const dfs = (u) => {
                vis[u] = 1;
                cur.push(u);

                for (const v of g[u] ?? []) {
                        if (!vis[v]) {
                                dfs(v);
                        }
                }
        };

        let res = 0;

        outer: for (let i = 0; i < n; i++) {
                if (vis[i]) {
                        continue;
                }

                vis[i] = 1;
                cur = [];
                dfs(i);
                const vtx = cur.length;

                if (vtx === 1) {
                        res++;
                        continue;
                }

                for (let j = 0; j < vtx; j++) {
                        if (g[cur[j]].length !== vtx - 1) {
                                continue outer;
                        }
                }

                res++;
        }

        return res;
};

export { countCompleteComponents, countCompleteComponents1 };
