/**
 * 0150. Evaluate Reverse Polish Notation
 *
 * Link: https://leetcode.com/problems/evaluate-reverse-polish-notation/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-01-05
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Math (topic_8)
 * - Stack (topic_15)
 *
 * Stats:
 * - Total Accepted: 1,691,579
 * - Total Submissions: 2,957,681
 * - Acceptance Rate: 57.2%
 *
 * Similar Problems:
 * - basic-calculator (Hard)
 * - expression-add-operators (Hard)
 */

/**
 * Approach: Stack
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
