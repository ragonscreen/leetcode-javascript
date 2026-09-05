/**
 * 1036. Escape a Large Maze
 *
 * Link: https://leetcode.com/problems/escape-a-large-maze/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-09-05
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Depth-First Search (topic_21)
 * - Breadth-First Search (topic_22)
 * - Bidirectional Search (topic_97547)
 * - Principal (position_principal)
 * - Weekly Contest 134 (contest_weekly-contest-134)
 *
 * Stats:
 *
 * - Total Accepted: 30,146
 * - Total Submissions: 81,174
 * - Acceptance Rate: 37.1%
 */

/**
 * Approach: DFS
 * Time Complexity: O(k^2)
 * Space Complexity: O(k^2)
 * `k` = `blocked.length`
 *
 * @param {number[][]} blocked
 * @param {number[]} source
 * @param {number[]} target
 * @returns {boolean}
 */
const isEscapePossible = (blocked, source, target) => {
        const mx = blocked.length;
        if (!mx) return true;

        const n = 1e6;
        const m = 1e6;

        const ppos = (y, x) => m * y + x;
        const upos = (pos) => [0 | (pos / m), pos % m];

        const spos = ppos(source[1], source[0]);
        const tpos = ppos(target[1], target[0]);
        const bset = new Set(blocked.map(([x, y]) => ppos(y, x)));
        const d = [-1, 0, 1, 0, -1];

        const dfs = (pos0, pos1) => {
                const vis = new Set([pos0]);
                const stack = [pos0];
                const [y0, x0] = upos(pos0);

                while (stack.length) {
                        const [y, x] = upos(stack.pop());

                        for (let di = 0; di < 4; di++) {
                                const ny = y + d[di];
                                const nx = x + d[di + 1];
                                if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
                                if (Math.abs(ny - y0) >= mx || Math.abs(nx - x0) >= mx) return true; // escape

                                const npos = ppos(ny, nx);
                                if (bset.has(npos) || vis.has(npos)) continue;
                                if (npos === pos1) return true; // in the same enclosed space

                                vis.add(npos);
                                stack.push(npos);
                        }
                }

                return false;
        };

        return dfs(spos, tpos) && dfs(tpos, spos);
};

export { isEscapePossible };
