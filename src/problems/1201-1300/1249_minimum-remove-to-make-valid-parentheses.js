/**
 * 1249. Minimum Remove to Make Valid Parentheses
 *
 * Link: https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-03-23
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 * - Stack (topic_15)
 *
 * Stats:
 * - Total Accepted: 1,046,752
 * - Total Submissions: 1,467,264
 * - Acceptance Rate: 71.3%
 *
 * Similar Problems:
 * - check-if-a-parentheses-string-can-be-valid (Medium)
 * - minimum-number-of-swaps-to-make-the-string-balanced (Medium)
 */

/**
 * Approach: Simulation [Optimal]
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary, O(n) total
 *
 * @param {string} s
 * @return {string}
 */
const minRemoveToMakeValid = (s) => {
        const n = s.length;
        const res = [...s];
        let countOpen = 0;

        for (let i = 0; i < n; i++) {
                const c = s[i];

                if (!(c === '(' || c === ')')) {
                        continue;
                }

                if (c === '(') {
                        countOpen++;
                        continue;
                }

                if (countOpen) {
                        countOpen--;
                } else {
                        res[i] = '';
                }
        }

        let i = n - 1;

        while (countOpen) {
                if (res[i] === '(') {
                        res[i] = '';
                        countOpen--;
                }

                i--;
        }

        return res.join('');
};

/**
 * Approach: Stack
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} s
 * @return {string}
 */
const minRemoveToMakeValid1 = (s) => {
        const n = s.length;
        const stack = [];

        for (let i = 0; i < n; i++) {
                const c = s[i];

                if (!(c === '(' || c === ')')) {
                        continue;
                }

                if (c === '(') {
                        stack.push(['(', i]);
                        continue;
                }

                if (stack.length && stack.at(-1)[0] === '(') {
                        stack.pop();
                } else {
                        stack.push([')', i]);
                }
        }

        let res = '';
        let p = 0;

        for (let i = 0; i < n; i++) {
                const c = s[i];

                if (i === stack[p]?.[1]) {
                        p++;
                } else {
                        res += c;
                }
        }

        return res;
};

export { minRemoveToMakeValid, minRemoveToMakeValid1 };
