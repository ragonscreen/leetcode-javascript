/**
 * 3527. Find the Most Common Response
 *
 * Link: https://leetcode.com/problems/find-the-most-common-response/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-10-16
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - String (topic_10)
 * - Counting (topic_61062)
 * - Senior (position_senior)
 * - Biweekly Contest 155 (contest_biweekly-contest-155)
 *
 * Stats:
 *
 * - Total Accepted: 41,148
 * - Total Submissions: 55,666
 * - Acceptance Rate: 73.9%
 *
 * Similar Problems:
 *
 * - majority-element (Easy)
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n * m)
 * Space Complexity: O(n * m)
 * `n` = `responses.length`, `m` = `max(responses[i].length)`
 *
 * @param {string[][]} responses
 * @returns {string}
 */
const findCommonResponse = (responses) => {
        const mp = new Map();
        responses.forEach((e) => new Set(e).forEach((f) => mp.set(f, (mp.get(f) ?? 0) + 1)));
        let res = '';
        let mx = 0;

        for (const [str, frq] of mp.entries()) {
                if ((frq === mx && str < res) || frq > mx) {
                        mx = frq;
                        res = str;
                }
        }

        return res;
};

export { findCommonResponse };
