/**
 * 0453. Minimum Moves to Equal Array Elements
 *
 * Link: https://leetcode.com/problems/minimum-moves-to-equal-array-elements/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-04
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Math (topic_8)
 *
 * Stats:
 * - Total Accepted: 218,111
 * - Total Submissions: 372,099
 * - Acceptance Rate: 58.6%
 *
 * Similar Problems:
 * - find-minimum-operations-to-make-all-elements-divisible-by-three (Easy)
 * - divide-players-into-teams-of-equal-skill (Medium)
 * - minimum-moves-to-equal-array-elements-ii (Medium)
 * - pour-water-between-buckets-to-make-water-levels-equal (Medium)
 * - maximum-running-time-of-n-computers (Hard)
 */

/**
 * Approach: Math
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
const minMoves = (nums) => {
        const min = Math.min(...nums);
        let res = 0;

        for (const num of nums) {
                res += num - min;
        }

        return res;
};

export { minMoves };
