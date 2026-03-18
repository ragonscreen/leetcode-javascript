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

        for (const c of expression) {
                if (c === ',') {
                        continue;
                }

                if (c !== ')') {
                        stack.push(c);
                        continue;
                }

                let hasTrue = false;
                let hasFalse = false;

                while (stack.at(-1) !== '(') {
                        const val = stack.pop();

                        if (val === 't') {
                                hasTrue = true;
                        }

                        if (val === 'f') {
                                hasFalse = true;
                        }
                }

                stack.pop();
                const o = stack.pop();
                let res;

                if (o === '!') {
                        res = hasFalse;
                } else if (o === '|') {
                        res = hasTrue;
                } else {
                        res = !hasFalse;
                }

                stack.push(res ? 't' : 'f');
        }

        return stack[0] === 't';
};

export { parseBoolExpr };
