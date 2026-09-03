/**
 * 3310. Remove Methods From Project
 *
 * Link: https://leetcode.com/problems/remove-methods-from-project/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-08-05
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Depth-First Search (topic_21)
 * - Breadth-First Search (topic_22)
 * - Graph Theory (topic_24)
 * - Staff (position_staff)
 * - Weekly Contest 418 (contest_weekly-contest-418)
 *
 * Stats:
 *
 * - Total Accepted: 91,910
 * - Total Submissions: 137,134
 * - Acceptance Rate: 67.0%
 */

/**
 * Approach: BFS
 * Time Complexity: O(N + m)
 * Space Complexity: O(N)
 * `N` = `n`, `m` = `invocations.length`
 *
 * @param {number} n
 * @param {number} k
 * @param {number[][]} invocations
 * @returns {number[]}
 */
const remainingMethods = (n, k, invocations) => {
        const m = invocations.length;
        const g = new Array(n);
        const incnt = new Uint32Array(n);

        for (let i = 0; i < m; i++) {
                const [u, v] = invocations[i];
                g[u] ??= [];
                g[u].push(v);
                incnt[v]++;
        }

        const ng = new Uint8Array(n);
        ng[k] = 1;
        const q = new Uint32Array(n);
        let qf = 0;
        let qb = 0;
        q[qb++] = k;
        let okcnt = n - 1;

        while (qf < qb) {
                const u = q[qf++];
                const vv = g[u] ?? [];

                for (let i = 0; i < vv.length; i++) {
                        const v = vv[i];
                        incnt[v]--;

                        if (!ng[v]) {
                                q[qb++] = v;
                                ng[v] = 1;
                                okcnt--;
                        }
                }
        }

        const res = new Uint32Array(okcnt);

        for (let i = 0, ri = 0; i < n; i++) {
                if (ng[i] && incnt[i]) {
                        return Array.from({ length: n }, (_, j) => j);
                }

                if (!ng[i]) {
                        res[ri++] = i;
                }
        }

        return res;
};

export { remainingMethods };
