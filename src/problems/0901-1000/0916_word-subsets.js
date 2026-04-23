/**
 * 0916. Word Subsets
 *
 * Link: https://leetcode.com/problems/word-subsets/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-24
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - String (topic_10)
 *
 * Stats:
 * - Total Accepted: 265,809
 * - Total Submissions: 475,372
 * - Acceptance Rate: 55.9%
 */

/**
 * Approach: Hash Map
 * Time Complexity: O(n * j + 26 + m * k + 26) = O(n * j + m * k) [O(n + m)]
 * Space Complexity: O(26) = O(1)
 * `n` = length of `words1`, `m` = length of `words2`,
 * `j` = maximum length of `words1[i]`, `k` = maximum length of `words2[i]`
 *
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
const wordSubsets = (words1, words2) => {
        const maxCnt = new Int8Array(26);
        const a = 'a'.charCodeAt();

        for (const w of words2) {
                const cnt = new Int8Array(26);

                for (const c of w) {
                        cnt[c.charCodeAt() - a]++;
                }

                for (let i = 0; i < 26; i++) {
                        maxCnt[i] = Math.max(maxCnt[i], cnt[i]);
                }
        }

        const res = [];

        outer: for (const w of words1) {
                const cnt = new Int8Array(26);

                for (const c of w) {
                        cnt[c.charCodeAt() - a]++;
                }

                for (let i = 0; i < 26; i++) {
                        if (maxCnt[i] > cnt[i]) {
                                continue outer;
                        }
                }

                res.push(w);
        }

        return res;
};

/**
 * Approach: Hash Map + Prime Number Hash Function [TLE]
 * Time Complexity: O(n * j + n * m * k) [O(n * m)]
 * Space Complexity: O(n)
 * `n` = length of `words1`, `m` = length of `words2`,
 * `j` = maximum length of `words1[i]`, `k` = maximum length of `words2[i]`
 *
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
const wordSubsets1 = (words1, words2) => {
        const n = words1.length;
        const p = [
                2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59,
                61, 67, 71, 73, 79, 83, 89, 97, 101,
        ];
        const map = new Array(n);
        const a = 'a'.charCodeAt();

        for (let i = 0; i < n; i++) {
                let hash = BigInt(1);

                for (const c of words1[i]) {
                        hash *= BigInt(p[c.charCodeAt() - a]);
                }

                map[i] = hash;
        }

        const invalid = new Array(n);

        for (const w of words2) {
                let hash = BigInt(1);

                for (const c of w) {
                        hash *= BigInt(p[c.charCodeAt() - a]);
                }

                for (let i = 0; i < n; i++) {
                        if (invalid[i]) {
                                continue;
                        }

                        if (map[i] % hash) {
                                invalid[i] = true;
                        }
                }
        }

        const res = [];

        for (let i = 0; i < n; i++) {
                if (!invalid[i]) {
                        res.push(words1[i]);
                }
        }

        return res;
};

export { wordSubsets, wordSubsets1 };
