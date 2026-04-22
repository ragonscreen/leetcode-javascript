/**
 * 1578. Minimum Time to Make Rope Colorful
 *
 * Link: https://leetcode.com/problems/minimum-time-to-make-rope-colorful/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-23
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - String (topic_10)
 * - Dynamic Programming (topic_13)
 * - Greedy (topic_17)
 *
 * Stats:
 * - Total Accepted: 409,064
 * - Total Submissions: 627,223
 * - Acceptance Rate: 65.2%
 */

/**
 * Approach: Greedy + Two Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
const minCost = (colors, neededTime) => {
        let res = 0;

        for (let l = 0, r = 1; r < colors.length; r++) {
                if (colors[r] !== colors[l]) {
                        l = r;
                        continue;
                }

                const tr = neededTime[r];
                const tl = neededTime[l];

                if (tr < tl) {
                        res += tr;
                } else {
                        res += tl;
                        l = r;
                }
        }

        return res;
};

export { minCost };
