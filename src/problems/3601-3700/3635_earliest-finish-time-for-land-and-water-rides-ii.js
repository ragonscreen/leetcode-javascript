/**
 * 3635. Earliest Finish Time for Land and Water Rides II
 *
 * Link: https://leetcode.com/problems/earliest-finish-time-for-land-and-water-rides-ii/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-06-02
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Two Pointers (topic_9)
 * - Binary Search (topic_11)
 * - Greedy (topic_17)
 * - Sorting (topic_61049)
 * - Staff (position_staff)
 * - Biweekly Contest 162 (contest_biweekly-contest-162)
 *
 * Stats:
 * - Total Accepted: 14,698
 * - Total Submissions: 39,321
 * - Acceptance Rate: 37.4%
 */

/**
 * Approach: Greedy
 * Time Complexity: O(n + m)
 * Space Complexity: O(1)
 * `n` = `landStartTime.length`, `m` = `waterStartTime.length`
 *
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
const earliestFinishTime = (
        landStartTime,
        landDuration,
        waterStartTime,
        waterDuration,
) => {
        const INF = Number.MAX_SAFE_INTEGER;
        const n = landStartTime.length;
        const m = waterStartTime.length;
        let mnEnd = INF;

        for (let i = 0; i < n; i++) {
                mnEnd = Math.min(mnEnd, landStartTime[i] + landDuration[i]);
        }

        let res1 = INF;

        for (let i = 0; i < m; i++) {
                const stt = waterStartTime[i];
                const dur = waterDuration[i];
                const val = mnEnd + dur + Math.max(0, stt - mnEnd);
                res1 = Math.min(res1, val);
        }

        mnEnd = INF;

        for (let i = 0; i < m; i++) {
                mnEnd = Math.min(mnEnd, waterStartTime[i] + waterDuration[i]);
        }

        let res2 = INF;

        for (let i = 0; i < n; i++) {
                const stt = landStartTime[i];
                const dur = landDuration[i];
                const val = mnEnd + dur + Math.max(0, stt - mnEnd);
                res2 = Math.min(res2, val);
        }

        return Math.min(res1, res2);
};

export { earliestFinishTime };
