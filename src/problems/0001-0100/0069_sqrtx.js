/**
 * 0069. Sqrt(x)
 *
 * Link: https://leetcode.com/problems/sqrtx/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-04-02
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Math (topic_8)
 * - Binary Search (topic_11)
 *
 * Stats:
 * - Total Accepted: 3,131,797
 * - Total Submissions: 7,525,916
 * - Acceptance Rate: 41.6%
 *
 * Similar Problems:
 * - valid-perfect-square (Easy)
 * - powx-n (Medium)
 */

/**
 * Approach: Binary Search + Math [Optimal]
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 *
 * @param {number} x
 * @return {number}
 */
const mySqrt = (x) => {
        const digits = Math.floor(Math.log10(x)) + 1;
        const digitsInRoot = Math.ceil(digits / 2);
        let l = 1;

        for (let i = 0; i < digitsInRoot - 1; i++) {
                l *= 10;
        }

        let r = l * 10 - 1;
        let res = 0;

        while (l <= r) {
                const m = l + Math.floor((r - l) / 2);
                const val = m * m;

                if (val > x) {
                        r = m - 1;
                } else if (val < x) {
                        res = m;
                        l = m + 1;
                } else {
                        return m;
                }
        }

        return res;
};

/**
 * Approach: Binary Search
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 *
 * @param {number} x
 * @return {number}
 */
const mySqrt1 = (x) => {
        let l = 0;
        let r = x;
        let res;

        while (l <= r) {
                const m = l + Math.floor((r - l) / 2);
                const val = m * m;

                if (val > x) {
                        r = m - 1;
                } else if (val < x) {
                        res = m;
                        l = m + 1;
                } else {
                        return m;
                }
        }

        return res;
};

export { mySqrt, mySqrt1 };
