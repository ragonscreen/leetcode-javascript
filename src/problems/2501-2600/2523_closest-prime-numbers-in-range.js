/**
 * 2523. Closest Prime Numbers in Range
 *
 * Link: https://leetcode.com/problems/closest-prime-numbers-in-range/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-20
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Math (topic_8)
 * - Number Theory (topic_61067)
 *
 * Stats:
 * - Total Accepted: 190,079
 * - Total Submissions: 367,495
 * - Acceptance Rate: 51.7%
 *
 * Similar Problems:
 * - count-ways-to-make-array-with-product (Hard)
 */

/**
 * Approach: Sieve of Eratosthenes
 * Time Complexity: O(n log log n)
 * Space Complexity: O(n)
 * `n` = length of `right`
 *
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const closestPrimes = (left, right) => {
        const SIEVE = new Uint32Array(right + 1).fill(1);

        if (!SIEVE[0]) {
                return;
        }

        SIEVE[0] = 0;
        SIEVE[1] = 0;

        for (let i = 2; i <= Math.sqrt(right); i++) {
                if (!SIEVE[i]) {
                        continue;
                }

                for (let j = i ** 2; j <= right; j += i) {
                        SIEVE[j] = 0;
                }
        }

        let i = left;

        while (i <= right && !SIEVE[i]) {
                i++;
        }

        // no primes in range
        if (i > right) {
                return [-1, -1];
        }

        let j = i;
        i++;

        while (i <= right && !SIEVE[i]) {
                i++;
        }

        // one prime in range
        if (i > right) {
                return [-1, -1];
        }

        const res = new Uint32Array(2);
        let min = Number.MAX_SAFE_INTEGER;

        while (i <= right) {
                while (i <= right && !SIEVE[i]) {
                        i++;
                }

                if (i - j < min) {
                        min = i - j;
                        res[0] = j;
                        res[1] = i;
                }

                j = i;
                i++;
        }

        return res;
};

export { closestPrimes };
