/**
 * 3174. Clear Digits
 *
 * Link: https://leetcode.com/problems/clear-digits/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-03-20
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 * - Stack (topic_15)
 * - Simulation (topic_61055)
 *
 * Stats:
 * - Total Accepted: 277,442
 * - Total Submissions: 335,586
 * - Acceptance Rate: 82.7%
 */

/**
 * Approach: Stack
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} s
 * @return {string}
 */
const clearDigits = (s) => {
        const stack = [];

        for (const c of s) {
                const v = c.charCodeAt();

                if (v > 47 && v < 58) {
                        stack.pop();
                } else {
                        stack.push(c);
                }
        }

        return stack.join('');
};

export { clearDigits };
