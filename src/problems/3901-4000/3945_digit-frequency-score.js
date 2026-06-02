/**
 * 3945. Digit Frequency Score
 *
 * Link: https://leetcode.com/problems/digit-frequency-score/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-05-31
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Mid Level (position_mid-level)
 * - Weekly Contest 504 (contest_weekly-contest-504)
 *
 * Stats:
 * - Total Accepted: 40,488
 * - Total Submissions: 44,311
 * - Acceptance Rate: 91.4%
 */

/**
 * Approach: Math
 * Time Complexity: O(log n)
 * Space Complexity: O(log n)
 *
 * @param {number} n
 * @return {number}
 */
const digitFrequencyScore = (n) => {
        const map = new Map();

        while (n) {
                const d = n % 10;
                n = 0 | (n / 10);
                map.set(d, (map.get(d) || 0) + 1);
        }

        let res = 0;

        for (const [num, frq] of map) {
                res += num * frq;
        }

        return res;
};

export { digitFrequencyScore };
