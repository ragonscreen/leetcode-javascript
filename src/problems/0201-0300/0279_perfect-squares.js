/**
 * 0279. Perfect Squares
 *
 * Link: https://leetcode.com/problems/perfect-squares/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-06-04
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Math (topic_8)
 * - Dynamic Programming (topic_13)
 * - Breadth-First Search (topic_22)
 *
 * Stats:
 * - Total Accepted: 1,066,076
 * - Total Submissions: 1,884,631
 * - Acceptance Rate: 56.6%
 *
 * Similar Problems:
 * - count-primes (Medium)
 * - ugly-number-ii (Medium)
 * - ways-to-express-an-integer-as-sum-of-powers (Medium)
 */

/**
 * Approach: Lagrange's Four-Square Theorem + Legendre's Three-Square Theorem
 * Time Complexity: O(sqrt(N))
 * Space Complexity: O(1)
 * `N` = `n`
 *
 * @param {number} n
 * @return {number}
 */
const numSquares = (n) => {
        const a = Math.sqrt(n);
        const rt = Math.floor(a);

        if (a === rt) {
                return 1;
        }

        // n % 4 === 0
        while ((n & 3) === 0) {
                n >>= 2;
        }

        // n % 8 === 7
        if ((n & 7) === 7) {
                return 4;
        }

        for (let i = 1; i <= rt; i++) {
                const x = Math.sqrt(n - i ** 2);
                const y = Math.floor(x);

                if (x === y) {
                        return 2;
                }
        }

        return 3;
};

/**
 * Approach: BFS
 * Time Complexity: O(N * sqrt(N))
 * Space Complexity: O(N)
 * `N` = `n`
 *
 * @param {number} n
 * @return {number}
 */
const numSquares1 = (n) => {
        const a = Math.sqrt(n);
        const b = Math.floor(a);

        if (a === b) {
                return 1;
        }

        const v = new Uint8Array(n + 1);
        let q = [n];
        let res = 1;

        while (q.length) {
                const q2 = [];

                for (let qi = 0; qi < q.length; qi++) {
                        const num = q[qi];
                        const rt = Math.floor(Math.sqrt(num));

                        for (let i = 1; i <= rt; i++) {
                                const nxt = num - i ** 2;

                                if (nxt === 0) {
                                        return res;
                                }

                                if (nxt < 0 || v[nxt]) {
                                        continue;
                                }

                                q2.push(nxt);
                                v[nxt] = 1;
                        }
                }

                q = q2;
                res++;
        }
};

export { numSquares, numSquares1 };
