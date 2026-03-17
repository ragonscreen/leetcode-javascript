/**
 * 1209. Remove All Adjacent Duplicates in String II
 *
 * Link: https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-02-17
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 * - Stack (topic_15)
 *
 * Stats:
 * - Total Accepted: 416,928
 * - Total Submissions: 683,149
 * - Acceptance Rate: 61.0%
 *
 * Similar Problems:
 * - minimize-string-length (Easy)
 * - remove-all-adjacent-duplicates-in-string (Easy)
 * - replace-non-coprime-numbers-in-array (Hard)
 */

/**
 * Approach: Stack
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const removeDuplicates = (s, k) => {
        const stackChar = [];
        const stackFreq = [];

        for (const c of s) {
                let freq = 1;

                if (stackChar.at(-1) === c) {
                        freq = stackFreq.at(-1) + 1;
                }

                if (freq !== k) {
                        stackChar.push(c);
                        stackFreq.push(freq);
                        continue;
                }

                for (let i = 0; i < k - 1; i++) {
                        stackChar.pop();
                        stackFreq.pop();
                }
        }

        return stackChar.join('');
};

export { removeDuplicates };
