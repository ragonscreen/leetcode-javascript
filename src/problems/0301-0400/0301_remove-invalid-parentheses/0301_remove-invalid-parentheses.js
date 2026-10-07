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
 * Approach: BFS + Stack + Bitmask
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

        const addIfValid = (val) => {
                let str = '';

                for (let i = 0; i < n; i++) if (val & (1 << i)) str += s[i];

                if (set.has(str)) return;

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

                if (sp === 0) set.add(str);
        };

        const B1 = 5;
        const B2 = B1 * 2;
        const M = (1 << B1) - 1;

        const pctx = (idx, cntRem, score) => (idx << B2) | (cntRem << B1) | score;

        const q = [[0, 0]]; // val, ctx (idx | cntRem | score)

        for (let qi = 0; qi < q.length; qi++) {
                const [val, ctx] = q[qi];
                const idx = ctx >> B2;
                const cntRem = (ctx >> B1) & M;
                const score = ctx & M;

                if (idx === n) {
                        addIfValid(val);
                        continue;
                }

                const ch = s[idx];
                const op = ch === '(';
                const cl = ch === ')';
                const mask = 1 << idx;
                const strTake = val | mask;

                // must take regular char
                if (!(op || cl)) {
                        q.push([strTake, pctx(idx + 1, cntRem, score)]);
                        continue;
                }

                // take
                if (op) {
                        if (score + 1 <= n - idx - 1)
                                q.push([strTake, pctx(idx + 1, cntRem, score + 1)]);
                } else {
                        if (score > 0) q.push([strTake, pctx(idx + 1, cntRem, score - 1)]);
                }

                // skip
                if (cntRem < mnRem) q.push([val, pctx(idx + 1, cntRem + 1, score)]);
        }

        return [...set];
};

/**
 * Approach: BFS + Stack
 * Time Complexity: O(n * 2^n)
 * Space Complexity: O(n * 2^n)
 * `n` = `s.length`
 *
 * @param {string} s
 * @returns {string[]}
 */
const removeInvalidParentheses1 = (s) => {
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

        const set = new Set();
        const q = [['', 0, 0, 0]]; // str, idx, cntRem, score

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

export { removeInvalidParentheses, removeInvalidParentheses1 };
