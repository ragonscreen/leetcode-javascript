/**
 * 0946. Validate Stack Sequences
 * Link: https://leetcode.com/problems/validate-stack-sequences/
 * Difficulty: Medium
 * Date: 2026-03-16
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Stack
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
const validateStackSequences = (pushed, popped) => {
        const stack = [];
        let iPop = 0;

        for (const val of pushed) {
                while (stack.at(-1) === popped[iPop]) {
                        stack.pop();
                        iPop++;
                }

                stack.push(val);
        }

        while (iPop < popped.length) {
                const v = stack.pop();

                if (v === popped[iPop]) {
                        iPop++;
                } else {
                        return false;
                }
        }

        return true;
};

export { validateStackSequences };
