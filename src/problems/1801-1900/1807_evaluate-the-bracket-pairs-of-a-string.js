/**
 * 1807. Evaluate the Bracket Pairs of a String
 *
 * Link: https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-06
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - String (topic_10)
 *
 * Stats:
 * - Total Accepted: 42,331
 * - Total Submissions: 60,928
 * - Acceptance Rate: 69.5%
 *
 * Similar Problems:
 * - apply-substitutions (Medium)
 */

/**
 * Approach: Sliding Window
 * Time Complexity: O(n + k)
 * Space Complexity: O(k) auxiliary, O(k + m) total
 * `n` = length of `s`, `k` = length of `knowledge`, `m` = sum of lengths of `s[i]`
 *
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
const evaluate = (s, knowledge) => {
        const map = new Map(knowledge);
        const n = s.length;
        let res = '';

        for (let l = 0, r = 0; r <= n; r++) {
                if (s[r] === '(' || r === n) {
                        const str = s.slice(l, r);

                        if (str) {
                                res += str;
                        }

                        l = r + 1;
                }

                if (s[r] === ')') {
                        const str = s.slice(l, r);

                        if (str) {
                                res += map.get(str) || '?';
                        }

                        l = r + 1;
                }
        }

        return res;
};

export { evaluate };
