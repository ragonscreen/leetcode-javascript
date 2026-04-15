/**
 * 0017. Letter Combinations of a Phone Number
 *
 * Link: https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-16
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Hash Table (topic_6)
 * - String (topic_10)
 * - Backtracking (topic_14)
 *
 * Stats:
 * - Total Accepted: 2,993,406
 * - Total Submissions: 4,544,768
 * - Acceptance Rate: 65.9%
 *
 * Similar Problems:
 * - binary-watch (Easy)
 * - minimum-number-of-pushes-to-type-word-i (Easy)
 * - combination-sum (Medium)
 * - count-number-of-texts (Medium)
 * - generate-parentheses (Medium)
 * - minimum-number-of-pushes-to-type-word-ii (Medium)
 */

/**
 * Approach: BFS
 * Time Complexity: O(4^n * n)
 * Space Complexity: O(4^n) auxiliary, O(4^n * n) total
 *
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
        const map = [
                undefined,
                undefined,
                'abc',
                'def',
                'ghi',
                'jkl',
                'mno',
                'pqrs',
                'tuv',
                'wxyz',
        ];

        let res;
        let strs = [''];

        for (const digit of digits) {
                const chars = map[digit];
                res = new Array(strs.length * chars.length);
                let i = 0;

                for (const char of chars) {
                        for (const str of strs) {
                                res[i++] = str + char;
                        }
                }

                strs = res;
        }

        return res;
};

export { letterCombinations };
