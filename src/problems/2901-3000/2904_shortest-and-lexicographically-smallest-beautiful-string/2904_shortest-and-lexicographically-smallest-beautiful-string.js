/**
 * 2904. Shortest and Lexicographically Smallest Beautiful String
 *
 * Link: https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-08-26
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - String (topic_10)
 * - Sliding Window (topic_55821)
 * - Senior (position_senior)
 * - Weekly Contest 367 (contest_weekly-contest-367)
 *
 * Stats:
 *
 * - Total Accepted: 92,374
 * - Total Submissions: 168,987
 * - Acceptance Rate: 54.7%
 */

/**
 * Approach: Sliding Window
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 * `n` = `s.length`
 *
 * @param {string} s
 * @param {number} k
 * @returns {string}
 */
const shortestBeautifulSubstring = (s, k) => {
        const n = s.length;
        let res = '2'; // lexicographically larger than every string with 1s and 0s

        for (let l = 0, r = 0, cnt = 0, mnLen = n + 1; r < n; r++) {
                cnt += +s[r];

                if (cnt < k) {
                        continue;
                }

                while (cnt === k) {
                        cnt -= +s[l++];
                }

                const sz = r - l + 2;

                if (sz > mnLen) {
                        continue;
                }

                const sub = s.slice(l - 1, r + 1);

                if (sz < mnLen || (sz === mnLen && sub < res)) {
                        res = sub;
                        mnLen = sz;
                }
        }

        return res === '2' ? '' : res;
};

export { shortestBeautifulSubstring };
