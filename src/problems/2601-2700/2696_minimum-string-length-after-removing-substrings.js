/**
 * 2696. Minimum String Length After Removing Substrings
 *
 * Link: https://leetcode.com/problems/minimum-string-length-after-removing-substrings/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-03-21
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 * - Stack (topic_15)
 * - Simulation (topic_61055)
 *
 * Stats:
 * - Total Accepted: 247,328
 * - Total Submissions: 320,497
 * - Acceptance Rate: 77.2%
 */

/**
 * Approach: Stack
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} s
 * @return {number}
 */
const minLength = (s) => {
        const map = {
                A: 'B',
                C: 'D',
        };

        const stack = [];

        for (const c of s) {
                if (c === map[stack.at(-1)]) {
                        stack.pop();
                } else {
                        stack.push(c);
                }
        }

        return stack.length;
};

export { minLength };
