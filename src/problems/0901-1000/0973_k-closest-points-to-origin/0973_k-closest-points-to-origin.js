/**
 * 973. K Closest Points to Origin
 *
 * Link: https://leetcode.com/problems/k-closest-points-to-origin/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-11-10
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Math (topic_8)
 * - Divide and Conquer (topic_12)
 * - Geometry (topic_38)
 * - Sorting (topic_61049)
 * - Heap (Priority Queue) (topic_61050)
 * - Quickselect (topic_61069)
 * - K-D Tree (topic_101360)
 * - Mid Level (position_mid-level)
 * - Weekly Contest 119 (contest_weekly-contest-119)
 *
 * Stats:
 *
 * - Total Accepted: 1,852,151
 * - Total Submissions: 2,664,063
 * - Acceptance Rate: 69.5%
 *
 * Similar Problems:
 *
 * - find-nearest-point-that-has-the-same-x-or-y-coordinate (Easy)
 * - k-th-nearest-obstacle-queries (Medium)
 * - kth-largest-element-in-an-array (Medium)
 * - minimum-rectangles-to-cover-points (Medium)
 * - top-k-frequent-elements (Medium)
 * - top-k-frequent-words (Medium)
 */

/**
 * Approach: Quickselect
 * Time Complexity: O(n) average, O(n^2) worst
 * Space Complexity: O(1) auxiliary, O(k) total
 * `n` = `points.length`
 *
 * @param {number[][]} points
 * @param {number} k
 * @returns {number[][]}
 */
const kClosest = (points, k) => {
        const n = points.length;

        if (k === n) return points;

        const d = ([x, y]) => x * x + y * y;
        let s = 0;
        let e = n - 1;

        while (s < e) {
                const ri = s + Math.floor(Math.random() * (e - s + 1));
                [points[ri], points[e]] = [points[e], points[ri]];
                const pv = d(points[e]);
                let l = s;

                for (let r = s; r < e; r++) {
                        if (d(points[r]) <= pv) {
                                [points[l], points[r]] = [points[r], points[l]];
                                l++;
                        }
                }

                [points[l], points[e]] = [points[e], points[l]];

                if (l < k) s = l + 1;
                else if (l > k) e = l - 1;
                else break;
        }

        return points.slice(0, k);
};

export { kClosest };
