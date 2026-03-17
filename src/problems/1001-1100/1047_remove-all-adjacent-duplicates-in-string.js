/**
 * 1047. Remove All Adjacent Duplicates In String
 *
 * Link: https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-02-17
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 * - Stack (topic_15)
 *
 * Stats:
 * - Total Accepted: 852,048
 * - Total Submissions: 1,168,434
 * - Acceptance Rate: 72.9%
 *
 * Similar Problems:
 * - minimize-string-length (Easy)
 * - remove-all-adjacent-duplicates-in-string-ii (Medium)
 * - removing-stars-from-a-string (Medium)
 */

/**
 * Approach: Stack
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} s
 * @return {string}
 */
const removeDuplicates = (s) => {
        const stack = new Array(s.length);

        for (const c of s) {
                if (stack.at(-1) === c) {
                        stack.pop();
                } else {
                        stack.push(c);
                }
        }

        return stack.join('');
};

export { removeDuplicates };
