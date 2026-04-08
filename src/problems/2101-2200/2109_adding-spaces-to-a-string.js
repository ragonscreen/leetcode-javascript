/**
 * 2109. Adding Spaces to a String
 *
 * Link: https://leetcode.com/problems/adding-spaces-to-a-string/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-08
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Two Pointers (topic_9)
 * - String (topic_10)
 * - Simulation (topic_61055)
 *
 * Stats:
 * - Total Accepted: 224,018
 * - Total Submissions: 311,997
 * - Acceptance Rate: 71.8%
 */

/**
 * Approach: Simulation [Optimal]
 * Time Complexity: O(n + m)
 * Space Complexity: O(1) auxiliary, O(n + m) total
 * `n` = length of `s`, `m` = length of `spaces`
 *
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
const addSpaces = (s, spaces) => {
        const res = new Array(spaces.length + 1);

        for (let i = 0; i < spaces.length; i++) {
                res[i] = s.slice(spaces[i - 1] ?? 0, spaces[i]);
        }

        res[res.length - 1] = s.slice(spaces.at(-1));

        return res.join(' ');
};

/**
 * Approach: Two Pointers
 * Time Complexity: O(n + m)
 * Space Complexity: O(1) auxiliary, O(n + m) total
 * `n` = length of `s`, `m` = length of `spaces`
 *
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
const addSpaces1 = (s, spaces) => {
        let res = '';

        for (let i = 0, j = 0; i < s.length; i++) {
                if (i === spaces[j]) {
                        res += ' ';
                        j++;
                }

                res += s[i];
        }

        return res;
};

export { addSpaces, addSpaces1 };
