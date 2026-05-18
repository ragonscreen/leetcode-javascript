/**
 * 1345. Jump Game IV
 *
 * Link: https://leetcode.com/problems/jump-game-iv/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-04-30
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Breadth-First Search (topic_22)
 *
 * Stats:
 * - Total Accepted: 164,032
 * - Total Submissions: 354,325
 * - Acceptance Rate: 46.3%
 *
 * Similar Problems:
 * - jump-game-vii (Medium)
 * - jump-game-viii (Medium)
 * - maximum-number-of-jumps-to-reach-the-last-index (Medium)
 */

/**
 * Approach: BFS
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} arr
 * @return {number}
 */
const minJumps = (arr) => {
        const n = arr.length;
        const g = new Map();

        for (let i = 0; i < n; i++) {
                const num = arr[i];

                if (g.has(num)) {
                        g.get(num).push(i);
                } else {
                        g.set(num, [i]);
                }
        }

        let q = [0];
        const v = new Uint8Array(n);
        v[0] = 1;
        let res = 0;

        while (q.length) {
                const q2 = [];

                for (let qi = 0; qi < q.length; qi++) {
                        const i = q[qi];
                        const num = arr[i];

                        if (i === n - 1) {
                                return res;
                        }

                        if (i > 0 && !v[i - 1]) {
                                q2.push(i - 1);
                                v[i - 1] = 1;
                        }

                        if (!v[i + 1]) {
                                q2.push(i + 1);
                                v[i + 1] = 1;
                        }

                        for (const j of g.get(num)) {
                                if (!v[j]) {
                                        q2.push(j);
                                        v[j] = 1;
                                }
                        }

                        g.set(num, []);
                }

                res++;
                q = q2;
        }
};

export { minJumps };
