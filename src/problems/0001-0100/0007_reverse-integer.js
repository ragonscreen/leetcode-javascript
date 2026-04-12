/**
 * 0007. Reverse Integer
 *
 * Link: https://leetcode.com/problems/reverse-integer/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-12
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Math (topic_8)
 *
 * Stats:
 * - Total Accepted: 4,930,801
 * - Total Submissions: 15,534,268
 * - Acceptance Rate: 31.7%
 *
 * Similar Problems:
 * - a-number-after-a-double-reversal (Easy)
 * - reverse-bits (Easy)
 * - count-number-of-distinct-integers-after-reverse-operations (Medium)
 * - string-to-integer-atoi (Medium)
 */

/**
 * Approach: Math + Simulation [Optimal]
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 *
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
        const MAX_VAL = 2 ** 31;
        const sign = x < 0 ? -1 : 1;
        let res = 0;
        let _x = Math.abs(x);

        while (_x) {
                res = res * 10 + (_x % 10);
                _x = Math.floor(_x / 10);

                if (res > MAX_VAL - 1 || (x < 0 && res < -MAX_VAL)) {
                        return 0;
                }
        }

        return res * sign;
};

/**
 * Approach: Simulation
 * Time Complexity: O(log n)
 * Space Complexity: O(log n)
 *
 * @param {number} x
 * @return {number}
 */
const reverse1 = (x) => {
        const MAX_VAL = 2 ** 31;
        const sign = x < 0 ? -1 : 1;
        const num = Number([...String(Math.abs(x))].reverse().join(''));

        if (num > MAX_VAL - 1 || (x < 0 && num < -MAX_VAL)) {
                return 0;
        }

        return num * sign;
};

export { reverse, reverse1 };
