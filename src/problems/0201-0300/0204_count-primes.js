/**
 * 0204. Count Primes
 *
 * Link: https://leetcode.com/problems/count-primes/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-16
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Math (topic_8)
 * - Enumeration (topic_61066)
 * - Number Theory (topic_61067)
 *
 * Stats:
 * - Total Accepted: 1,259,270
 * - Total Submissions: 3,502,769
 * - Acceptance Rate: 36.0%
 *
 * Similar Problems:
 * - number-of-common-factors (Easy)
 * - ugly-number (Easy)
 * - find-the-count-of-numbers-which-are-not-special (Medium)
 * - perfect-squares (Medium)
 * - prime-pairs-with-target-sum (Medium)
 * - ugly-number-ii (Medium)
 */

/**
 * Approach: Sieve of Eratosthenes
 * Time Complexity: O(n log log n)
 * Space Complexity: O(n)
 *
 * @param {number} n
 * @return {number}
 */
const countPrimes = (n) => {
        const sieve = new Array(n).fill(1);
        sieve[0] = 0;
        sieve[1] = 0;

        for (let i = 2; i < Math.sqrt(n); i++) {
                if (!sieve[i]) {
                        continue;
                }

                for (let j = i ** 2; j < n; j += i) {
                        sieve[j] = 0;
                }
        }

        let res = 0;

        for (const val of sieve) {
                res += val;
        }

        return res;
};

export { countPrimes };
