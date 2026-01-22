/**
 * 0150. Evaluate Reverse Polish Notation
 * Link: https://leetcode.com/problems/evaluate-reverse-polish-notation/
 * Difficulty: Medium
 * Date: 2026-01-05
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Stack
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = (tokens) => {
        const stack = [];
        const operators = ['+', '-', '*', '/'];

        for (const token of tokens) {
                if (!operators.includes(token)) {
                        stack.push(token);
                        continue;
                }

                const b = Number(stack.pop());
                const a = Number(stack.pop());
                let res;

                switch (token) {
                        case '+':
                                res = a + b;
                                break;
                        case '-':
                                res = a - b;
                                break;
                        case '*':
                                res = a * b;
                                break;
                        case '/':
                                res = Math.trunc(a / b);
                                break;
                        default:
                                break;
                }

                stack.push(res);
        }

        return Number(stack[0]);
};

export { evalRPN };
