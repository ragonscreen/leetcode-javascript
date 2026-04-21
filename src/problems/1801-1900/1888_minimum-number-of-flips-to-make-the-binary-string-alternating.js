/**
 * 1888. Minimum Number of Flips to Make the Binary String Alternating
 *
 * Link: https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-21
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 * - Dynamic Programming (topic_13)
 * - Sliding Window (topic_55821)
 *
 * Stats:
 * - Total Accepted: 126,101
 * - Total Submissions: 235,670
 * - Acceptance Rate: 53.5%
 *
 * Similar Problems:
 * - minimum-operations-to-make-the-array-alternating (Medium)
 */

/**
 * Approach: Sliding Window
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {string} s
 * @return {number}
 */
const minFlips = (s) => {
        const n = s.length;
        let cnt = 0;

        // check forward
        for (let i = 0; i < n; i++) {
                cnt += i % 2 !== +s[i];
        }

        let res = Math.min(cnt, n - cnt);

        // check cycles
        for (let i = 0; i < n; i++) {
                let match = +s[i] === i % 2;

                // swap value of match for every other index
                if (i % 2) {
                        match = !match;
                }

                // remove first count and hold
                if (!match) {
                        cnt--;
                }

                // invert count
                cnt = n - 1 - cnt;

                // add the removed count if
                // (match && even) || (!match && !even)
                if (match === (n % 2 === 0)) {
                        cnt++;
                }

                res = Math.min(res, cnt, n - cnt);
        }

        return res;
};

export { minFlips };
