/**
 * 1544. Make The String Great
 * Link: https://leetcode.com/problems/make-the-string-great/
 * Difficulty: Easy
 * Date: 2026-03-15
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Stack
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} s
 * @return {string}
 */
const makeGood = (s) => {
        const stack = [];

        for (const c of s) {
                if (
                        Math.abs(
                                c.charCodeAt() - stack.at(-1)?.charCodeAt(),
                        ) === 32
                ) {
                        stack.pop();
                } else {
                        stack.push(c);
                }
        }

        return stack.join('');
};

export { makeGood };
