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
 * - longest-common-prefix-after-at-most-one-removal (Medium) (Premium)
 * - longest-common-suffix-queries (Hard)
 */

class TrieNode {
        constructor() {
                this.children = {};
        }
}

/**
 * Approach: Vertical Scanning
 * Time Complexity: O(n * m)
 * Space Complexity: O(1)
 * `n` = `strs.length`, `m` = `min(strs[i].length)`
 *
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
        const str = strs[0];

        for (let i = 0; i < str.length; i++) {
                const c = str[i];

                for (let j = 1; j < strs.length; j++) {
                        if (strs[j][i] !== c) {
                                return str.slice(0, i);
                        }
                }
        }

        return str;
};

/**
 * Approach: Horizontal Scanning
 * Time Complexity: O(n * m)
 * Space Complexity: O(1)
 * `n` = `strs.length`, `m` = `min(strs[i].length)`
 *
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix1 = (strs) => {
        const n = strs.length;
        let mnstr = strs[0];

        for (let i = 0; i < n; i++) {
                const str = strs[i];

                if (str.length < mnstr.length) {
                        mnstr = str;
                }
        }

        let max = mnstr.length;

        for (let i = 0; i < n; i++) {
                const str = strs[i];
                let len = 0;

                while (len < max && str[len] === mnstr[len]) {
                        len++;
                }

                max = len;
        }

        return mnstr.slice(0, max);
};

/**
 * Approach: Trie
 * Time Complexity: O(n * m)
 * Space Complexity: O(m)
 * `n` = `strs.length`, `m` = `min(strs[i].length)`
 *
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix2 = (strs) => {
        const n = strs.length;
        let mnstr = strs[0];

        for (let i = 0; i < n; i++) {
                const str = strs[i];
                mnstr = str.length < mnstr.length ? str : mnstr;
        }

        const root = new TrieNode();
        let node0 = root;
        let max = mnstr.length;

        for (let j = 0; j < max; j++) {
                const char = mnstr[j];
                node0.children[char] = new TrieNode();
                node0 = node0.children[char];
        }

        for (let i = 0; i < n; i++) {
                const str = strs[i];
                let node = root;
                let len = 0;

                for (; len < max; len++) {
                        const char = str[len];

                        if (!node.children[char]) {
                                break;
                        }

                        node = node.children[char];
                }

                max = len;
        }

        return mnstr.slice(0, max);
};

export { longestCommonPrefix, longestCommonPrefix1, longestCommonPrefix2 };
