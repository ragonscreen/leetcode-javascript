/**
 * 0224. Basic Calculator
 *
 * Link: https://leetcode.com/problems/basic-calculator/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-04-11
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Math (topic_8)
 * - String (topic_10)
 * - Stack (topic_15)
 * - Recursion (topic_31)
 *
 * Stats:
 * - Total Accepted: 698,826
 * - Total Submissions: 1,494,323
 * - Acceptance Rate: 46.8%
 *
 * Similar Problems:
 * - basic-calculator-ii (Medium)
 * - different-ways-to-add-parentheses (Medium)
 * - evaluate-reverse-polish-notation (Medium)
 * - minimize-result-by-adding-parentheses-to-expression (Medium)
 * - basic-calculator-iii (Hard)
 * - expression-add-operators (Hard)
 * - the-score-of-students-solving-math-expression (Hard)
 */

/**
 * Approach: Stack
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} s
 * @return {number}
 */
const calculate = (s) => {
        const stack = [];

        for (const c of s) {
                if (c !== ' ' && c !== ')') {
                        stack.push(c);
                }

                if (c !== ')') {
                        continue;
                }

                const rawExpr = [];

                while (stack.at(-1) !== '(') {
                        rawExpr.push(stack.pop());
                }

                stack.pop(); // remove (
                rawExpr.reverse();
                const expr = getExpr(rawExpr);
                const parsedExpr = parseExpr(expr);
                stack.push(parsedExpr);
        }

        return parseExpr(getExpr(stack));
};

const getExpr = (rawExpr) => {
        const expr = [];
        let num = '';

        for (const v of rawExpr) {
                if (v !== '+' && v !== '-') {
                        num += v;
                        continue;
                }

                expr.push(Number(num));
                expr.push(v);
                num = '';
        }

        expr.push(Number(num));

        return expr;
};

const parseExpr = (expr) => {
        let isNum = true;
        let isMinus = false;
        let val = 0;

        for (const k of expr) {
                if (k === '+' || k === '-') {
                        isNum = false;
                        isMinus = k === '-';
                        continue;
                }

                const n = Number(k);
                val += isMinus ? -n : n;
        }

        return isNum ? Number(expr.join('')) : val;
};

export { calculate };
