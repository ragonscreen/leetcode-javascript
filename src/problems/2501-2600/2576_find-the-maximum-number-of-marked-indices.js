/**
 * 2576. Find the Maximum Number of Marked Indices
 *
 * Link: https://leetcode.com/problems/find-the-maximum-number-of-marked-indices/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-21
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Two Pointers (topic_9)
 * - Binary Search (topic_11)
 * - Greedy (topic_17)
 * - Sorting (topic_61049)
 * - Staff (position_staff)
 * - Weekly Contest 334 (contest_weekly-contest-334)
 *
 * Stats:
 * - Total Accepted: 27,467
 * - Total Submissions: 66,537
 * - Acceptance Rate: 41.3%
 *
 * Similar Problems:
 * - minimum-array-length-after-pair-removals (Medium)
 */

/**
 * Approach: Sorting + Greedy
 * Time Complexity: O(n lg n)
 * Space Complexity: O(1)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @return {number}
 */
const maxNumOfMarkedIndices = (nums) => {
        nums.sort((a, b) => a - b);
        const n = nums.length;
        const m = n >> 1;
        let l = 0;

        for (let r = m; l < m && r < n; r++) {
                if (2 * nums[l] <= nums[r]) {
                        l++;
                }
        }

        return 2 * l;
};

export { maxNumOfMarkedIndices };
