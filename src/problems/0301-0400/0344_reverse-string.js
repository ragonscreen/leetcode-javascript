/**
 * 0344. Reverse String
 *
 * Link: https://leetcode.com/problems/reverse-string/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-02-06
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Two Pointers (topic_9)
 * - String (topic_10)
 *
 * Stats:
 * - Total Accepted: 3,740,027
 * - Total Submissions: 4,639,130
 * - Acceptance Rate: 80.6%
 *
 * Similar Problems:
 * - reverse-string-ii (Easy)
 * - reverse-vowels-of-a-string (Easy)
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary, O(n) total
 *
 * @param {character[]} s
 * @return {void}
 */
const reverseString = (s) => {
        const n = s.length;

        for (let i = 0; i < Math.floor(n / 2); i++) {
                [s[i], s[n - 1 - i]] = [s[n - 1 - i], s[i]];
        }
};

export { reverseString };
