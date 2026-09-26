/**
 * 1807. Evaluate the Bracket Pairs of a String
 *
 * Link: https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-06 (Updated: 2026-09-26)
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - String (topic_10)
 *
 * Stats:
 *
 * - Total Accepted: 42,331
 * - Total Submissions: 60,928
 * - Acceptance Rate: 69.5%
 *
 * Similar Problems:
 *
 * - apply-substitutions (Medium)
 */

/**
 * Approach: Sliding Window
 * Time Complexity: O(n + K)
 * Space Complexity: O(K) auxiliary, O(K + r) total
 * `n` = `s.length`, `K` = `sum(knowledge[i][0].length + knowledge[i][1].length)`
 * `r` = `res.length`
 *
 * @param {string} s
 * @param {string[][]} knowledge
 * @returns {string}
 */
const evaluate = (s, knowledge) => {
        const n = s.length;
        const mp = new Map(knowledge);
        let res = '';

        for (let l = 0, r = 0; r <= n; r++) {
                const c = s[r];

                if (c === '(' || r === n) {
                        res += s.slice(l, r);
                        l = r + 1;
                } else if (c === ')') {
                        res += mp.get(s.slice(l, r)) ?? '?';
                        l = r + 1;
                }
        }

        return res;
};

export { evaluate };
