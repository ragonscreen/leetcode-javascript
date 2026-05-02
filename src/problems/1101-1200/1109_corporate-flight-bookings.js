/**
 * 1109. Corporate Flight Bookings
 *
 * Link: https://leetcode.com/problems/corporate-flight-bookings/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-03
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Prefix Sum (topic_61068)
 *
 * Stats:
 * - Total Accepted: 105,580
 * - Total Submissions: 157,337
 * - Acceptance Rate: 67.1%
 *
 * Similar Problems:
 * - zero-array-transformation-ii (Medium)
 * - zero-array-transformation-iii (Medium)
 */

/**
 * Approach: Difference Array
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
const corpFlightBookings = (bookings, n) => {
        const diff = new Int32Array(n);

        for (const [l, r, c] of bookings) {
                diff[l - 1] += c;
                diff[r] -= c;
        }

        const res = new Uint32Array(n);
        let cnt = 0;

        for (let i = 0; i < n; i++) {
                cnt += diff[i];
                res[i] = cnt;
        }

        return res;
};

export { corpFlightBookings };
