/**
 * 0065. Valid Number
 *
 * Link: https://leetcode.com/problems/valid-number/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-04-11
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 *
 * Stats:
 * - Total Accepted: 514,839
 * - Total Submissions: 2,256,931
 * - Acceptance Rate: 22.8%
 *
 * Similar Problems:
 * - string-to-integer-atoi (Medium)
 */

/**
 * Approach: Regex
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {string} s
 * @return {boolean}
 */
const isNumber = (s) => {
        const re = /^[+-]?(\.\d+|\d+\.\d*|\d+)([eE][+-]?\d+)?$/;

        return re.test(s);
};

export { isNumber };
