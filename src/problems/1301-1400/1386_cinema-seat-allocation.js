/**
 * 1386. Cinema Seat Allocation
 *
 * Link: https://leetcode.com/problems/cinema-seat-allocation/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-08-27
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Greedy (topic_17)
 * - Bit Manipulation (topic_19)
 * - Senior (position_senior)
 * - Biweekly Contest 22 (contest_biweekly-contest-22)
 *
 * Stats:
 * - Total Accepted: 173,442
 * - Total Submissions: 304,858
 * - Acceptance Rate: 56.9%
 *
 * Similar Problems:
 * - booking-concert-tickets-in-groups (Hard)
 */

/**
 * Approach: Greedy + Bit Manipulation
 * Time Complexity: O(m)
 * Space Complexity: O(m)
 * `m` = `reservedSeats.length`
 *
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
const maxNumberOfFamilies = (n, reservedSeats) => {
        const map = new Map();

        for (const [y, x] of reservedSeats) {
                if (x > 1 && x < 10) {
                        map.set(y, (map.get(y) ?? 0) | (1 << (x - 2)));
                }
        }

        let res = 2 * (n - map.size);

        for (const val of map.values()) {
                const l = (val & 0b0000_1111) === 0; // 2345
                const m = (val & 0b0011_1100) === 0; // 4567
                const r = (val & 0b1111_0000) === 0; // 6789

                if (l && r) {
                        res += 2;
                } else if (l || m || r) {
                        res++;
                }
        }

        return res;
};

export { maxNumberOfFamilies };
