/**
 * 3345. Smallest Divisible Digit Product I
 *
 * Link: https://leetcode.com/problems/smallest-divisible-digit-product-i/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-08-26
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Math (topic_8)
 * - Enumeration (topic_61066)
 * - Mid Level (position_mid-level)
 * - Biweekly Contest 143 (contest_biweekly-contest-143)
 *
 * Stats:
 * - Total Accepted: 206,397
 * - Total Submissions: 282,581
 * - Acceptance Rate: 73.0%
 *
 * Similar Problems:
 * - smallest-number-with-given-digit-product (Medium) (Premium)
 */

/**
 * Approach: Math
 * Time Complexity: O(K log N)
 * Space Complexity: O(1)
 * `N` = `n`, `K` = unbounded constant
 *
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
const smallestNumber = (n, t) => {
        const f = (num) => {
                let mult = 1;

                while (num) {
                        const d = num % 10;
                        mult *= d;
                        num = 0 | (num / 10);
                }

                return mult;
        };

        while (true) {
                if (f(n) % t === 0) {
                        return n;
                }

                n++;
        }
};

export { smallestNumber };
