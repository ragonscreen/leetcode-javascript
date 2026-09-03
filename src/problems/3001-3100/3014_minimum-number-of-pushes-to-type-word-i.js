/**
 * 3014. Minimum Number of Pushes to Type Word I
 *
 * Link: https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-08-25
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Math (topic_8)
 * - String (topic_10)
 * - Greedy (topic_17)
 * - Mid Level (position_mid-level)
 * - Weekly Contest 381 (contest_weekly-contest-381)
 *
 * Stats:
 *
 * - Total Accepted: 192,224
 * - Total Submissions: 248,309
 * - Acceptance Rate: 77.4%
 *
 * Similar Problems:
 *
 * - letter-combinations-of-a-phone-number (Medium)
 */

/**
 * Approach: Greedy + Math
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 *
 * @param {string} word
 * @returns {number}
 */
const minimumPushes = (word) => {
        // the number of keypresses is in arithmetic progression
        // with a difference of 8
        const an = word.length;
        const n = an >> 3;
        const a1 = an - 8 * n;

        return ((n + 1) * (a1 + an)) >> 1;
};

/**
 * Approach: Greedy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `word.length`
 *
 * @param {string} word
 * @returns {number}
 */
const minimumPushes1 = (word) => {
        let n = word.length;
        let res = 0;

        while (n > 0) {
                res += n;
                n -= 8;
        }

        return res;
};

export { minimumPushes, minimumPushes1 };
