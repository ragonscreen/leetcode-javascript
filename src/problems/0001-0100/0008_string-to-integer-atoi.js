/**
 * 0008. String to Integer (atoi)
 *
 * Link: https://leetcode.com/problems/string-to-integer-atoi/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-12
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 *
 * Stats:
 * - Total Accepted: 2,408,701
 * - Total Submissions: 11,563,856
 * - Acceptance Rate: 20.8%
 *
 * Similar Problems:
 * - check-if-numbers-are-ascending-in-a-sentence (Easy)
 * - reverse-integer (Medium)
 * - valid-number (Hard)
 */

/**
 * Approach: Simulation [Optimal]
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary, O(n) total
 *
 * @param {string} s
 * @return {number}
 */
const myAtoi = (s) => {
        const MAX_VAL = 2 ** 31 - 1;
        const MIN_VAL = -(2 ** 31);
        const n = s.length;
        let i = 0;

        while (i < n && s[i] === ' ') {
                i++;
        }

        if (i === n) {
                return 0;
        }

        const sign = s[i] === '-' ? -1 : 1;

        if (s[i] === '-' || s[i] === '+') {
                i++;
        }

        let res = 0;

        while (i < n && s[i] >= '0' && s[i] <= '9') {
                res = res * 10 + Number(s[i]);

                if (sign === 1 && res >= MAX_VAL) {
                        return MAX_VAL;
                }

                if (sign === -1 && -res <= MIN_VAL) {
                        return MIN_VAL;
                }

                i++;
        }

        return res * sign;
};

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary, O(n) total
 *
 * @param {string} s
 * @return {number}
 */
const myAtoi1 = (s) => {
        const max = 2 ** 31 - 1;
        const min = -(2 ** 31);
        let seenWsp = false;
        let seenSign = false;
        let seenDigit = false;
        let isNegative = false;
        const digits = [];

        for (let i = 0; i < s.length; i++) {
                const c = s[i];

                if (c === ' ') {
                        if (seenWsp || seenSign || seenDigit) {
                                break;
                        }

                        while (i < s.length && s[i] === ' ') {
                                i++;
                        }

                        seenWsp = true;
                        i--;
                        continue;
                }

                if (c === '+' || c === '-') {
                        if (seenSign || seenDigit) {
                                break;
                        }

                        seenSign = true;
                        isNegative = c === '-';
                        continue;
                }

                if (Number.isNaN(Number(c))) {
                        break;
                }

                seenDigit = true;

                if (!digits.length && c === '0') {
                        continue;
                }

                digits.push(c);
        }

        let num = Number(digits.join(''));
        num *= isNegative && num !== 0 ? -1 : 1;

        if (num > max) {
                num = max;
        }

        if (num < min) {
                num = min;
        }

        return num;
};

export { myAtoi, myAtoi1 };
