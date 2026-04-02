/**
 * 0540. Single Element in a Sorted Array
 *
 * Link: https://leetcode.com/problems/single-element-in-a-sorted-array/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-03
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Binary Search (topic_11)
 *
 * Stats:
 * - Total Accepted: 1,189,058
 * - Total Submissions: 2,007,134
 * - Acceptance Rate: 59.2%
 */

/**
 * Approach: Binary Search
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
const singleNonDuplicate = (nums) => {
        let l = 0;
        let r = nums.length - 1;

        while (l <= r) {
                const m = l + Math.floor((r - l) / 2);
                const num = nums[m];
                const prev = nums[m - 1];
                const next = nums[m + 1];

                if (num !== prev && num !== next) {
                        return num;
                }

                if (num === prev) {
                        if (m % 2) {
                                l = m + 1;
                        } else {
                                r = m - 1;
                        }
                }

                if (num === next) {
                        if (m % 2) {
                                r = m - 1;
                        } else {
                                l = m + 1;
                        }
                }
        }
};

export { singleNonDuplicate };
