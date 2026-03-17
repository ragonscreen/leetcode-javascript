/**
 * 0946. Validate Stack Sequences
 *
 * Link: https://leetcode.com/problems/validate-stack-sequences/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-03-16
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Stack (topic_15)
 * - Simulation (topic_61055)
 *
 * Stats:
 * - Total Accepted: 368,774
 * - Total Submissions: 525,033
 * - Acceptance Rate: 70.2%
 */

/**
 * Approach: Stack
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
