/**
 * 1520. Maximum Number of Non-Overlapping Substrings
 *
 * Link: https://leetcode.com/problems/maximum-number-of-non-overlapping-substrings/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-09-18
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Hash Table (topic_6)
 * - String (topic_10)
 * - Greedy (topic_17)
 * - Sorting (topic_61049)
 * - Senior Staff (position_senior-staff)
 * - Weekly Contest 198 (contest_weekly-contest-198)
 *
 * Stats:
 *
 * - Total Accepted: 63,675
 * - Total Submissions: 109,014
 * - Acceptance Rate: 58.4%
 *
 * Similar Problems:
 *
 * - maximum-number-of-non-overlapping-palindrome-substrings (Hard)
 */

/**
 * Approach: Sorting + Greedy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `s.length`
 *
 * @param {string} s
 * @returns {string[]}
 */
const maxNumOfSubstrings = (s) => {
        const n = s.length;
        const l = new Int32Array(26).fill(-1);
        const r = new Int32Array(26).fill(-1);

        for (let i = 0; i < n; i++) {
                const v = s.charCodeAt(i) - 97;

                if (l[v] === -1) l[v] = i;

                r[v] = i;
        }

        const intervals = [];

        outer: for (let i = 0; i < 26; i++) {
                if (l[i] === -1) continue;

                const l1 = l[i];
                let r1 = r[i];

                if (r1 > l1) {
                        for (let j = l1; j <= r1; j++) {
                                const v = s.charCodeAt(j) - 97;
                                const l2 = l[v];
                                const r2 = r[v];

                                // if s[j] has been seen before, then the current interval is
                                // invalid as taking this interval means being stretched towards
                                // left by s[j]
                                if (l2 < l1) continue outer;

                                r1 = Math.max(r1, r2);
                        }
                }

                intervals.push([l1, r1]);
        }

        intervals.sort((a, b) => a[1] - b[1]);
        const res = [];
        let end = -1;

        for (const [li, ri] of intervals) {
                if (li > end) {
                        res.push(s.slice(li, ri + 1));
                        end = ri;
                }
        }

        return res;
};

export { maxNumOfSubstrings };
