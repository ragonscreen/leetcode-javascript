/**
 * 0071. Simplify Path
 * Link: https://leetcode.com/problems/simplify-path/
 * Difficulty: Medium
 * Date: 2026-03-05
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Stack
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
