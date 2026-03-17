/**
 * 0383. Ransom Note
 *
 * Link: https://leetcode.com/problems/ransom-note/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-02-27
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Hash Table (topic_6)
 * - String (topic_10)
 * - Counting (topic_61062)
 *
 * Stats:
 * - Total Accepted: 1,911,793
 * - Total Submissions: 2,909,106
 * - Acceptance Rate: 65.7%
 *
 * Similar Problems:
 * - find-words-that-can-be-formed-by-characters (Easy)
 * - stickers-to-spell-word (Hard)
 */

/**
 * Approach: Hash Map
 * Time Complexity: O(n)
 * Space Complexity: O(m)
 * `n` = length of `magazine`, `m` = number of unique characters in `magazine`
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
