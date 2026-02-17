/**
 * 2390. Removing Stars From a String
 * Link: https://leetcode.com/problems/removing-stars-from-a-string/
 * Difficulty: Medium
 * Date: 2026-02-17
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Simulation (Optimal)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {string} s
 * @return {string}
 */
const removeStars = (s) => {
        const res = [];
        let rem = 0;

        for (let i = s.length - 1; i >= 0; i--) {
                const c = s[i];

                if (c === '*') {
                        rem++;
                        continue;
                }

                if (rem) {
                        rem--;
                        continue;
                }

                res.push(c);
        }

        return res.reverse().join('');
};

/**
 * Implementation: Stack
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {string} s
 * @return {string}
 */
const removeStars1 = (s) => {
        const stack = [];

        for (const c of s) {
                if (c === '*') {
                        stack.pop();
                } else {
                        stack.push(c);
                }
        }

        return stack.join('');
};

export { removeStars, removeStars1 };
