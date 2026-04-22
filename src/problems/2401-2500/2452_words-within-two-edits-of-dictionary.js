/**
 * 2452. Words Within Two Edits of Dictionary
 *
 * Link: https://leetcode.com/problems/words-within-two-edits-of-dictionary/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-22
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - String (topic_10)
 * - Trie (topic_27)
 *
 * Stats:
 * - Total Accepted: 29,643
 * - Total Submissions: 47,912
 * - Acceptance Rate: 61.9%
 *
 * Similar Problems:
 * - word-ladder (Hard)
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n * m)
 * Space Complexity: O(1) auxiliary, O(n) total
 * `n` = length of `queries`, `m` = length of `dictionary`
 *
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 */
const twoEditWords = (queries, dictionary) => {
        const res = [];

        querySearch: for (const q of queries) {
                wordSearch: for (const w of dictionary) {
                        let diff = 0;

                        for (let i = 0; i < w.length; i++) {
                                if (w[i] !== q[i]) {
                                        diff++;
                                }

                                if (diff > 2) {
                                        continue wordSearch;
                                }
                        }

                        res.push(q);
                        continue querySearch;
                }
        }

        return res;
};

export { twoEditWords };
