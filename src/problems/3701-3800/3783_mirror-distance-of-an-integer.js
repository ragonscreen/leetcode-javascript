/**
 * 3783. Mirror Distance of an Integer
 *
 * Link: https://leetcode.com/problems/mirror-distance-of-an-integer/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-04-18
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Math (topic_8)
 *
 * Stats:
 * - Total Accepted: 114,919
 * - Total Submissions: 126,188
 * - Acceptance Rate: 91.1%
 */

/**
 * Approach: Math
 * Time Complexity: O(log10 n)
 * Space Complexity: O(1)
 *
 * @param {number} n
 * @return {number}
 */
const mirrorDistance = (n) => {
        const r = (num) => {
                let res = 0;

                for (let x = num; x > 0; x = Math.floor(x / 10)) {
                        res = 10 * res + (x % 10);
                }

                return res;
        };

        return Math.abs(n - r(n));
};

export { mirrorDistance };
