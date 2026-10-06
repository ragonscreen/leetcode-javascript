/**
 * 1189. Maximum Number of Balloons
 *
 * Link: https://leetcode.com/problems/maximum-number-of-balloons/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-06-23
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Hash Table (topic_6)
 * - String (topic_10)
 * - Counting (topic_61062)
 * - Mid Level (position_mid-level)
 * - Weekly Contest 154 (contest_weekly-contest-154)
 *
 * Stats:
 *
 * - Total Accepted: 498,331
 * - Total Submissions: 776,131
 * - Acceptance Rate: 64.2%
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `text.length`
 *
 * @param {string} text
 * @returns {number}
 */
const maxNumberOfBalloons = (text) => {
        const cnt = new Uint32Array(26);

        for (let i = 0; i < text.length; i++) {
                cnt[text.charCodeAt(i) - 97]++;
        }

        return Math.min(cnt[1], cnt[0], cnt[11] >> 1, cnt[14] >> 1, cnt[13]);
};

export { maxNumberOfBalloons };
