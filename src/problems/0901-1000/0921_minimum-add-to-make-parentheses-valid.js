/**
 * 0921. Minimum Add to Make Parentheses Valid
 *
 * Link: https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-03-19
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 * - Stack (topic_15)
 * - Greedy (topic_17)
 *
 * Stats:
 * - Total Accepted: 694,056
 * - Total Submissions: 932,541
 * - Acceptance Rate: 74.4%
 *
 * Similar Problems:
 * - minimum-number-of-swaps-to-make-the-string-balanced (Medium)
 */

/**
 * Approach: Stack
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} s
 * @return {number}
 */
const minAddToMakeValid = (s) => {
        const stack = [];

        for (const c of s) {
                if (c === ')' && stack.at(-1) === '(') {
                        stack.pop();
                } else {
                        stack.push(c);
                }
        }

        return stack.length;
};

export { minAddToMakeValid };
