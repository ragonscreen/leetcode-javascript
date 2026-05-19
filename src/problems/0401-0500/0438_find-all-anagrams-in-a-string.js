/**
 * 0438. Find All Anagrams in a String
 *
 * Link: https://leetcode.com/problems/find-all-anagrams-in-a-string/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-14 (Updated: 2026-05-20)
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Hash Table (topic_6)
 * - String (topic_10)
 * - Sliding Window (topic_55821)
 * - Junior (position_junior)
 *
 * Stats:
 * - Total Accepted: 1,191,534
 * - Total Submissions: 2,224,311
 * - Acceptance Rate: 53.6%
 *
 * Similar Problems:
 * - valid-anagram (Easy)
 * - permutation-in-string (Medium)
 *
 * Custom Details:
 * - Level 5 (custom-level_5)
 * - Frequency Counting (custom-topic_frequency-counting)
 * - Sliding Window (custom-topic_sliding-window)
 * - Sliding Window Fixed Size (custom-tag_sliding-window-fixed-size)
 * - Sliding Window with Frequency Counting (custom-tag_sliding-window-with-frequency-counting)
 */

/**
 * Approach: Sliding Window [Space Optimized]
 * Time Complexity: O(n + m)
 * Space Complexity: O(26) = O(1)
 * `n` = `s.length`, `m` = `p.length`
 *
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = (s, p) => {
        const ord = (c) => c.charCodeAt() - 97;
        const n = s.length;
        const m = p.length;
        const key = new Int16Array(26);
        let match = 26;

        for (let i = 0; i < m; i++) {
                const cnt = ++key[ord(p[i])];
                match -= cnt === 1 ? 1 : 0;
        }

        const res = [];

        for (let r = 0; r < n; r++) {
                const valr = ord(s[r]);
                const cntr = --key[valr];
                match += cntr === 0 ? 1 : cntr === -1 ? -1 : 0;

                if (r < m - 1) {
                        continue;
                }

                if (match === 26) {
                        res.push(r - m + 1);
                }

                const vall = ord(s[r - m + 1]);
                const cntl = ++key[vall];
                match += cntl === 0 ? 1 : cntl === 1 ? -1 : 0;
        }

        return res;
};

/**
 * Approach: Sliding Window [Optimal]
 * Time Complexity: O(n + m)
 * Space Complexity: O(26) = O(1)
 * `n` = `s.length`, `m` = `p.length`
 *
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams1 = (s, p) => {
        const ord = (c) => c.charCodeAt() - 97;
        const n = s.length;
        const m = p.length;
        const need = new Uint16Array(26);
        let match = 26;

        for (let i = 0; i < m; i++) {
                const cnt = ++need[ord(p[i])];
                match -= cnt === 1 ? 1 : 0;
        }

        const have = new Uint16Array(26);
        const res = [];

        for (let r = 0; r < n; r++) {
                const valr = ord(s[r]);
                const cntr = ++have[valr];
                const reqr = need[valr];
                match += cntr === reqr ? 1 : cntr === reqr + 1 ? -1 : 0;

                if (r < m - 1) {
                        continue;
                }

                if (match === 26) {
                        res.push(r - m + 1);
                }

                const vall = ord(s[r - m + 1]);
                const cntl = --have[vall];
                const reql = need[vall];
                match += cntl === reql ? 1 : cntl === reql - 1 ? -1 : 0;
        }

        return res;
};

/**
 * Approach: Sliding Window
 * Time Complexity: O(26 * n + m) = O(n + m)
 * Space Complexity: O(26) = O(1)
 * `n` = `s.length`, `m` = `p.length`
 *
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams2 = (s, p) => {
        let set = new Array(26).fill(0);
        const a = 'a'.charCodeAt();

        for (const c of p) {
                set[c.charCodeAt() - a]++;
        }

        set = set.join('.');
        const curr = new Array(26).fill(0);
        const res = [];

        for (let l = 0, r = 0; r < s.length; r++) {
                curr[s.charCodeAt(r) - a]++;

                if (r - l + 1 < p.length) {
                        continue;
                }

                if (curr.join('.') === set) {
                        res.push(l);
                }

                curr[s.charCodeAt(l++) - a]--;
        }

        return res;
};

export { findAnagrams, findAnagrams1, findAnagrams2 };
