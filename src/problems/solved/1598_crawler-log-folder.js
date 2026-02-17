/**
 * 1598. Crawler Log Folder
 * Link: https://leetcode.com/problems/crawler-log-folder/
 * Difficulty: Easy
 * Date: 2026-02-17
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Counting
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
