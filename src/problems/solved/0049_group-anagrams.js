/**
 * 0049. Group Anagrams
 * Link: https://leetcode.com/problems/group-anagrams/
 * Difficulty: Medium
 * Date: 2025-12-08
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Hashing with Prime Numbers
 * Time Complexity: O(n * m)
 * Space Complexity: O(n)
 * n === strs.length; m === length of largest string in strs
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
