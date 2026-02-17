/**
 * 1047. Remove All Adjacent Duplicates In String
 * Link: https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
 * Difficulty: Easy
 * Date: 2026-02-17
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
const removeDuplicates = (s) => {
        const stack = new Array(s.length);

        for (const c of s) {
                if (stack.at(-1) === c) {
                        stack.pop();
                } else {
                        stack.push(c);
                }
        }

        return stack.join('');
};

export { removeDuplicates };
