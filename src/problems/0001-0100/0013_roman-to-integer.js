/**
 * 0013. Roman to Integer
 *
 * Link: https://leetcode.com/problems/roman-to-integer/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-02-07
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Hash Table (topic_6)
 * - Math (topic_8)
 * - String (topic_10)
 *
 * Stats:
 * - Total Accepted: 5,730,127
 * - Total Submissions: 8,634,977
 * - Acceptance Rate: 66.4%
 *
 * Similar Problems:
 * - integer-to-roman (Medium)
 */

/**
 * Approach: Hash Map [Optimal]
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
        const map = {
                I: 1,
                V: 5,
                X: 10,
                L: 50,
                C: 100,
                D: 500,
                M: 1000,
        };

        let res = 0;

        for (let i = 0; i < s.length; i++) {
                const c = map[s[i]];
                const d = map[s[i + 1]];
                res += c < d ? -c : c;
        }

        return res;
};

/**
 * Approach: Hash Map
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {string} s
 * @return {number}
 */
const romanToInt1 = (s) => {
        const map = {
                I: 1,
                V: 5,
                X: 10,
                L: 50,
                C: 100,
                D: 500,
                M: 1000,
        };

        const set = new Set(['IV', 'IX', 'XL', 'XC', 'CD', 'CM']);
        let res = 0;

        for (let i = 0; i < s.length; i++) {
                const c = s[i];
                const d = s[i + 1];

                if (set.has(c + d)) {
                        res += map[d] - map[c];
                        i++;
                } else {
                        res += map[c];
                }
        }

        return res;
};

export { romanToInt, romanToInt1 };
