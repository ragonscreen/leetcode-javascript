/**
 * 2998. Minimum Number of Operations to Make X and Y Equal
 *
 * Link: https://leetcode.com/problems/minimum-number-of-operations-to-make-x-and-y-equal/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-04
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Dynamic Programming (topic_13)
 * - Breadth-First Search (topic_22)
 * - Memoization (topic_33)
 * - Staff (position_staff)
 * - Biweekly Contest 121 (contest_biweekly-contest-121)
 *
 * Stats:
 *
 * - Total Accepted: 30,233
 * - Total Submissions: 61,626
 * - Acceptance Rate: 49.1%
 *
 * Similar Problems:
 *
 * - minimum-moves-to-spread-stones-over-grid (Medium)
 * - shortest-bridge (Medium)
 */

/**
 * Approach: BFS
 * Time Complexity: O(X)
 * Space Complexity: O(X)
 * `X` = `x`
 *
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
const minimumOperationsToMakeEqual = (x, y) => {
        if (y >= x) return y - x;
        const vis = new Uint8Array(x + 12);
        vis[x] = 1;
        let q = [x];
        let res = 0;

        while (q.length) {
                const q2 = [];

                for (let qi = 0; qi < q.length; qi++) {
                        const num = q[qi];
                        if (num === y) return res;

                        for (const val of [5, 11]) {
                                if (num % val === 0) {
                                        const nxt = num / val;

                                        if (!vis[nxt]) {
                                                q2.push(nxt);
                                                vis[nxt] = 1;
                                        }
                                }
                        }

                        let nxt = num - 1;

                        if (num > 1 && !vis[nxt]) {
                                q2.push(nxt);
                                vis[nxt] = 1;
                        }

                        nxt = num + 1;

                        if (!(nxt >= x + 12 || vis[nxt])) {
                                q2.push(nxt);
                                vis[nxt] = 1;
                        }
                }

                q = q2;
                res++;
        }

        return res;
};

export { minimumOperationsToMakeEqual };
