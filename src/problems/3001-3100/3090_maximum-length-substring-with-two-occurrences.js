/**
 * 3090. Maximum Length Substring With Two Occurrences
 *
 * Link: https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-08-27
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Hash Table (topic_6)
 * - String (topic_10)
 * - Sliding Window (topic_55821)
 * - Mid Level (position_mid-level)
 * - Weekly Contest 390 (contest_weekly-contest-390)
 *
 * Stats:
 *
 * - Total Accepted: 199,822
 * - Total Submissions: 257,036
 * - Acceptance Rate: 77.7%
 */

/**
 * Approach: Sliding Window
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `s.length`
 *
 * @param {string} s
 * @returns {number}
 */
const maximumLengthSubstring = (s) => {
        const map = new Uint32Array(26);
        let res = -1;

        for (let l = 0, r = 0; r < s.length; r++) {
                const cr = s.charCodeAt(r) - 97;
                map[cr]++;

                while (map[cr] > 2) {
                        const cl = s.charCodeAt(l++) - 97;
                        map[cl]--;
                }

                res = Math.max(res, r - l + 1);
        }

        return res;
};

export { maximumLengthSubstring };
