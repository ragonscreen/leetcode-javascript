/**
 * 0060. Permutation Sequence
 *
 * Link: https://leetcode.com/problems/permutation-sequence/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-04-16
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Math (topic_8)
 * - Recursion (topic_31)
 *
 * Stats:
 * - Total Accepted: 571,874
 * - Total Submissions: 1,083,882
 * - Acceptance Rate: 52.8%
 *
 * Similar Problems:
 * - next-permutation (Medium)
 * - permutations (Medium)
 */

/**
 * Approach: Math
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 *
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getPermutation = (n, k) => {
        const memo = [1];

        const f = (v) => {
                if (memo[v] !== undefined) {
                        return memo[v];
                }

                let num = memo.length - 1;

                while (num++ < v) {
                        memo[num] = num * memo[num - 1];
                }

                return memo.at(-1);
        };

        const digits = Array.from({ length: n }, (_, i) => i + 1);
        let res = '';

        for (let i = 0; i < n; i++) {
                const num = n - i;
                const fact = f(num - 1);
                const digitIdx = Math.floor((k - 1) / fact) % num;
                res += digits[digitIdx];
                digits.splice(digitIdx, 1);
        }

        return res;
};

export { getPermutation };
