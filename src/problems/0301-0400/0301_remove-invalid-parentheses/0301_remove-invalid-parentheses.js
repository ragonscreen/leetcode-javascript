/**
 * 301. Remove Invalid Parentheses
 *
 * Link: https://leetcode.com/problems/remove-invalid-parentheses/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-10-07
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - String (topic_10)
 * - Backtracking (topic_14)
 * - Breadth-First Search (topic_22)
 *
 * Stats:
 *
 * - Total Accepted: 575,602
 * - Total Submissions: 1,110,162
 * - Acceptance Rate: 51.8%
 *
 * Similar Problems:
 *
 * - valid-parentheses (Easy)
 * - minimum-number-of-swaps-to-make-the-string-balanced (Medium)
 */

/**
 * Approach: BFS + Stack
 * Time Complexity: O(n * 2^n)
 * Space Complexity: O(n * 2^n)
 * `n` = `s.length`
 *
 * @param {string} s
 * @returns {string[]}
 */
const removeInvalidParentheses = (s) => {
        const n = s.length;
        let cnto = 0;
        let mnRem = 0;

        for (const c of s) {
                const op = c === '(';
                const cl = c === ')';

                if (!(op || cl)) continue;

                if (op) {
                        cnto++;
                        continue;
                }

                if (cnto > 0) cnto--;
                else mnRem++;
        }

        for (let i = n - 1; i > -1 && cnto > 0; i--) {
                if (s[i] === '(') {
                        mnRem++;
                        cnto--;
                }
        }

        if (mnRem === 0) return [s];
        if (mnRem === n) return [''];

        const set = new Set();
        const q = [['', 0, 0, 0]]; // str, idx, cntRem, score

        const isValid = (str) => {
                const st = new Array(str.length);
                let sp = 0;

                for (const c of str) {
                        const op = c === '(';
                        const cl = c === ')';

                        if (!(op || cl)) continue;

                        if (cl) {
                                if (st[sp - 1] === '(') sp--;
                                else return false;
                        } else {
                                st[sp++] = c;
                        }
                }

                return sp === 0;
        };

        for (let qi = 0; qi < q.length; qi++) {
                const [str, idx, cntRem, score] = q[qi];

                if (idx === n) {
                        if (isValid(str)) set.add(str);
                        continue;
                }

                const ch = s[idx];
                const op = ch === '(';
                const cl = ch === ')';

                // must take regular char
                if (!(op || cl)) {
                        q.push([str + ch, idx + 1, cntRem, score]);
                        continue;
                }

                // take
                if (op) {
                        if (score + 1 <= n - idx - 1)
                                q.push([str + ch, idx + 1, cntRem, score + 1]);
                } else {
                        if (score > 0) q.push([str + ch, idx + 1, cntRem, score - 1]);
                }

                // skip
                if (cntRem < mnRem) q.push([str, idx + 1, cntRem + 1, score]);
        }

        return [...set];
};

export { removeInvalidParentheses };
