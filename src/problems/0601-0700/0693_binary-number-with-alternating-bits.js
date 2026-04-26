/**
 * 0693. Binary Number with Alternating Bits
 *
 * Link: https://leetcode.com/problems/binary-number-with-alternating-bits/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-04-26
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Bit Manipulation (topic_19)
 *
 * Stats:
 * - Total Accepted: 301,114
 * - Total Submissions: 431,034
 * - Acceptance Rate: 69.9%
 *
 * Similar Problems:
 * - number-of-1-bits (Easy)
 */

/**
 * Approach: Bit Manipulation [Optimal]
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 *
 * @param {number} n
 * @return {boolean}
 */
const hasAlternatingBits = (n) => {
        return (n & (n << 1)) === 0 && (n & (n >> 2)) === n >> 2;
};

/**
 * Approach: Bit Manipulation
 * Time Complexity: O(log n)
 * Space Complexity: O(log n)
 *
 * @param {number} n
 * @return {boolean}
 */
const hasAlternatingBits1 = (n) => {
        const s = n.toString(2);

        for (let i = 1; i < s.length; i++) {
                if ((s[i] ^ s[i - 1]) === 0) {
                        return false;
                }
        }

        return true;
};

export { hasAlternatingBits, hasAlternatingBits1 };
