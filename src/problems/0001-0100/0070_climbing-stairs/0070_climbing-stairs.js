/**
 * 70. Climbing Stairs
 *
 * Link: https://leetcode.com/problems/climbing-stairs/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-10-28
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Math (topic_8)
 * - Dynamic Programming (topic_13)
 * - Memoization (topic_33)
 *
 * Stats:
 *
 * - Total Accepted: 5,620,341
 * - Total Submissions: 10,327,577
 * - Acceptance Rate: 54.4%
 *
 * Similar Problems:
 *
 * - fibonacci-number (Easy)
 * - min-cost-climbing-stairs (Easy)
 * - n-th-tribonacci-number (Easy)
 * - count-number-of-ways-to-place-houses (Medium)
 * - count-ways-to-build-good-strings (Medium)
 * - frog-jump-ii (Medium)
 * - minimum-rounds-to-complete-all-tasks (Medium)
 * - number-of-ways-to-reach-a-position-after-exactly-k-steps (Medium)
 * - the-number-of-ways-to-make-the-sum (Medium) (Premium)
 * - find-number-of-ways-to-reach-the-k-th-stair (Hard)
 */

/**
 * Approach: Dynamic Programming
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 * `N` = `n`
 *
 * @param {number} n
 * @returns {number}
 */
const climbStairs = (n) => {
        let a = 1;
        let b = 1;

        for (let i = 0; i < n - 1; i++) [a, b] = [b, a + b];

        return b;
};

/**
 * Approach: Recursion + Memoization
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 * `N` = `n`
 *
 * @param {number} n
 * @returns {number}
 */
const climbStairs1 = (n) => {
        const memo = new Uint32Array(n + 1);

        const rec = (v) => {
                if (v <= 1) return 1;

                const x = v - 2;
                const y = v - 1;
                const a = memo[x] || rec(x);
                const b = memo[y] || rec(y);
                const res = a + b;
                memo[v] = res;

                return res;
        };

        return rec(n);
};

/**
 * Approach: Recursion [TLE]
 * Time Complexity: O(2^N)
 * Space Complexity: O(2^N)
 * `N` = `n`
 *
 * @param {number} n
 * @returns {number}
 */
const climbStairs2 = (n) => {
        const rec = (v) => {
                if (v <= 1) return 1;

                return rec(v - 2) + rec(v - 1);
        };

        return rec(n);
};

export { climbStairs, climbStairs1, climbStairs2 };
