/**
 * 3951. Minimum Energy to Maintain Brightness
 *
 * Link: https://leetcode.com/problems/minimum-energy-to-maintain-brightness/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-06-06
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Biweekly Contest 184 (contest_biweekly-contest-184)
 *
 * Stats:
 * - Total Accepted: 18,008
 * - Total Submissions: 33,267
 * - Acceptance Rate: 54.1%
 */

/**
 * Approach: Greedy
 * Time Complexity: O(n lg n)
 * Space Complexity: O(1) auxiliary, O(n) for sorting
 * `n` = `intervals.length`
 *
 * @param {number} n
 * @param {number} brightness
 * @param {number[][]} intervals
 * @return {number}
 */
const minEnergy = (n, brightness, intervals) => {
        intervals.sort((a, b) => a[0] - b[0]);
        let res = 0;
        let [pl, pr] = intervals[0];

        for (let i = 1; i < intervals.length; i++) {
                const [l, r] = intervals[i];

                if (l <= pr + 1) {
                        pr = Math.max(pr, r);
                } else {
                        res += pr - pl + 1;
                        pl = l;
                        pr = r;
                }
        }

        res += pr - pl + 1;

        return res * Math.ceil(brightness / 3);
};

export { minEnergy };
