/**
 * 3853. Merge Close Characters
 *
 * Link: https://leetcode.com/problems/merge-close-characters/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-10-17
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Hash Table (topic_6)
 * - String (topic_10)
 * - Simulation (topic_61055)
 * - Senior (position_senior)
 * - Biweekly Contest 177 (contest_biweekly-contest-177)
 *
 * Stats:
 *
 * - Total Accepted: 30,413
 * - Total Submissions: 56,279
 * - Acceptance Rate: 54.0%
 *
 * Similar Problems:
 *
 * - merge-close-characters-ii (Medium) (Premium)
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `s.length`
 *
 * @param {string} s
 * @param {number} k
 * @returns {string}
 */
const mergeCharacters = (s, k) => {
        const n = s.length;
        const lastIdx = new Int32Array(26).fill(1 << 31);
        let res = '';

        for (let i = 0, offset = 0; i < n; i++) {
                const c = s[i];
                const v = c.charCodeAt() - 97;
                const j = i - offset;
                const dist = j - lastIdx[v];

                if (dist > k) {
                        lastIdx[v] = j;
                        res += c;
                } else {
                        offset++;
                }
        }

        return res;
};

export { mergeCharacters };
