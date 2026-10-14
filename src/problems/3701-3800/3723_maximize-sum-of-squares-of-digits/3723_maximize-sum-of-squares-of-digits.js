/**
 * 3723. Maximize Sum of Squares of Digits
 *
 * Link: https://leetcode.com/problems/maximize-sum-of-squares-of-digits/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-10-14
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Math (topic_8)
 * - Greedy (topic_17)
 * - Staff (position_staff)
 * - Biweekly Contest 168 (contest_biweekly-contest-168)
 *
 * Stats:
 *
 * - Total Accepted: 105,473
 * - Total Submissions: 150,537
 * - Acceptance Rate: 70.1%
 */

/**
 * Approach: Math + Greedy
 * Time Complexity: O(N)
 * Space Complexity: O(1) auxiliary, O(N) total
 * `N` = `num`
 *
 * @param {number} num
 * @param {number} sum
 * @returns {string}
 */
const maxSumOfSquares = (num, sum) => {
        if (num * 9 < sum) return '';

        const cnt9 = Math.floor(sum / 9);
        let res = '9'.repeat(cnt9);
        sum -= 9 * cnt9;

        if (sum > 0) res += sum;

        res += '0'.repeat(num - res.length);

        return res;
};

export { maxSumOfSquares };
