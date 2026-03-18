/**
 * 2197. Replace Non-Coprime Numbers in Array
 *
 * Link: https://leetcode.com/problems/replace-non-coprime-numbers-in-array/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-03-18
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Math (topic_8)
 * - Stack (topic_15)
 * - Number Theory (topic_61067)
 *
 * Stats:
 * - Total Accepted: 113,811
 * - Total Submissions: 197,261
 * - Acceptance Rate: 57.7%
 *
 * Similar Problems:
 * - number-of-pairs-of-interchangeable-rectangles (Medium)
 * - remove-all-adjacent-duplicates-in-string-ii (Medium)
 * - split-the-array-to-make-coprime-products (Hard)
 */

/**
 * Approach: Math + Stack
 * Time Complexity: O(n * log k)
 * Space Complexity: O(n)
 * `n` = length of `nums`, `k` = largest number encountered when calculating GCD
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const replaceNonCoprimes = (nums) => {
        const gcd = (a, b) => (b ? gcd(b, a % b) : a);
        const stack = [];

        for (const num of nums) {
                let val = num;

                while (stack.length) {
                        const top = stack.at(-1);
                        const g = gcd(top, val);

                        if (g === 1) {
                                break;
                        }

                        stack.pop();
                        val = (top * val) / g;
                }

                stack.push(val);
        }

        return stack;
};

export { replaceNonCoprimes };
