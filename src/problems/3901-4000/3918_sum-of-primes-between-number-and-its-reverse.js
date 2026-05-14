/**
 * 3918. Sum of Primes Between Number and Its Reverse
 *
 * Link: https://leetcode.com/problems/sum-of-primes-between-number-and-its-reverse/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-03
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Stats:
 * - Total Accepted: 22,452
 * - Total Submissions: 30,391
 * - Acceptance Rate: 73.9%
 */

/**
 * Approach: Sieve of Eratosthenes
 * Time Complexity: O(n log log n)
 * Space Complexity: O(n)
 *
 * @param {number} n
 * @return {number}
 */
const sumOfPrimesInRange = (n) => {
        const r = (num) => {
                let res = 0;
                let x = num;

                while (x) {
                        res = res * 10 + (x % 10);
                        x = 0 | (x / 10);
                }

                return res;
        };

        const rev = r(n);
        const min = Math.min(n, rev);
        const max = Math.max(n, rev);
        const SIEVE = new Uint8Array(max + 1).fill(1);
        SIEVE[0] = 0;
        SIEVE[1] = 0;

        for (let i = 2; i <= Math.sqrt(max); i++) {
                if (!SIEVE[i]) {
                        continue;
                }

                for (let j = i * i; j <= max; j += i) {
                        SIEVE[j] = 0;
                }
        }

        let res = 0;

        for (let i = min; i <= max; i++) {
                if (SIEVE[i]) {
                        res += i;
                }
        }

        return res;
};

export { sumOfPrimesInRange };
