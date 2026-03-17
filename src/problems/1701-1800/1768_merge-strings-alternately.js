/**
 * 1768. Merge Strings Alternately
 *
 * Link: https://leetcode.com/problems/merge-strings-alternately/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-02-24
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Two Pointers (topic_9)
 * - String (topic_10)
 *
 * Stats:
 * - Total Accepted: 2,010,950
 * - Total Submissions: 2,449,592
 * - Acceptance Rate: 82.1%
 *
 * Similar Problems:
 * - minimum-additions-to-make-valid-string (Medium)
 * - zigzag-iterator (Medium)
 */

/**
 * Approach: Simulation
 * Time Complexity: O(max(n, m))
 * Space Complexity: O(1) auxiliary, O(n + m) total
 * `n` = length of `word1`, `m` = length of `word2`
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
