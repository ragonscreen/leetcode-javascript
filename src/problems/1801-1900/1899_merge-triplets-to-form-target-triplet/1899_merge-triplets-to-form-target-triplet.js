/**
 * 1899. Merge Triplets to Form Target Triplet
 *
 * Link: https://leetcode.com/problems/merge-triplets-to-form-target-triplet/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-10-17
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Greedy (topic_17)
 * - Staff (position_staff)
 * - Weekly Contest 245 (contest_weekly-contest-245)
 *
 * Stats:
 *
 * - Total Accepted: 134,666
 * - Total Submissions: 193,527
 * - Acceptance Rate: 69.6%
 */

/**
 * Approach: Greedy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `triplets.length`
 *
 * @param {number[][]} triplets
 * @param {number[]} target
 * @returns {boolean}
 */
const mergeTriplets = (triplets, target) => {
        const [a, b, c] = target;
        const seen = [0, 0, 0];

        for (const [x, y, z] of triplets) {
                if (x === a && y <= b && z <= c) seen[0] = 1;
                if (y === b && x <= a && z <= c) seen[1] = 1;
                if (z === c && x <= a && y <= b) seen[2] = 1;
        }

        return seen[0] && seen[1] && seen[2];
};

export { mergeTriplets };
