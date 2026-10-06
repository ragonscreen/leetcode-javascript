/**
 * 3499. Maximize Active Section with Trade I
 *
 * Link: https://leetcode.com/problems/maximize-active-section-with-trade-i/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-08-24
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - String (topic_10)
 * - Enumeration (topic_61066)
 * - Senior (position_senior)
 * - Biweekly Contest 153 (contest_biweekly-contest-153)
 *
 * Stats:
 *
 * - Total Accepted: 112,864
 * - Total Submissions: 185,141
 * - Acceptance Rate: 61.0%
 */

/**
 * Approach: Greedy
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * `n` = `s.length`
 *
 * @param {string} s
 * @returns {number}
 */
const maxActiveSectionsAfterTrade = (s) => {
        const n = s.length;
        let cnt = 0;

        for (let i = 0; i < n; i++) {
                cnt += s[i] === '1';
        }

        const groups = [];

        for (let r = 0; r < n; r++) {
                while (s[r] === '0') {
                        r++;
                }

                if (r === n) {
                        break;
                }

                const l = r;

                while (s[r] === '1') {
                        r++;
                }

                groups.push([l, r - 1]);
        }

        let res = -1;

        for (let i = 0; i < groups.length; i++) {
                const [l, r] = groups[i];

                if (l === 0 || r === n - 1) {
                        continue;
                }

                const pre = groups[i - 1];
                const nxt = groups[i + 1];
                const zl = pre ? l - pre[1] - 1 : l;
                const zr = nxt ? nxt[0] - r - 1 : n - 1 - r;
                const gain = cnt + zl + zr;
                res = Math.max(res, gain);
        }

        return res === -1 ? cnt : res;
};

export { maxActiveSectionsAfterTrade };
