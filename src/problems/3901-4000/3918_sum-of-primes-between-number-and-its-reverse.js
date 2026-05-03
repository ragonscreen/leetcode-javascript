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

const N = 1000;
const SIEVE = new Uint8Array(N + 1).fill(1);

const getSieve = () => {
        if (SIEVE[0] === 0) {
                return;
        }

        SIEVE[0] = 0;
        SIEVE[1] = 0;

        for (let i = 2; i <= Math.sqrt(N); i++) {
                if (!SIEVE[i]) {
                        continue;
                }

                for (let j = i * i; j <= N; j += i) {
                        SIEVE[j] = 0;
                }
        }
};

/**
 * Approach: Sieve of Eratosthenes
 * Time Complexity: O(n log log n)
 * Space Complexity: O(n)
 *
 * @param {number} n
 * @return {number}
 */
const sumOfPrimesInRange = (n) => {
        getSieve();

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
        let res = 0;

        for (let i = min; i <= max; i++) {
                if (SIEVE[i]) {
                        res += i;
                }
        }

        return res;
};

export { sumOfPrimesInRange };
