/**
 * 1190. Reverse Substrings Between Each Pair of Parentheses
 *
 * Link: https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-03-18
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 * - Stack (topic_15)
 *
 * Stats:
 * - Total Accepted: 243,433
 * - Total Submissions: 338,329
 * - Acceptance Rate: 72.0%
 */

/**
 * Approach: Stack
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} s
 * @return {string}
 */
const reverseParentheses = (s) => {
        const stackLevel = [];
        const stackChar = [];
        let level = 0;
        let l = 0;

        for (let r = 0; r < s.length; r++) {
                if (!(s[r] === '(' || s[r] === ')')) {
                        continue;
                }

                if (s[r] === '(') {
                        stackChar.push(s.slice(l, r));
                        stackLevel.push(level);
                        l = r + 1;
                        level++;
                        continue;
                }

                let str = '';

                for (let i = r - 1; i >= l; i--) {
                        str += s[i];
                }

                while (level === stackLevel.at(-1)) {
                        stackLevel.pop();
                        const v = stackChar.pop();

                        for (let i = v.length - 1; i >= 0; i--) {
                                str += v[i];
                        }
                }

                level--;
                stackChar.push(str);
                stackLevel.push(level);
                l = r + 1;
        }

        return stackChar.join('') + s.slice(l, s.length);
};

export { reverseParentheses };
