/**
 * 0402. Remove K Digits
 *
 * Link: https://leetcode.com/problems/remove-k-digits/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-03-19
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 * - Stack (topic_15)
 * - Greedy (topic_17)
 * - Monotonic Stack (topic_61054)
 *
 * Stats:
 * - Total Accepted: 717,028
 * - Total Submissions: 1,963,781
 * - Acceptance Rate: 36.5%
 *
 * Similar Problems:
 * - remove-digit-from-number-to-maximize-result (Easy)
 * - append-k-integers-with-minimal-sum (Medium)
 * - find-the-most-competitive-subsequence (Medium)
 * - minimum-operations-to-make-a-special-number (Medium)
 * - monotone-increasing-digits (Medium)
 * - create-maximum-number (Hard)
 */

/**
 * Approach: Monotonic Stack
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
const removeKdigits = (num, k) => {
        const stack = [];
        let removed = 0;

        for (const v of num) {
                while (v < stack.at(-1) && removed < k) {
                        stack.pop();
                        removed++;
                }

                stack.push(v);
        }

        while (removed < k) {
                stack.pop();
                removed++;
        }

        return stack.join('').replace(/^0+/, '') || '0';
};

export { removeKdigits };
