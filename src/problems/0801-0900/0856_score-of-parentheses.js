/**
 * 856. Score of Parentheses
 *
 * Link: https://leetcode.com/problems/score-of-parentheses/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-25
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - String (topic_10)
 * - Stack (topic_15)
 * - Bracket Sequences (topic_122055)
 * - Staff (position_staff)
 * - Weekly Contest 90 (contest_weekly-contest-90)
 *
 * Stats:
 *
 * - Total Accepted: 232,527
 * - Total Submissions: 366,353
 * - Acceptance Rate: 63.5%
 */

/**
 * Approach: Stack
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * `n` = `s.length`
 *
 * @param {string} s
 * @returns {number}
 */
const scoreOfParentheses = (s) => {
        const n = s.length;
        const st = new Uint32Array((n + 1) >> 1);
        let sp = 1;

        for (const c of s) {
                if (c === '(') st[sp++] = 0;
                else st[sp - 2] += st[--sp] << 1 || 1;
        }

        return st[0];
};

export { scoreOfParentheses };
