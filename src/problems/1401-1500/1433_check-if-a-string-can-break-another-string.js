/**
 * 1433. Check If a String Can Break Another String
 *
 * Link: https://leetcode.com/problems/check-if-a-string-can-break-another-string/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-27
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 * - Greedy (topic_17)
 * - Sorting (topic_61049)
 *
 * Stats:
 * - Total Accepted: 53,871
 * - Total Submissions: 75,933
 * - Acceptance Rate: 70.9%
 */

/**
 * Approach: Sorting + Greedy
 * Time Complexity: O(n log n + m log m)
 * Space Complexity: O(1) auxiliary, O(n + m) for sorting
 * `n` = length of `s1`, `m` = length of `s2`
 *
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkIfCanBreak = (s1, s2) => {
        const x = [...s1].sort((a, b) => a.charCodeAt() - b.charCodeAt());
        const y = [...s2].sort((a, b) => a.charCodeAt() - b.charCodeAt());
        let seenPos = false;
        let seenNeg = false;

        for (let i = 0; i < s1.length; i++) {
                const a = x[i];
                const b = y[i];

                if (a > b) {
                        seenPos = true;
                }

                if (a < b) {
                        seenNeg = true;
                }

                if (seenPos && seenNeg) {
                        return false;
                }
        }

        return true;
};

export { checkIfCanBreak };
