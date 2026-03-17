/**
 * 0249. Group Shifted Strings
 *
 * Link: https://leetcode.com/problems/group-shifted-strings/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-02-04
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - String (topic_10)
 *
 * Stats:
 * - Total Accepted: 314,570
 * - Total Submissions: 464,256
 * - Acceptance Rate: 67.8%
 *
 * Similar Problems:
 * - find-maximum-number-of-string-pairs (Easy)
 * - group-anagrams (Medium)
 */

/**
 * Approach: Hash Map
 * Time Complexity: O(n * m)
 * Space Complexity: O(n * m)
 * `n` = length of `strings`, `m` = length of the longest string in `strings`
 *
 * @param {string[]} strings
 * @return {string[][]}
 */
const groupStrings = (strings) => {
        const map = {};

        for (const str of strings) {
                let key = [];

                for (let i = 1; i < str.length; i++) {
                        let diff = str.charCodeAt(i) - str.charCodeAt(i - 1);

                        if (diff < 0) {
                                diff += 26;
                        }

                        key.push(diff);
                }

                key = key.join('.');
                map[key] ??= [];
                map[key].push(str);
        }

        return Object.values(map);
};

export { groupStrings };
