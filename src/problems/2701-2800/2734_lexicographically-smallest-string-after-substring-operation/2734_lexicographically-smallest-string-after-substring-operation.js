/**
 * 2734. Lexicographically Smallest String After Substring Operation
 *
 * Link: https://leetcode.com/problems/lexicographically-smallest-string-after-substring-operation/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-10-17
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - String (topic_10)
 * - Greedy (topic_17)
 * - Senior (position_senior)
 * - Weekly Contest 349 (contest_weekly-contest-349)
 *
 * Stats:
 *
 * - Total Accepted: 37,962
 * - Total Submissions: 108,469
 * - Acceptance Rate: 35.0%
 *
 * Similar Problems:
 *
 * - lexicographically-smallest-string-after-applying-operations (Medium)
 * - lexicographically-smallest-string-after-operations-with-constraint (Medium)
 * - replace-question-marks-in-string-to-minimize-its-value (Medium)
 * - shifting-letters (Medium)
 */

/**
 * Approach: Greedy
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary, O(n) total
 * `n` = `s.length`
 *
 * @param {string} s
 * @returns {string}
 */
const smallestString = (s) => {
        const n = s.length;
        let i = 0;

        while (s[i] === 'a') i++;

        if (i === n) return `${'a'.repeat(n - 1)}z`;

        let mid = '';
        let j = i;

        while (j < n && s[j] !== 'a') mid += String.fromCharCode(s.charCodeAt(j++) - 1);

        return s.slice(0, i) + mid + s.slice(j);
};

export { smallestString };
