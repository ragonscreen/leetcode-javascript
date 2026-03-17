/**
 * 1929. Concatenation of Array
 *
 * Link: https://leetcode.com/problems/concatenation-of-array/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-02-03
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Simulation (topic_61055)
 *
 * Stats:
 * - Total Accepted: 1,377,075
 * - Total Submissions: 1,521,941
 * - Acceptance Rate: 90.5%
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary, O(n) total
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const getConcatenation = (nums) => {
        const n = nums.length;
        const res = new Array(n * 2);

        for (let i = 0; i < n; i++) {
                const v = nums[i];
                res[i] = v;
                res[i + n] = v;
        }

        return res;
};

export { getConcatenation };
