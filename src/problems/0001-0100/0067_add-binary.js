/**
 * 0067. Add Binary
 *
 * Link: https://leetcode.com/problems/add-binary/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-04-14
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Math (topic_8)
 * - String (topic_10)
 * - Bit Manipulation (topic_19)
 * - Simulation (topic_61055)
 *
 * Stats:
 * - Total Accepted: 2,321,484
 * - Total Submissions: 4,009,182
 * - Acceptance Rate: 57.9%
 *
 * Similar Problems:
 * - add-to-array-form-of-integer (Easy)
 * - plus-one (Easy)
 * - add-two-numbers (Medium)
 * - multiply-strings (Medium)
 */

/**
 * Approach: Bit Manipulation + Math + Two Pointers
 * Time Complexity: O(max(n, m))
 * Space Complexity: O(1) auxiliary, O(max(n, m)) total
 *
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
        const n = a.length;
        const m = b.length;
        const res = new Array(Math.max(n, m) + 1);
        let p = n - 1;
        let q = m - 1;
        let idx = res.length - 1;
        let carry = 0;

        while (p > -1 || q > -1 || carry) {
                const x = Number(a[p--] ?? 0);
                const y = Number(b[q--] ?? 0);
                const digit = x ^ y ^ carry;
                res[idx--] = digit;
                carry = (x & y) | (y & carry) | (x & carry);
        }

        return res.join('');
};

/**
 * Approach: Math + Two Pointers
 * Time Complexity: O(max(n, m))
 * Space Complexity: O(1) auxiliary, O(max(n, m)) total
 *
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary1 = (a, b) => {
        const n = a.length;
        const m = b.length;
        const res = new Array(Math.max(n, m) + 1);
        let p = n - 1;
        let q = m - 1;
        let idx = res.length - 1;
        let carry = 0;

        while (p > -1 || q > -1 || carry) {
                const sum = Number(a[p--] ?? 0) + Number(b[q--] ?? 0) + carry;
                res[idx--] = sum % 2;
                carry = Math.floor(sum / 2);
        }

        return res.join('');
};

export { addBinary, addBinary1 };
