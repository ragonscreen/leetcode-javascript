/**
 * 0020. Valid Parentheses
 *
 * Link: https://leetcode.com/problems/valid-parentheses/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2025-12-17
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 * - Stack (topic_15)
 *
 * Stats:
 * - Total Accepted: 7,315,118
 * - Total Submissions: 16,697,997
 * - Acceptance Rate: 43.8%
 *
 * Similar Problems:
 * - check-if-a-parentheses-string-can-be-valid (Medium)
 * - check-if-word-is-valid-after-substitutions (Medium)
 * - generate-parentheses (Medium)
 * - move-pieces-to-obtain-a-string (Medium)
 * - longest-valid-parentheses (Hard)
 * - remove-invalid-parentheses (Hard)
 */

/**
 * Approach: Stack
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
                if (!map[c]) {
                        stack.push(c);
                        continue;
                }

                if (stack.at(-1) === map[c]) {
                        stack.pop();
                } else {
                        return false;
                }
        }

        return !stack.length;
};

export { isValid };
