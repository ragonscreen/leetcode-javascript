/**
 * 0383. Ransom Note
 * Link: https://leetcode.com/problems/ransom-note/
 * Difficulty: Easy
 * Date: 2026-02-27
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Hash Map
 * Time Complexity: O(n)
 * Space Complexity: O(m)
 * `n` = length of `magazine`; `m` = number of unique characters in `magazine`
 *
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
        const map = new Map();

        for (const c of magazine) {
                map.set(c, (map.get(c) || 0) + 1);
        }

        for (const c of ransomNote) {
                const v = map.get(c);

                if (!v) {
                        return false;
                }

                map.set(c, v - 1);
        }

        return true;
};

export { canConstruct };
