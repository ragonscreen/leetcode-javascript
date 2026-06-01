/**
 * 1048. Longest String Chain
 *
 * Link: https://leetcode.com/problems/longest-string-chain/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-06-01
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Two Pointers (topic_9)
 * - String (topic_10)
 * - Dynamic Programming (topic_13)
 * - Sorting (topic_61049)
 * - Senior Staff (position_senior-staff)
 * - Weekly Contest 137 (contest_weekly-contest-137)
 *
 * Stats:
 * - Total Accepted: 530,639
 * - Total Submissions: 841,403
 * - Acceptance Rate: 63.1%
 */

/**
 * Approach: Sorting + Dynamic Programming + Two Pointers
 * Time Complexity: O(n^2 * l)
 * Space Complexity: O(n)
 * `n` = `words.length`, `l` = `max(words[i].length)`
 *
 * @param {string[]} words
 * @return {number}
 */
const longestStrChain = (words) => {
        const check = (s, t) => {
                const n = s.length;
                const m = t.length;

                if (m - n !== 1) {
                        return false;
                }

                for (let p = 0, q = 0, cnt = 0; q < m; q++) {
                        if (s[p] === t[q]) {
                                p++;
                        } else {
                                if (cnt === 1) {
                                        return false;
                                }

                                cnt++;
                        }
                }

                return true;
        };

        words.sort((a, b) => a.length - b.length);
        const n = words.length;
        const dp = new Uint16Array(n);
        let res = 0;

        for (let i = 1; i < n; i++) {
                const t = words[i];

                for (let j = 0; j < i; j++) {
                        const s = words[j];

                        if (check(s, t)) {
                                dp[i] = Math.max(dp[i], dp[j] + 1);
                        }
                }

                res = Math.max(res, dp[i]);
        }

        return res + 1;
};

export { longestStrChain };
