/**
 * 0056. Merge Intervals
 *
 * Link: https://leetcode.com/problems/merge-intervals/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-03-08
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Sorting (topic_61049)
 *
 * Stats:
 * - Total Accepted: 3,881,903
 * - Total Submissions: 7,557,054
 * - Acceptance Rate: 51.4%
 *
 * Similar Problems:
 * - determine-if-two-events-have-conflict (Easy)
 * - meeting-rooms (Easy)
 * - points-that-intersect-with-cars (Easy)
 * - teemo-attacking (Easy)
 * - add-bold-tag-in-string (Medium)
 * - count-days-without-meetings (Medium)
 * - count-ways-to-group-overlapping-ranges (Medium)
 * - divide-intervals-into-minimum-number-of-groups (Medium)
 * - insert-interval (Medium)
 * - interval-list-intersections (Medium)
 * - meeting-rooms-ii (Medium)
 * - minimize-connected-groups-by-inserting-interval (Medium)
 * - partition-labels (Medium)
 * - amount-of-new-area-painted-each-day (Hard)
 * - count-integers-in-intervals (Hard)
 * - employee-free-time (Hard)
 * - longest-substring-of-one-repeating-character (Hard)
 * - range-module (Hard)
 */

/**
 * Approach: Sorting + Greedy + Two Pointers
 * Time Complexity: O(n log n)
 * Space Complexity: O(1) auxiliary, O(n) for sorting, O(n) total
 *
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = (intervals) => {
        intervals.sort((a, b) => a[0] - b[0]);
        const res = [];
        let [l, r] = intervals[0];

        for (let i = 1; i < intervals.length; i++) {
                const [start, end] = intervals[i];

                if (start <= r) {
                        r = Math.max(r, end);
                } else {
                        res.push([l, r]);
                        l = start;
                        r = end;
                }
        }

        res.push([l, r]);

        return res;
};

export { merge };
