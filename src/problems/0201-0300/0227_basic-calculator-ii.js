/**
 * 0227. Basic Calculator II
 *
 * Link: https://leetcode.com/problems/basic-calculator-ii/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-03-18
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Math (topic_8)
 * - String (topic_10)
 * - Stack (topic_15)
 *
 * Stats:
 * - Total Accepted: 937,232
 * - Total Submissions: 2,006,164
 * - Acceptance Rate: 46.7%
 *
 * Similar Problems:
 * - basic-calculator (Hard)
 * - basic-calculator-iii (Hard)
 * - evaluate-valid-expressions (Hard)
 * - expression-add-operators (Hard)
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
        const o1 = '+-';
        const o2 = '*/';
        const stack = [];
        let l = 0;

        for (let r = 0; r < s.length; r++) {
                const sr = s[r];

                if (o1.includes(sr) || o2.includes(sr)) {
                        const op = stack.at(-1);
                        const b = Number(s.slice(l, r));

                        if (o2.includes(op)) {
                                stack.pop();
                                const a = stack.pop();
                                const v =
                                        op === '*' ? a * b : Math.trunc(a / b);
                                stack.push(v);
                        } else {
                                stack.push(b);
                        }

                        stack.push(sr);
                        l = r + 1;
                }
        }

        const b = Number(s.slice(l));

        if (o2.includes(stack.at(-1))) {
                const op = stack.pop();
                const a = stack.pop();
                const v = op === '*' ? a * b : Math.trunc(a / b);
                stack.push(v);
        } else {
                stack.push(b);
        }

        let res = stack[0];

        for (let i = 1; i < stack.length; i += 2) {
                res += stack[i] === '+' ? stack[i + 1] : -stack[i + 1];
        }

        return res;
};

export { calculate };
