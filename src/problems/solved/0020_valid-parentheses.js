/**
 * 0020. Valid Parentheses
 * Link: https://leetcode.com/problems/valid-parentheses/
 * Difficulty: Easy
 * Date: 2025-12-17
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Stack
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
        const map = {
                ')': '(',
                '}': '{',
                ']': '[',
        };

        const stack = [];

        for (const c of s) {
                if (map[c]) {
                        if (stack.at(-1) === map[c]) {
                                stack.pop();
                        } else {
                                return false;
                        }
                } else {
                        stack.push(c);
                }
        }

        return !stack.length;
};

export default isValid;
