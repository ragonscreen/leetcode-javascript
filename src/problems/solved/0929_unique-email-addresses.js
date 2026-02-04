/**
 * 0929. Unique Email Addresses
 * Link: https://leetcode.com/problems/unique-email-addresses/
 * Difficulty: Easy
 * Date: 2026-02-04
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Hash Set + Regex
 * Time Complexity: O(n * m)
 * Space Complexity: O(n)
 * `n` = length of `emails`; `m` = average length of email addresses in `emails`
 *
 * @param {string[]} emails
 * @return {number}
 */
const numUniqueEmails = (emails) => {
        const set = new Set();

        for (const e of emails) {
                set.add(e.replace(/\.(?=.*@)|(\+.*)(?=@)/g, ``));
        }

        return set.size;
};

export { numUniqueEmails };
