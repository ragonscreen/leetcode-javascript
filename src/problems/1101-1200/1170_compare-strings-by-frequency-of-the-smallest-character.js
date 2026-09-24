/**
 * 1170. Compare Strings by Frequency of the Smallest Character
 *
 * Link: https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-24
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - String (topic_10)
 * - Binary Search (topic_11)
 * - Sorting (topic_61049)
 * - Senior (position_senior)
 * - Weekly Contest 151 (contest_weekly-contest-151)
 *
 * Stats:
 *
 * - Total Accepted: 96,022
 * - Total Submissions: 150,804
 * - Acceptance Rate: 63.7%
 */

/**
 * Approach: Counting Sort + Prefix Sum
 * Time Complexity: O((n + q) * L)
 * Space Complexity: O(L) auxiliary, O(L + q) total
 * `n` = `words.length`, `q` = `queries.length`, `L` = `max(words[i].length, queries[j].length)`
 *
 * @param {string[]} queries
 * @param {string[]} words
 * @returns {number[]}
 */
const numSmallerByFrequency = (queries, words) => {
        const f = (s) => {
                let mn = '}';
                let frq = 0;

                for (const c of s) {
                        if (c === mn) {
                                frq++;
                        } else if (c < mn) {
                                mn = c;
                                frq = 1;
                        }
                }

                return frq;
        };

        const q = queries.length;
        const mxlen = words.reduce((t, c) => Math.max(t, c.length), 0);
        const map = new Uint16Array(mxlen + 1);

        for (let i = 0; i < words.length; i++) map[f(words[i])]++;

        for (let i = mxlen - 1; i > -1; i--) map[i] += map[i + 1];

        const res = new Uint16Array(q);

        for (let i = 0; i < q; i++) res[i] = map[f(queries[i]) + 1];

        return res;
};

export { numSmallerByFrequency };
