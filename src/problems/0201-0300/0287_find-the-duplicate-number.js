/**
 * 0287. Find the Duplicate Number
 *
 * Link: https://leetcode.com/problems/find-the-duplicate-number/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-15
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Two Pointers (topic_9)
 * - Binary Search (topic_11)
 * - Bit Manipulation (topic_19)
 *
 * Stats:
 * - Total Accepted: 2,567,667
 * - Total Submissions: 3,993,174
 * - Acceptance Rate: 64.3%
 *
 * Similar Problems:
 * - missing-number (Easy)
 * - set-mismatch (Easy)
 * - single-number (Easy)
 * - linked-list-cycle-ii (Medium)
 * - first-missing-positive (Hard)
 */

/**
 * Approach: Fast and Slow Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = (nums) => {
        // the distance between intersection and entry point ==
        // the distance between start of list and entry point
        // the fast pointer must always do at least one full loop of the cycle
        // before traversing part of the cycle again to reach the slow pointer
        let slow = nums[0];
        let fast = nums[nums[0]];

        while (slow !== fast) {
                slow = nums[slow];
                fast = nums[nums[fast]];
        }

        let find = 0;

        while (find !== slow) {
                slow = nums[slow];
                find = nums[find];
        }

        return find;
};

export { findDuplicate };
