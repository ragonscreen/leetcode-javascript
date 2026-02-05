/**
 * 0014. Longest Common Prefix
 * Link: https://leetcode.com/problems/longest-common-prefix/
 * Difficulty: Easy
 * Date: 2026-02-05
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Hash Set
 * Time Complexity: O(n * m)
 * Space Complexity: O(m)
 * `n` = length of `strs`; `m` = length of `strs[0]`
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
 * Implementation: Vertical Scanning
 * Time Complexity: O(n * m)
 * Space Complexity: O(1)
 * `n` = length of `strs`; `m` = length of shortest string in `strs`
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
