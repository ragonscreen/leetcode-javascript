/**
 * 3913. Sort Vowels by Frequency
 *
 * Link: https://leetcode.com/problems/sort-vowels-by-frequency/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-26
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Stats:
 * - Total Accepted: 16,139
 * - Total Submissions: 26,272
 * - Acceptance Rate: 61.4%
 */

/**
 * Approach: Hash Map
 * Time Complexity: O(n + 5 log 5) = O(n)
 * Space Complexity: O(5) = O(1) auxiliary, O(n) total
 *
 * @param {string} s
 * @return {string}
 */
const sortVowels = (s) => {
        const n = s.length;
        const map = new Map();

        for (let i = 0; i < n; i++) {
                const c = s[i];

                if (
                        c === 'a' ||
                        c === 'e' ||
                        c === 'i' ||
                        c === 'o' ||
                        c === 'u'
                ) {
                        map.set(c, (map.get(c) || 0) + 1);
                }
        }

        const entries = [...map].sort((a, b) => b[1] - a[1]);
        let res = '';
        let idx = 0;

        for (let i = 0; i < n; i++) {
                const c = s[i];

                if (
                        c === 'a' ||
                        c === 'e' ||
                        c === 'i' ||
                        c === 'o' ||
                        c === 'u'
                ) {
                        res += entries[idx][0];
                        entries[idx][1]--;

                        if (entries[idx][1] === 0) {
                                idx++;
                        }
                } else {
                        res += c;
                }
        }

        return res;
};

export { sortVowels };
