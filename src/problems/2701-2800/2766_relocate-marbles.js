/**
 * 2766. Relocate Marbles
 *
 * Link: https://leetcode.com/problems/relocate-marbles/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-02
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Sorting (topic_61049)
 * - Simulation (topic_61055)
 * - Senior (position_senior)
 * - Biweekly Contest 108 (contest_biweekly-contest-108)
 *
 * Stats:
 * - Total Accepted: 26,460
 * - Total Submissions: 50,929
 * - Acceptance Rate: 52.0%
 */

/**
 * Approach: Sorting
 * Time Complexity: O(n lg n)
 * Space Complexity: O(n)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @param {number[]} moveFrom
 * @param {number[]} moveTo
 * @return {number[]}
 */
const relocateMarbles = (nums, moveFrom, moveTo) => {
        const set = new Set(nums);

        for (let i = 0; i < moveFrom.length; i++) {
                set.delete(moveFrom[i]);
                set.add(moveTo[i]);
        }

        return Uint32Array.from(set).sort();
};

export { relocateMarbles };
