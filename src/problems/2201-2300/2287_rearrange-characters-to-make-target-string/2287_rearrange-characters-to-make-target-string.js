/**
 * 2287. Rearrange Characters to Make Target String
 *
 * Link: https://leetcode.com/problems/rearrange-characters-to-make-target-string/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-07-23
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Hash Table (topic_6)
 * - String (topic_10)
 * - Counting (topic_61062)
 * - Mid Level (position_mid-level)
 * - Weekly Contest 295 (contest_weekly-contest-295)
 *
 * Stats:
 *
 * - Total Accepted: 64,480
 * - Total Submissions: 102,246
 * - Acceptance Rate: 63.1%
 *
 * Similar Problems:
 *
 * - find-words-that-can-be-formed-by-characters (Easy)
 * - maximum-number-of-occurrences-of-a-substring (Medium)
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n + m)
 * Space Complexity: O(1)
 * `n` = `s.length`, `m` = `target.length`
 *
 * @param {string} s
 * @param {string} target
 * @returns {number}
 */
const rearrangeCharacters = (s, target) => {
        const n = s.length;
        const m = target.length;
        const cnts = new Uint32Array(26);
        const cntt = new Uint32Array(26);

        for (let i = 0; i < n; i++) {
                cnts[s.charCodeAt(i) - 97]++;
        }

        for (let i = 0; i < m; i++) {
                cntt[target.charCodeAt(i) - 97]++;
        }

        let res = n;

        for (let i = 0; i < 26; i++) {
                if (cntt[i] === 0) {
                        continue;
                }

                res = Math.min(res, Math.floor(cnts[i] / cntt[i]));
        }

        return res;
};

export { rearrangeCharacters };
