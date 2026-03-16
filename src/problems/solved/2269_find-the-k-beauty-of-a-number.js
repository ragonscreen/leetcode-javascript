/**
 * 2269. Find the K-Beauty of a Number
 * Link: https://leetcode.com/problems/find-the-k-beauty-of-a-number/
 * Difficulty: Easy
 * Date: 2026-03-16
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Math (Optimal)
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 *
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
const divisorSubstrings = (num, k) => {
        const digits = Math.floor(Math.log10(num) + 1);
        let exp = k;
        let res = 0;

        while (exp <= digits) {
                const mod = num % 10 ** exp;
                const val = Math.floor(mod / 10 ** (exp - k));

                if (val && !(num % val)) {
                        res++;
                }

                exp++;
        }

        return res;
};

export { divisorSubstrings };
