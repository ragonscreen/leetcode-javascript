/**
 * 1598. Crawler Log Folder
 *
 * Link: https://leetcode.com/problems/crawler-log-folder/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-02-17
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - String (topic_10)
 * - Stack (topic_15)
 *
 * Stats:
 * - Total Accepted: 289,039
 * - Total Submissions: 403,437
 * - Acceptance Rate: 71.6%
 *
 * Similar Problems:
 * - backspace-string-compare (Easy)
 * - baseball-game (Easy)
 */

/**
 * Approach: Counting
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {string[]} logs
 * @return {number}
 */
const minOperations = (logs) => {
        let res = 0;

        for (const log of logs) {
                if (log === './') {
                        continue;
                }

                if (log === '../') {
                        res = Math.max(0, res - 1);
                        continue;
                }

                res++;
        }

        return res;
};

export { minOperations };
