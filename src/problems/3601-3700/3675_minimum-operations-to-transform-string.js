/**
 * 3675. Minimum Operations to Transform String
 *
 * Link: https://leetcode.com/problems/minimum-operations-to-transform-string/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-03
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 * - Greedy (topic_17)
 * - Senior (position_senior)
 * - Weekly Contest 466 (contest_weekly-contest-466)
 *
 * Stats:
 * - Total Accepted: 52,614
 * - Total Submissions: 84,675
 * - Acceptance Rate: 62.1%
 */

/**
 * Approach: Greedy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `s.length`
 *
 * Since we can only move one step at a time, each successive character set is
 * merged with the previous one during each move. Thus, the total number of
 * moves is the number of steps taken for the smallest character to reach 'a'.
 *
 * @param {string} s
 * @return {number}
 */
const minOperations = (s) => {
        const set = new Uint8Array(26);

        for (let i = 0; i < s.length; i++) {
                set[s.charCodeAt(i) - 97] = 1;
        }

        for (let i = 1; i < 26; i++) {
                if (set[i]) {
                        return 26 - i;
                }
        }

        return 0;
};

export { minOperations };
