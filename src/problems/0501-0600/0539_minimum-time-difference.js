/**
 * 0539. Minimum Time Difference
 *
 * Link: https://leetcode.com/problems/minimum-time-difference/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-07
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Math (topic_8)
 * - String (topic_10)
 * - Sorting (topic_61049)
 *
 * Stats:
 * - Total Accepted: 349,046
 * - Total Submissions: 557,601
 * - Acceptance Rate: 62.6%
 *
 * Similar Problems:
 * - minimum-cost-to-set-cooking-time (Medium)
 */

/**
 * Approach: Counting Sort
 * Time Complexity: O(n + 1440) = O(n)
 * Space Complexity: O(1440) = O(1)
 *
 * @param {string[]} timePoints
 * @return {number}
 */
const findMinDifference = (timePoints) => {
        const n = timePoints.length;
        const max = 24 * 60;

        if (n > max) {
                return 0;
        }

        const vals = new Uint32Array(max);

        for (let i = 0; i < n; i++) {
                const [h, m] = timePoints[i].split(':');
                const v = Number(h) * 60 + Number(m);
                vals[v]++;

                if (vals[v] === 2) {
                        return 0;
                }
        }

        let first;
        let prev = -max;
        let res = Number.POSITIVE_INFINITY;

        for (let i = 0; i < max; i++) {
                if (!vals[i]) {
                        continue;
                }

                first ??= i;
                res = Math.min(res, i - prev);
                prev = i;
        }

        res = Math.min(res, (first - prev + max) % max);

        return res;
};

export { findMinDifference };
