/**
 * 0442. Find All Duplicates in an Array
 *
 * Link: https://leetcode.com/problems/find-all-duplicates-in-an-array/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-03-12
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Sorting (topic_61049)
 *
 * Stats:
 * - Total Accepted: 1,021,460
 * - Total Submissions: 1,329,339
 * - Acceptance Rate: 76.8%
 *
 * Similar Problems:
 * - find-all-numbers-disappeared-in-an-array (Easy)
 * - the-two-sneaky-numbers-of-digitville (Easy)
 * - sum-of-distances (Medium)
 */

/**
 * Approach: Negative Marking
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary, O(n) total
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = (nums) => {
        const res = [];

        for (let i = 0; i < nums.length; i++) {
                const num = Math.abs(nums[i]);
                const idx = num - 1;

                if (nums[idx] > 0) {
                        nums[idx] *= -1;
                } else {
                        res.push(num);
                }
        }

        return res;
};

export { findDuplicates };
