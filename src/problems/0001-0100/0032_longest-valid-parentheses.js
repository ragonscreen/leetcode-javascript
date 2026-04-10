/**
 * 0032. Longest Valid Parentheses
 *
 * Link: https://leetcode.com/problems/longest-valid-parentheses/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-04-11
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 * - Dynamic Programming (topic_13)
 * - Stack (topic_15)
 *
 * Stats:
 * - Total Accepted: 1,090,554
 * - Total Submissions: 2,832,450
 * - Acceptance Rate: 38.5%
 *
 * Similar Problems:
 * - valid-parentheses (Easy)
 */

/**
 * Approach: Stack
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = (s) => {
        const stack = [['start', 0]];
        let res = 0;

        for (const c of s) {
                if (c === '(') {
                        stack.push(['(', 0]);
                        continue;
                }

                if (stack.at(-1)[0] !== '(') {
                        stack.push([')', 0]);
                        continue;
                }

                const val = stack.pop()[1];
                const [topC, topV] = stack.pop();
                const newVal = topV + val + 1;
                stack.push([topC, newVal]);
                res = Math.max(res, newVal);
        }

        return 2 * res;
};

export { longestValidParentheses };
