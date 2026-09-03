/**
 * 2391. Minimum Amount of Time to Collect Garbage
 *
 * Link: https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-02
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - String (topic_10)
 * - Prefix Sum (topic_61068)
 * - Senior (position_senior)
 * - Weekly Contest 308 (contest_weekly-contest-308)
 *
 * Stats:
 *
 * - Total Accepted: 159,401
 * - Total Submissions: 187,422
 * - Acceptance Rate: 85.0%
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n * k)
 * Space Complexity: O(1)
 * `n` = `garbage.length`, `k` = `max(garbage[i].length)`
 *
 * @param {string[]} garbage
 * @param {number[]} travel
 * @returns {number}
 */
const garbageCollection = (garbage, travel) => {
        const n = garbage.length;
        let res = garbage[0].length;

        for (let i = n - 1, sum = 0, m = 0, p = 0, g = 0; i > 0; i--) {
                const str = garbage[i];

                // only check each string if we have not already seen all
                // garbage trucks
                if (!(m & p & g)) {
                        for (const c of str) {
                                m |= c === 'M';
                                p |= c === 'P';
                                g |= c === 'G';
                        }

                        sum = m + p + g;
                }

                res += str.length + travel[i - 1] * sum;
        }

        return res;
};

export { garbageCollection };
