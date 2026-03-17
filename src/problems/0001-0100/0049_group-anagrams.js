/**
 * 0049. Group Anagrams
 *
 * Link: https://leetcode.com/problems/group-anagrams/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2025-12-08
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - String (topic_10)
 * - Sorting (topic_61049)
 *
 * Stats:
 * - Total Accepted: 4,582,789
 * - Total Submissions: 6,341,947
 * - Acceptance Rate: 72.3%
 *
 * Similar Problems:
 * - find-resultant-array-after-removing-anagrams (Easy)
 * - valid-anagram (Easy)
 * - group-shifted-strings (Medium)
 * - count-anagrams (Hard)
 */

/**
 * Approach: Hashing with Prime Numbers
 * Time Complexity: O(n * m)
 * Space Complexity: O(n)
 * `n` = length of `strs`, `m` = length of the longest string in `strs`
 *
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
        const groups = {};
        const primes = [
                2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59,
                61, 67, 71, 73, 79, 83, 89, 97, 101,
        ];

        for (const str of strs) {
                let hash = 1;

                for (const c of str) {
                        const code = c.charCodeAt() - 'a'.charCodeAt();
                        hash *= primes[code];
                        hash %= 1e9 + 7;
                }

                groups[hash] ??= [];
                groups[hash].push(str);
        }

        return Object.values(groups);
};

export { groupAnagrams };
