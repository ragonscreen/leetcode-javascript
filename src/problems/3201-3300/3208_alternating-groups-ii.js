/**
 * 3208. Alternating Groups II
 *
 * Link: https://leetcode.com/problems/alternating-groups-ii/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-03-19
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Sliding Window (topic_55821)
 *
 * Stats:
 * - Total Accepted: 159,403
 * - Total Submissions: 265,945
 * - Acceptance Rate: 59.9%
 */

/**
 * Approach: Sliding Window
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
const numberOfAlternatingGroups = (colors, k) => {
        const n = colors.length;
        let res = 0;
        let lastInvalidIdx = -1;
        let lastSeen = -1;

        for (let i = 0; i < k; i++) {
                if (colors[i] === lastSeen) {
                        lastInvalidIdx = i - 1;
                }

                lastSeen = colors[i];
        }

        if (lastInvalidIdx === -1) {
                res++;
        }

        for (let l = 1, r = k; l < n; l++, r++) {
                if (r === n) {
                        r = 0;
                }

                const color = colors[r];

                if (color === lastSeen) {
                        if (r === 0) {
                                lastInvalidIdx = n - 1;
                        } else {
                                lastInvalidIdx = r - 1;
                        }
                }

                if (lastInvalidIdx === -1) {
                        res++;
                } else {
                        if (
                                l < r &&
                                lastInvalidIdx < l &&
                                lastInvalidIdx <= r
                        ) {
                                res++;
                        }

                        if (
                                l > r &&
                                lastInvalidIdx < l &&
                                lastInvalidIdx >= r
                        ) {
                                res++;
                        }
                }

                lastSeen = color;
        }

        return res;
};

export { numberOfAlternatingGroups };
