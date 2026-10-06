/**
 * 2101. Detonate the Maximum Bombs
 *
 * Link: https://leetcode.com/problems/detonate-the-maximum-bombs/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-09
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Math (topic_8)
 * - Depth-First Search (topic_21)
 * - Breadth-First Search (topic_22)
 * - Graph Theory (topic_24)
 * - Geometry (topic_38)
 * - Staff (position_staff)
 * - Biweekly Contest 67 (contest_biweekly-contest-67)
 *
 * Stats:
 *
 * - Total Accepted: 189,456
 * - Total Submissions: 375,678
 * - Acceptance Rate: 50.4%
 *
 * Similar Problems:
 *
 * - max-area-of-island (Medium)
 * - minesweeper (Medium)
 * - number-of-provinces (Medium)
 * - rotting-oranges (Medium)
 */

/**
 * Approach: DFS
 * Time Complexity: O(n^3)
 * Space Complexity: O(n^2)
 * `n` = `bombs.length`
 *
 * @param {number[][]} bombs
 * @returns {number}
 */
const maximumDetonation = (bombs) => {
        const n = bombs.length;
        const r2 = new Float64Array(n);
        for (let i = 0; i < n; i++) r2[i] = bombs[i][2] * bombs[i][2];
        const g = new Array(n);

        for (let u = 0; u < n - 1; u++) {
                const [xu, yu] = bombs[u];
                const r2u = r2[u];

                for (let v = u + 1; v < n; v++) {
                        const [xv, yv] = bombs[v];
                        const r2v = r2[v];
                        const dx = xv - xu;
                        const dy = yv - yu;
                        const dist = dx * dx + dy * dy;

                        if (r2u >= dist) (g[u] ??= []).push(v);
                        if (r2v >= dist) (g[v] ??= []).push(u);
                }
        }

        const vis = new Int8Array(n).fill(-1);
        const stack = new Uint8Array(n);
        let res = 1;

        for (let i = 0; i < n; i++) {
                let sp = 0;
                stack[sp++] = i;
                vis[i] = i;
                let cnt = 0;

                while (sp > 0) {
                        const u = stack[--sp];
                        cnt++;
                        const nodes = g[u];
                        if (!nodes) continue;

                        for (const v of nodes) {
                                if (vis[v] !== i) {
                                        vis[v] = i;
                                        stack[sp++] = v;
                                }
                        }
                }

                res = Math.max(res, cnt);
                if (res === n) break;
        }

        return res;
};

export { maximumDetonation };
