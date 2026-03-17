/**
 * 2269. Find the K-Beauty of a Number
 *
 * Link: https://leetcode.com/problems/find-the-k-beauty-of-a-number/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-03-17
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Math (topic_8)
 * - String (topic_10)
 * - Sliding Window (topic_55821)
 *
 * Stats:
 * - Total Accepted: 89,747
 * - Total Submissions: 142,118
 * - Acceptance Rate: 63.1%
 */

/**
 * Approach: Math [Optimal]
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
