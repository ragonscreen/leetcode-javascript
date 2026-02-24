/**
 * 1768. Merge Strings Alternately
 * Link: https://leetcode.com/problems/merge-strings-alternately/
 * Difficulty: Easy
 * Date: 2026-02-24
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Iteration
 * Time Complexity: O(max(n, m))
 * Space Complexity: O(1)
 * `n` = length of `word1`; `m` = length of `word2`
 *
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = (word1, word2) => {
        const res = [];
        const min = Math.min(word1.length, word2.length);
        let i = -1;

        while (++i < min) {
                res.push(word1[i]);
                res.push(word2[i]);
        }

        const next = min === word1.length ? word2.slice(i) : word1.slice(i);

        return res.join('') + next;
};

export { mergeAlternately };
