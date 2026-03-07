/**
 * 0056. Merge Intervals
 * Link: https://leetcode.com/problems/merge-intervals/
 * Difficulty: Medium
 * Date: 2026-03-08
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Sorting + Greedy + Two Pointers
 * Time Complexity: O(n log n)
 * Space Complexity: O(1) auxiliary, O(n) total
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
