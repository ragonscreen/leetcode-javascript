/**
 * 3069. Distribute Elements Into Two Arrays I
 *
 * Link: https://leetcode.com/problems/distribute-elements-into-two-arrays-i/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-08-31
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Simulation (topic_61055)
 * - Mid Level (position_mid-level)
 * - Weekly Contest 387 (contest_weekly-contest-387)
 *
 * Stats:
 *
 * - Total Accepted: 204,030
 * - Total Submissions: 243,879
 * - Acceptance Rate: 83.7%
 *
 * Similar Problems:
 *
 * - divide-array-into-equal-pairs (Easy)
 * - split-array-largest-sum (Hard)
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary, O(n) total
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @returns {number[]}
 */
const resultArray = (nums) => {
        const arr1 = [nums[0]];
        const arr2 = [nums[1]];

        for (let i = 2; i < nums.length; i++) {
                const num = nums[i];

                if (arr1.at(-1) > arr2.at(-1)) {
                        arr1.push(num);
                } else {
                        arr2.push(num);
                }
        }

        return arr1.concat(arr2);
};

export { resultArray };
