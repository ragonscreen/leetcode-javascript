/**
 * 0066. Plus One
 *
 * Link: https://leetcode.com/problems/plus-one/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-04-15
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Math (topic_8)
 *
 * Stats:
 * - Total Accepted: 3,697,382
 * - Total Submissions: 7,422,648
 * - Acceptance Rate: 49.8%
 *
 * Similar Problems:
 * - add-binary (Easy)
 * - add-to-array-form-of-integer (Easy)
 * - minimum-operations-to-reduce-an-integer-to-0 (Medium)
 * - multiply-strings (Medium)
 * - plus-one-linked-list (Medium)
 */

/**
 * Approach: Math
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary, O(n) total
 *
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => {
        const n = digits.length;
        const res = new Array(n + 1);
        let carry = 1;
        let i = n - 1;

        while (i > -1 || carry) {
                const sum = (digits[i] ?? 0) + carry;
                const digit = sum % 10;
                carry = sum > 9 ? 1 : 0;
                res[i + 1] = digit;
                i--;
        }

        return res[0] ? res : res.slice(1);
};

export { plusOne };
