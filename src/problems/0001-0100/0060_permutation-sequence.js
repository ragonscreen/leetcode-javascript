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
 * Time Complexity: O()
 * Space Complexity: O()
 *
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getPermutation = (n, k) => {
        const set = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        let res = '';
        const num = k;
        // let parts = f(n - 1);
        // absolute cinema

        for (let i = 0; i < n; i++) {
                const arr = Array.from(set);
                const fact = f(n - i - 1);
                // const idx = Math.floor((Math.max(0, num - 1)) / fact) % fact;
                const idx = Math.floor((num - 1) / fact) % (n - i);
                const digit = arr[idx];
                res += digit;
                set.delete(digit);
                // num = (num + fact - 1) % fact;
                // num %= fact;

                // console.log({ fact, idx, digit, num });
        }

        return res;
};

const f = (v) => {
        let res = 1;
        let num = 1;

        while (num++ < v) {
                res *= num;
        }

        return res;
};

export { getPermutation };
