/**
 * 3805. Count Caesar Cipher Pairs
 *
 * Link: https://leetcode.com/problems/count-caesar-cipher-pairs/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-30
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Math (topic_8)
 * - String (topic_10)
 * - Counting (topic_61062)
 *
 * Stats:
 * - Total Accepted: 26,355
 * - Total Submissions: 51,550
 * - Acceptance Rate: 51.1%
 */

/**
 * Approach: Hash Map
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string[]} words
 * @return {number}
 */
const countPairs = (words) => {
        const ord = (c) => c.charCodeAt() - 97;
        const map = new Map();

        for (const w of words) {
                const diffs = [];

                for (let i = 1; i < w.length; i++) {
                        diffs.push((ord(w[i]) - ord(w[i - 1]) + 26) % 26);
                }

                const key = diffs.join('.');
                map.set(key, (map.get(key) || 0) + 1);
        }

        let res = 0;

        for (const v of map.values()) {
                res += (v * (v - 1)) / 2;
        }

        return res;
};

export { countPairs };
