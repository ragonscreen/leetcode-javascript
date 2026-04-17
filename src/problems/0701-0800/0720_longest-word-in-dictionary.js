/**
 * 0720. Longest Word in Dictionary
 *
 * Link: https://leetcode.com/problems/longest-word-in-dictionary/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-18
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - String (topic_10)
 * - Trie (topic_27)
 * - Sorting (topic_61049)
 *
 * Stats:
 * - Total Accepted: 191,819
 * - Total Submissions: 350,755
 * - Acceptance Rate: 54.7%
 *
 * Similar Problems:
 * - implement-magic-dictionary (Medium)
 * - longest-word-in-dictionary-through-deleting (Medium)
 * - longest-word-with-all-prefixes (Medium)
 */

/**
 * Approach: Sorting + Hash Set
 * Time Complexity: O(n log n + n * m)
 * Space Complexity: O(n)
 * `n` = length of `words`, `m` = average length of `words[i]`
 *
 * @param {string[]} words
 * @return {string}
 */
const longestWord = (words) => {
        words.sort();
        const set = new Set();
        let res = '';

        for (const w of words) {
                const m = w.length;

                if (m === 1 || set.has(w.slice(0, -1))) {
                        set.add(w);

                        if (m > res.length) {
                                res = w;
                        }
                }
        }

        return res;
};

/**
 * Approach: Hash Set
 * Time Complexity: O(n * m^2)
 * Space Complexity: O(n)
 * `n` = length of `words`, `m` = average length of `words[i]`
 *
 * @param {string[]} words
 * @return {string}
 */
const longestWord1 = (words) => {
        const set = new Set(words);
        let res = '';

        outer: for (const w of words) {
                const m = w.length;

                for (let i = 1; i < m; i++) {
                        if (!set.has(w.slice(0, i))) {
                                continue outer;
                        }
                }

                if (m > res.length || (m === res.length && w < res)) {
                        res = w;
                }
        }

        return res;
};

export { longestWord, longestWord1 };
