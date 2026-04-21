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
 * Approach: Dynamic Programming
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {string} s
 * @return {number}
 */
const minFlips = (s) => {
        const n = s.length;
        let cnt = 0;

        for (let i = 0; i < n; i++) {
                cnt += (i % 2) ^ s[i];
        }

        let dp0 = cnt;
        let dp1 = n - cnt;
        let res = Math.min(dp0, dp1);

        if (n % 2 === 0) {
                return res;
        }

        for (let i = 0; i < n; i++) {
                [dp0, dp1] = [dp1, dp0];

                if (s[i] === '0') {
                        dp0--;
                        dp1++;
                } else {
                        dp0++;
                        dp1--;
                }

                res = Math.min(res, dp0, dp1);
        }

        return res;
};

/**
 * Approach: Sliding Window
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {string} s
 * @return {number}
 */
const minFlips1 = (s) => {
        const n = s.length;
        let cnt = 0;

        // check forward
        for (let i = 0; i < n; i++) {
                cnt += i % 2 !== Number(s[i]);
        }

        let res = Math.min(cnt, n - cnt);

        // check cycles
        for (let i = 0; i < n; i++) {
                let match = Number(s[i]) === i % 2;

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

export { minFlips, minFlips1 };
