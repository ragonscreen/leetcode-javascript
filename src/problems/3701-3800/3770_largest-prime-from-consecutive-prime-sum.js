/**
 * 3770. Largest Prime from Consecutive Prime Sum
 *
 * Link: https://leetcode.com/problems/largest-prime-from-consecutive-prime-sum/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-18
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Math (topic_8)
 * - Number Theory (topic_61067)
 *
 * Stats:
 * - Total Accepted: 24,893
 * - Total Submissions: 63,685
 * - Acceptance Rate: 39.1%
 */

/**
 * Approach: Sieve of Eratosthenes
 * Time Complexity: O(n log log n)
 * Space Complexity: O(n)
 *
 * @param {number} n
 * @return {number}
 */
const largestPrime = (n) => {
        const SIEVE = new Uint32Array(n + 1).fill(1);
        SIEVE[0] = 0;
        SIEVE[1] = 0;

        for (let i = 2; i <= Math.sqrt(n); i++) {
                if (!SIEVE[i]) {
                        continue;
                }

                for (let j = i ** 2; j <= n; j += i) {
                        SIEVE[j] = 0;
                }
        }

        let res = 0;
        let sum = 0;

        for (let i = 2; i <= n; i++) {
                if (!SIEVE[i]) {
                        continue;
                }

                sum += i;

                if (sum > n) {
                        break;
                }

                if (SIEVE[sum]) {
                        res = sum;
                }
        }

        return res;
};

export { largestPrime };
