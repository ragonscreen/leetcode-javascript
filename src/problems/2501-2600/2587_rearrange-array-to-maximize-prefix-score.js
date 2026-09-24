/**
 * 2587. Rearrange Array to Maximize Prefix Score
 *
 * Link: https://leetcode.com/problems/rearrange-array-to-maximize-prefix-score/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-24
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Greedy (topic_17)
 * - Sorting (topic_61049)
 * - Prefix Sum (topic_61068)
 * - Senior (position_senior)
 * - Weekly Contest 336 (contest_weekly-contest-336)
 *
 * Stats:
 *
 * - Total Accepted: 42,544
 * - Total Submissions: 98,446
 * - Acceptance Rate: 43.2%
 *
 * Similar Problems:
 *
 * - two-city-scheduling (Medium)
 */

/**
 * Approach: Greedy + Prefix Sum + Sorting [II]
 * Time Complexity: O(n lg n)
 * Space Complexity: O(n)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @returns {number}
 */
const maxScore = (nums) => {
        const vals = Int32Array.from(nums).sort((a, b) => b - a);

        if (vals[0] <= 0) return 0;

        let sum = 0;
        let res = 0;

        for (const num of vals) {
                sum += num;

                if (sum <= 0) break;

                res++;
        }

        return res;
};

/**
 * Approach: Greedy + Prefix Sum + Sorting [I]
 * Time Complexity: O(n lg n)
 * Space Complexity: O(n)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @returns {number}
 */
const maxScore1 = (nums) => {
        const vals = Int32Array.from(nums);
        let cntp = 0;
        let cntz = 0;
        let sum = 0;

        for (const num of vals) {
                if (num === 0) {
                        cntz++;
                } else if (num > 0) {
                        sum += num;
                        cntp++;
                }
        }

        if (cntp === 0) return 0;

        vals.sort((a, b) => b - a);
        let res = cntp + cntz;

        for (const num of vals) {
                if (num >= 0) continue;

                sum += num;

                if (sum <= 0) break;

                res++;
        }

        return res;
};

export { maxScore, maxScore1 };
