/**
 * 0825. Friends Of Appropriate Ages
 *
 * Link: https://leetcode.com/problems/friends-of-appropriate-ages/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-06-08
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Two Pointers (topic_9)
 * - Binary Search (topic_11)
 * - Sorting (topic_61049)
 * - Staff (position_staff)
 * - Weekly Contest 82 (contest_weekly-contest-82)
 *
 * Stats:
 * - Total Accepted: 131,009
 * - Total Submissions: 262,432
 * - Acceptance Rate: 49.9%
 */

/**
 * Approach: Difference Array
 * Time Complexity: O(n + k)
 * Space Complexity: O(k)
 * `n` = `ages.length`, `k` = `max(ages[i])`
 *
 * @param {number[]} ages
 * @return {number}
 */
const numFriendRequests = (ages) => {
        const n = ages.length;
        const mx = Math.max(...ages) + 2;
        const diff = new Int32Array(mx);

        for (let i = 0; i < n; i++) {
                const x = ages[i];
                const l = (x >> 1) + 8;

                if (l <= x) {
                        diff[l]++;
                        diff[x + 1]--;
                }
        }

        for (let i = 1; i < mx; i++) {
                diff[i] += diff[i - 1];
        }

        let res = 0;

        for (let i = 0; i < n; i++) {
                const x = ages[i];
                res += Math.max(0, diff[x] - 1);
        }

        return res;
};

export { numFriendRequests };
