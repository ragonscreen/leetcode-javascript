/**
 * 2409. Count Days Spent Together
 *
 * Link: https://leetcode.com/problems/count-days-spent-together/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-10-24
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Math (topic_8)
 * - String (topic_10)
 * - Mid Level (position_mid-level)
 * - Biweekly Contest 87 (contest_biweekly-contest-87)
 *
 * Stats:
 *
 * - Total Accepted: 121,109
 * - Total Submissions: 181,076
 * - Acceptance Rate: 66.9%
 *
 * Similar Problems:
 *
 * - minimum-number-of-operations-to-convert-time (Easy)
 * - number-of-days-between-two-dates (Easy)
 */

/**
 * Approach: Prefix Sum
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 *
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @returns {number}
 */
const countDaysTogether = (arriveAlice, leaveAlice, arriveBob, leaveBob) => {
        const cnt = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        const p = new Uint16Array(13);

        for (let i = 0; i < 13; i++) p[i] = p[i - 1] + cnt[i];

        const [aam, aad] = arriveAlice.split('-');
        const [lam, lad] = leaveAlice.split('-');
        const [abm, abd] = arriveBob.split('-');
        const [lbm, lbd] = leaveBob.split('-');

        const aa = p[Number(aam) - 1] + Number(aad);
        const la = p[Number(lam) - 1] + Number(lad);
        const ab = p[Number(abm) - 1] + Number(abd);
        const lb = p[Number(lbm) - 1] + Number(lbd);

        return Math.max(0, Math.min(la, lb) - Math.max(aa, ab) + 1);
};

export { countDaysTogether };
