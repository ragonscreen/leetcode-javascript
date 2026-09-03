/**
 * 1324. Print Words Vertically
 *
 * Link: https://leetcode.com/problems/print-words-vertically/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-03
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - String (topic_10)
 * - Simulation (topic_61055)
 * - Senior (position_senior)
 * - Weekly Contest 172 (contest_weekly-contest-172)
 *
 * Stats:
 * - Total Accepted: 54,566
 * - Total Submissions: 80,180
 * - Acceptance Rate: 68.1%
 */

/**
 * Approach:
 * Time Complexity: O(n * k)
 * Space Complexity: O(1) auxiliary, O(n * k) total
 * `n` = number of words in `s`, `k` = max length of word
 *
 * @param {string} s
 * @return {string[]}
 */
const printVertically = (s) => {
        const words = s.split(' ');
        const nrows = words.reduce((t, c) => Math.max(t, c.length), 0);
        const ncols = words.length;
        const res = new Array(nrows);

        for (let y = 0; y < nrows; y++) {
                let str = '';

                for (let x = 0; x < ncols; x++) {
                        str += words[x][y] ?? ' ';
                }

                res[y] = str.trimEnd();
        }

        return res;
};

export { printVertically };
