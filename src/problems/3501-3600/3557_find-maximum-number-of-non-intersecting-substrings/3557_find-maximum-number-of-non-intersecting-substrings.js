/**
 * 3557. Find Maximum Number of Non Intersecting Substrings
 *
 * Link: https://leetcode.com/problems/find-maximum-number-of-non-intersecting-substrings/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-24
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Hash Table (topic_6)
 * - String (topic_10)
 * - Dynamic Programming (topic_13)
 * - Greedy (topic_17)
 * - Senior (position_senior)
 * - Biweekly Contest 157 (contest_biweekly-contest-157)
 *
 * Stats:
 *
 * - Total Accepted: 17,319
 * - Total Submissions: 55,990
 * - Acceptance Rate: 30.9%
 */

/**
 * Approach: Greedy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `word.length`
 *
 * At each step choose the first "valid" character. A "valid" char is a char that has been seen
 * before. Choosing the first such char ensures that we greedily select the interval with the
 * smallest endpoint. To make sure we do not select intersecting intervals, we discard all seen
 * chars as soon as a valid char is found.
 *
 * @param {string} word
 * @returns {number}
 */
const maxSubstrings = (word) => {
        const map = new Int32Array(26).fill(-1);
        let res = 0;

        for (let i = 0; i < word.length; i++) {
                const ch = word.charCodeAt(i) - 97;
                const j = map[ch];

                if (j === -1) {
                        map[ch] = i;
                        continue;
                }

                if (i - j + 1 >= 4) {
                        res++;
                        map.fill(-1);
                }
        }

        return res;
};

export { maxSubstrings };
