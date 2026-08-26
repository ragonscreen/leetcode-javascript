/**
 * 3302. Find the Lexicographically Smallest Valid Sequence
 *
 * Link: https://leetcode.com/problems/find-the-lexicographically-smallest-valid-sequence/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-08-27
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Two Pointers (topic_9)
 * - String (topic_10)
 * - Dynamic Programming (topic_13)
 * - Greedy (topic_17)
 * - Staff (position_staff)
 * - Biweekly Contest 140 (contest_biweekly-contest-140)
 *
 * Stats:
 * - Total Accepted: 82,119
 * - Total Submissions: 142,174
 * - Acceptance Rate: 57.8%
 *
 * Similar Problems:
 * - smallest-k-length-subsequence-with-occurrences-of-a-letter (Hard)
 */

/**
 * Approach: Greedy
 * Time Complexity: O(n)
 * Space Complexity: O(m)
 * `n` = `word1.length`, `m` = `word2.length`
 *
 * @param {string} word1
 * @param {string} word2
 * @return {number[]}
 */
const validSequence = (word1, word2) => {
        const n = word1.length;
        const m = word2.length;
        const last = new Int32Array(m).fill(-1);

        for (let p = n - 1, q = m - 1; p > -1 && q > -1; p--) {
                if (word1[p] === word2[q]) {
                        last[q--] = p;
                }
        }

        const res = new Int32Array(m).fill(-1);

        for (let p = 0, q = 0, changed = false, ri = 0; p < n && q < m; p++) {
                if (word1[p] === word2[q]) {
                        res[ri++] = p;
                        q++;
                        continue;
                }

                if (changed) {
                        continue;
                }

                if (q === m - 1 || p < last[q + 1]) {
                        res[ri++] = p;
                        q++;
                        changed = true;
                }
        }

        return res.at(-1) === -1 ? [] : res;
};

export { validSequence };
