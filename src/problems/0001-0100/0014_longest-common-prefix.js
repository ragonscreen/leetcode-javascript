/**
 * 0014. Longest Common Prefix
 *
 * Link: https://leetcode.com/problems/longest-common-prefix/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-02-05
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - String (topic_10)
 * - Trie (topic_27)
 *
 * Stats:
 * - Total Accepted: 5,589,816
 * - Total Submissions: 11,838,289
 * - Acceptance Rate: 47.2%
 *
 * Similar Problems:
 * - smallest-missing-integer-greater-than-sequential-prefix-sum (Easy)
 * - find-the-length-of-the-longest-common-prefix (Medium)
 * - longest-common-prefix-after-at-most-one-removal (Medium)
 * - longest-common-suffix-queries (Hard)
 */

/**
 * Approach: Hash Set
 * Time Complexity: O(n * m)
 * Space Complexity: O(m)
 * `n` = length of `strs`, `m` = length of the first string in `strs`
 *
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
        const set = new Set();

        for (let i = 0; i <= strs[0].length; i++) {
                set.add(strs[0].slice(0, i));
        }

        let len = strs[0].length;

        for (let i = 1; i < strs.length && len; i++) {
                const s = strs[i];
                len = Math.min(len, s.length);
                const prefix = s.slice(0, len);

                if (set.has(prefix)) {
                        continue;
                }

                len--;
                i = 0;
        }

        return strs[0].slice(0, len);
};

/**
 * Approach: Vertical Scanning
 * Time Complexity: O(n * m)
 * Space Complexity: O(1)
 * `n` = length of `strs`, `m` = length of the shortest string in `strs`
 *
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix1 = (strs) => {
        let i = 0;

        while (true) {
                const c = strs[0][i];
                let found = true;

                if (!c) {
                        break;
                }

                for (const str of strs) {
                        if (str[i] !== c) {
                                found = false;
                                break;
                        }
                }

                if (!found) {
                        break;
                }

                i++;
        }

        return strs[0].slice(0, i);
};

export { longestCommonPrefix, longestCommonPrefix1 };
