/**
 * 0344. Reverse String
 * Link: https://leetcode.com/problems/reverse-string/
 * Difficulty: Easy
 * Date: 2026-02-06
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Iteration
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {character[]} s
 * @return {void}
 */
const reverseString = (s) => {
        const n = s.length;

        for (let i = 0; i < Math.floor(n / 2); i++) {
                [s[i], s[n - 1 - i]] = [s[n - 1 - i], s[i]];
        }

        return s;
};

export { reverseString };
