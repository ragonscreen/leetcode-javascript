/**
 * 0367. Valid Perfect Square
 *
 * Link: https://leetcode.com/problems/valid-perfect-square/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-04-30
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Math (topic_8)
 * - Binary Search (topic_11)
 *
 * Stats:
 * - Total Accepted: 924,333
 * - Total Submissions: 2,059,685
 * - Acceptance Rate: 44.9%
 *
 * Similar Problems:
 * - sqrtx (Easy)
 * - sum-of-square-numbers (Medium)
 */

/**
 * Approach: Binary Search
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 *
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = (num) => {
        let ok = 1;
        let ng = num;

        while (ng - ok > 1) {
                const mid = ok + ((ng - ok) >> 1);
                const val = mid ** 2;

                if (val <= num) {
                        ok = mid;
                } else {
                        ng = mid;
                }
        }

        return ok ** 2 === num;
};

export { isPerfectSquare };
