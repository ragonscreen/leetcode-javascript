/**
 * 2028. Find Missing Observations
 *
 * Link: https://leetcode.com/problems/find-missing-observations/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-07
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Math (topic_8)
 * - Simulation (topic_61055)
 *
 * Stats:
 * - Total Accepted: 174,971
 * - Total Submissions: 305,020
 * - Acceptance Rate: 57.4%
 *
 * Similar Problems:
 * - number-of-dice-rolls-with-target-sum (Medium)
 * - dice-roll-simulation (Hard)
 */

/**
 * Approach: Math + Greedy
 * Time Complexity: O(N + m)
 * Space Complexity: O(1) auxiliary, O(N) total
 * `N` = `n`, `m` = length of `rolls`
 *
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
const missingRolls = (rolls, mean, n) => {
        const m = rolls.length;
        let sum = 0;

        for (let i = 0; i < m; i++) {
                sum += rolls[i];
        }

        const mult = mean * (n + m);
        let rem = mult - sum;

        if (rem > 6 * n || rem < n) {
                return [];
        }

        const val = Math.floor(rem / n);
        const res = new Uint8Array(n).fill(val);
        rem %= n;
        let i = 0;

        while (rem) {
                const ok = Math.min(rem, 6 - res[i]);
                res[i++] += ok;
                rem -= ok;
        }

        return res;
};

export { missingRolls };
