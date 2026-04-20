/**
 * 2078. Two Furthest Houses With Different Colors
 *
 * Link: https://leetcode.com/problems/two-furthest-houses-with-different-colors/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-04-20
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Greedy (topic_17)
 *
 * Stats:
 * - Total Accepted: 136,874
 * - Total Submissions: 198,596
 * - Acceptance Rate: 68.9%
 *
 * Similar Problems:
 * - maximum-difference-between-increasing-elements (Easy)
 * - replace-elements-with-greatest-element-on-right-side (Easy)
 * - maximum-distance-between-a-pair-of-values (Medium)
 */

/**
 * Approach: Greedy [One Pass]
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} colors
 * @return {number}
 */
const maxDistance = (colors) => {
        const n = colors.length;

        for (let i = 0; i < n; i++) {
                if (
                        colors[n - 1 - i] !== colors[0] ||
                        colors[i] !== colors[n - 1]
                ) {
                        return n - 1 - i;
                }
        }

        return 0;
};

/**
 * Approach: Greedy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} colors
 * @return {number}
 */
const maxDistance1 = (colors) => {
        const n = colors.length;
        let res = 0;

        // check from right
        for (let i = n - 1; i > -1; i--) {
                if (colors[i] !== colors[0]) {
                        res = i;
                        break;
                }
        }

        // check from left
        for (let i = 0; i < n; i++) {
                if (colors[i] !== colors[n - 1]) {
                        res = Math.max(res, n - 1 - i);
                        break;
                }
        }

        return res;
};

export { maxDistance, maxDistance1 };
