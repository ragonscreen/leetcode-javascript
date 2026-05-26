/**
 * 0990. Satisfiability of Equality Equations
 *
 * Link: https://leetcode.com/problems/satisfiability-of-equality-equations/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-26
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - String (topic_10)
 * - Union-Find (topic_23)
 * - Graph Theory (topic_24)
 * - Senior Staff (position_senior-staff)
 * - Weekly Contest 123 (contest_weekly-contest-123)
 *
 * Stats:
 * - Total Accepted: 169,840
 * - Total Submissions: 327,490
 * - Acceptance Rate: 51.9%
 */

/**
 * Approach: BFS
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * `n` = `equations.length`
 *
 * @param {string[]} equations
 * @return {boolean}
 */
const equationsPossible = (equations) => {
        const n = equations.length;
        const g = new Map();

        for (let i = 0; i < n; i++) {
                const [x, t, _, y] = equations[i].split('');

                if (t === '!') {
                        continue;
                }

                if (g.has(x)) {
                        g.get(x).push(y);
                } else {
                        g.set(x, [y]);
                }

                if (g.has(y)) {
                        g.get(y).push(x);
                } else {
                        g.set(y, [x]);
                }
        }

        const map = new Uint8Array(26);
        let val = 1;

        for (const [c, v] of g) {
                const oc = c.charCodeAt() - 97;

                if (map[oc]) {
                        continue;
                }

                map[oc] = val;
                const q = v;
                let qi = 0;

                while (qi < q.length) {
                        const d = q[qi++];
                        const od = d.charCodeAt() - 97;

                        if (map[od]) {
                                continue;
                        }

                        map[od] = val;
                        q.push(...g.get(d));
                }

                val++;
        }

        for (let i = 0; i < n; i++) {
                const [x, t, _, y] = equations[i].split('');

                if (t === '=') {
                        continue;
                }

                if (x === y) {
                        return false;
                }

                const ox = x.charCodeAt() - 97;
                const oy = y.charCodeAt() - 97;

                if ((map[ox] || map[oy]) && map[ox] === map[oy]) {
                        return false;
                }
        }

        return true;
};

export { equationsPossible };
