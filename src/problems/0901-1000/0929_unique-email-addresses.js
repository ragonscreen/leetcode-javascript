/**
 * 0929. Unique Email Addresses
 *
 * Link: https://leetcode.com/problems/unique-email-addresses/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-02-04
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - String (topic_10)
 *
 * Stats:
 * - Total Accepted: 574,475
 * - Total Submissions: 847,187
 * - Acceptance Rate: 67.8%
 */

/**
 * Approach: Hash Set + Regex
 * Time Complexity: O(n * m)
 * Space Complexity: O(n)
 * `n` = length of `emails`, `m` = length of the longest string in `emails`
 *
 * @param {string[]} emails
 * @return {number}
 */
const numUniqueEmails = (emails) => {
        const set = new Set();

        for (const e of emails) {
                set.add(e.replace(/\.(?=.*@)|(\+.*)(?=@)/g, ''));
        }

        return set.size;
};

export { numUniqueEmails };
