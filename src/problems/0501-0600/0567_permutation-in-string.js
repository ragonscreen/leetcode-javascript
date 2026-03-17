/**
 * 0567. Permutation in String
 *
 * Link: https://leetcode.com/problems/permutation-in-string/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-01-27
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Hash Table (topic_6)
 * - Two Pointers (topic_9)
 * - String (topic_10)
 * - Sliding Window (topic_55821)
 *
 * Stats:
 * - Total Accepted: 1,446,649
 * - Total Submissions: 2,981,192
 * - Acceptance Rate: 48.5%
 *
 * Similar Problems:
 * - find-all-anagrams-in-a-string (Medium)
 * - minimum-window-substring (Hard)
 */

/**
 * Approach: Sliding Window [Optimal]
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = length of `s2`
 *
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = (s1, s2) => {
        const k1 = new Array(26).fill(0);
        const k2 = new Array(26).fill(0);
        const a = 'a'.charCodeAt();

        for (let i = 0; i < s1.length; i++) {
                k1[s1.charCodeAt(i) - a]++;
                k2[s2.charCodeAt(i) - a]++;
        }

        let match = 0;

        for (let i = 0; i < 26; i++) {
                if (k1[i] === k2[i]) {
                        match++;
                }
        }

        let l = 0;
        let r = s1.length;

        while (r < s2.length) {
                if (match === 26) {
                        return true;
                }

                let i = s2.charCodeAt(r) - a;
                k2[i]++;
                match += k2[i] === k1[i] ? 1 : k2[i] === k1[i] + 1 ? -1 : 0;
                i = s2.charCodeAt(l) - a;
                k2[i]--;
                match += k2[i] === k1[i] ? 1 : k2[i] === k1[i] - 1 ? -1 : 0;
                r++;
                l++;
        }

        return match === 26;
};

/**
 * Approach: Sliding Window
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = length of `s2`
 *
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion1 = (s1, s2) => {
        const key = new Array(26).fill(0);
        let l = 0;
        let r = s1.length - 1;

        for (let i = l; i <= r; i++) {
                key[s1.charCodeAt(i) - 'a'.charCodeAt()]--;
                key[s2.charCodeAt(i) - 'a'.charCodeAt()]++;
        }

        while (r < s2.length) {
                if (key.every((e) => e === 0)) {
                        return true;
                }

                r++;
                key[s2.charCodeAt(r) - 'a'.charCodeAt()]++;
                key[s2.charCodeAt(l) - 'a'.charCodeAt()]--;
                l++;
        }

        return false;
};

export { checkInclusion, checkInclusion1 };
