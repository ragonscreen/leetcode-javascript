/**
 * 0242. Valid Anagram
 * Link: https://leetcode.com/problems/valid-anagram/
 * Difficulty: Easy
 * Date: 2025-12-05
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Hash Map
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
        if (s.length !== t.length) {
                return false;
        }

        const map = new Map();

        for (let i = 0; i < s.length; i++) {
                const charS = s[i];
                const charT = t[i];
                map.set(charS, (map.get(charS) || 0) + 1);
                map.set(charT, (map.get(charT) || 0) - 1);
        }

        for (const count of map.values()) {
                if (count !== 0) {
                        return false;
                }
        }

        return true;
};

export { isAnagram };
