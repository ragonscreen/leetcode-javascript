/**
 * 1081. Smallest Subsequence of Distinct Characters
 *
 * Link: https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-08-24
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - String (topic_10)
 * - Stack (topic_15)
 * - Greedy (topic_17)
 * - Monotonic Stack (topic_61054)
 * - Senior Staff (position_senior-staff)
 * - Weekly Contest 140 (contest_weekly-contest-140)
 *
 * Stats:
 *
 * - Total Accepted: 193,925
 * - Total Submissions: 274,722
 * - Acceptance Rate: 70.6%
 *
 * Similar Problems:
 *
 * - find-the-most-competitive-subsequence (Medium)
 */

/**
 * Approach: Greedy + Monotonic Stack
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `s.length`
 *
 * @param {string} s
 * @returns {string}
 */
const smallestSubsequence = (s) => {
        const ord = (c) => c.charCodeAt() - 97;
        const n = s.length;
        const last = new Uint32Array(26);

        for (let i = 0; i < n; i++) {
                last[ord(s[i])] = i;
        }

        const have = new Uint8Array(26);
        const stack = [];

        for (let i = 0; i < n; i++) {
                const c = s[i];
                const v = ord(c);

                if (have[v]) {
                        continue;
                }

                while (c < stack.at(-1)) {
                        const tv = ord(stack.at(-1));

                        if (i < last[tv]) {
                                stack.pop();
                                have[tv] = 0;
                        } else {
                                break;
                        }
                }

                stack.push(c);
                have[v] = 1;
        }

        return stack.join('');
};

export { smallestSubsequence };
