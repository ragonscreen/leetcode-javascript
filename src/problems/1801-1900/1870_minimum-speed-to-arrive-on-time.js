/**
 * 1870. Minimum Speed to Arrive on Time
 *
 * Link: https://leetcode.com/problems/minimum-speed-to-arrive-on-time/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-29
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Binary Search (topic_11)
 * - Senior (position_senior)
 * - Weekly Contest 242 (contest_weekly-contest-242)
 *
 * Stats:
 *
 * - Total Accepted: 139,320
 * - Total Submissions: 288,796
 * - Acceptance Rate: 48.2%
 *
 * Similar Problems:
 *
 * - maximum-candies-allocated-to-k-children (Medium)
 * - minimize-maximum-of-array (Medium)
 * - minimum-time-to-complete-trips (Medium)
 * - the-latest-time-to-catch-a-bus (Medium)
 * - minimum-skips-to-arrive-at-meeting-on-time (Hard)
 */

/**
 * Approach: Binary Search
 * Time Complexity: O(n lg M)
 * Space Complexity: O(1)
 * `n` = `dist.length`, `M` = `1e7`
 *
 * @param {number[]} dist
 * @param {number} hour
 * @returns {number}
 */
const minSpeedOnTime = (dist, hour) => {
        const n = dist.length;

        if (n - 1 >= hour) return -1;

        const check = (v) => {
                let t = 0;

                for (let i = 0; i < n; i++) {
                        const cur = dist[i] / v;
                        t += i === n - 1 ? cur : Math.ceil(cur);
                }

                return t <= hour;
        };

        let ok = 1e7 + 1;
        let ng = 0;

        while (Math.abs(ok - ng) > 1) {
                const mid = (ok + ng) >> 1;

                if (check(mid)) ok = mid;
                else ng = mid;
        }

        return ok;
};

export { minSpeedOnTime };
