/**
 * 0438. Find All Anagrams in a String
 *
 * Link: https://leetcode.com/problems/find-all-anagrams-in-a-string/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-14
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Hash Table (topic_6)
 * - String (topic_10)
 * - Sliding Window (topic_55821)
 *
 * Stats:
 * - Total Accepted: 1,191,534
 * - Total Submissions: 2,224,311
 * - Acceptance Rate: 53.6%
 *
 * Similar Problems:
 * - valid-anagram (Easy)
 * - permutation-in-string (Medium)
 */

/**
 * Approach: Sliding Window [Optimal]
 * Time Complexity: O(n + m)
 * Space Complexity: O(26) = O(1)
 * `n` = length of `s`, `m` = length of `p`
 *
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = (s, p) => {
        const set = new Array(26).fill(0);
        const a = 'a'.charCodeAt();
        let match = 26;

        for (const c of p) {
                const idx = c.charCodeAt() - a;

                if (set[idx] === 0) {
                        match--;
                }

                set[idx]++;
        }

        const curr = new Array(26).fill(0);
        const res = [];

        for (let l = 0, r = 0; r < s.length; r++) {
                const idx = s.charCodeAt(r) - a;
                curr[idx]++;
                let have = curr[idx];
                let need = set[idx];

                if (have === need) {
                        match++;
                } else if (have === need + 1) {
                        match--;
                }

                if (r - l + 1 < p.length) {
                        continue;
                }

                if (match === 26) {
                        res.push(l);
                }

                const idxL = s.charCodeAt(l++) - a;
                curr[idxL]--;
                have = curr[idxL];
                need = set[idxL];

                if (have === need) {
                        match++;
                } else if (have === need - 1) {
                        match--;
                }
        }

        return res;
};

/**
 * Approach: Sliding Window
 * Time Complexity: O(26 * n + m) = O(n + m)
 * Space Complexity: O(26) = O(1)
 * `n` = length of `s`, `m` = length of `p`
 *
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams1 = (s, p) => {
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

export { findAnagrams, findAnagrams1 };
