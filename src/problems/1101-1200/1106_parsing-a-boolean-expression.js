/**
 * 1106. Parsing A Boolean Expression
 *
 * Link: https://leetcode.com/problems/parsing-a-boolean-expression/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-03-18
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 * - Stack (topic_15)
 * - Recursion (topic_31)
 *
 * Stats:
 * - Total Accepted: 146,884
 * - Total Submissions: 210,384
 * - Acceptance Rate: 69.8%
 */

/**
 * Approach: Stack
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} expression
 * @return {boolean}
 */
const parseBoolExpr = (expression) => {
        const stack = [];
        let l = 0;

        for (let r = 0; r < expression.length; r++) {
                const c = expression[r];

                if (c === '(') {
                        stack.push(expression[r - 1]);
                        l = r + 1;
                        continue;
                }

                if (c !== ')') {
                        continue;
                }

                const ops = '!|&';
                const vals = [];

                while (!ops.includes(stack.at(-1))) {
                        vals.push(stack.pop());
                }

                const cur = expression.slice(l, r);

                if (cur) {
                        vals.push(cur);
                }

                const o = stack.pop();
                let res;

                outer: for (const v of vals) {
                        for (const s of v) {
                                if (s === ',') {
                                        continue;
                                }

                                const _s = s === 't';

                                if (o === '!') {
                                        res = !_s;
                                        break outer;
                                }

                                if (res === undefined) {
                                        res = _s;
                                        continue;
                                }

                                if (o === '|' && _s) {
                                        res = true;
                                        break outer;
                                }

                                if (o === '&' && !_s) {
                                        res = false;
                                        break outer;
                                }
                        }
                }

                stack.push(res ? 't' : 'f');
                l = r + 1;
        }

        return stack.length ? stack[0] === 't' : expression[0] === 't';
};

export { parseBoolExpr };
