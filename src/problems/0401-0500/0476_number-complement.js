/**
 * 476. Number Complement
 *
 * Link: https://leetcode.com/problems/number-complement/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-09-04
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Bit Manipulation (topic_19)
 * - Mid Level (position_mid-level)
 *
 * Stats:
 *
 * - Total Accepted: 570,489
 * - Total Submissions: 808,561
 * - Acceptance Rate: 70.6%
 */

/**
 * Approach: Bit Manipulation
 * Time Complexity: O(lg N)
 * Space Complexity: O(1)
 * `N` = `num`
 *
 * @param {number} num
 * @returns {number}
 */
const findComplement = (num) => {
        let mask = -1;

        while (mask & num) mask <<= 1;

        return num ^ ~mask;
};

export { findComplement };
