/**
 * 0071. Simplify Path
 *
 * Link: https://leetcode.com/problems/simplify-path/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-03-05
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 * - Stack (topic_15)
 *
 * Stats:
 * - Total Accepted: 1,296,287
 * - Total Submissions: 2,583,631
 * - Acceptance Rate: 50.2%
 */

/**
 * Approach: Stack
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} path
 * @return {string}
 */
const simplifyPath = (path) => {
        const stack = [];
        const dirs = path.split(/\/+/);

        for (const dir of dirs) {
                if (!dir || dir === '.') {
                        continue;
                }

                if (dir === '..') {
                        stack.pop();
                } else {
                        stack.push(dir);
                }
        }

        return `/${stack.join('/')}`;
};

export { simplifyPath };
