/**
 * 0167. Two Sum II - Input Array Is Sorted
 *
 * Link: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-01-16
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Two Pointers (topic_9)
 * - Binary Search (topic_11)
 *
 * Stats:
 * - Total Accepted: 3,276,953
 * - Total Submissions: 5,063,500
 * - Acceptance Rate: 64.7%
 *
 * Similar Problems:
 * - two-sum (Easy)
 * - two-sum-iv-input-is-a-bst (Easy)
 * - two-sum-less-than-k (Easy)
 */

/**
 * Approach: Two Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
        let l = 0;
        let r = numbers.length - 1;

        while (l < r) {
                const v = numbers[l] + numbers[r];

                if (v === target) {
                        return [l + 1, r + 1];
                }

                v < target ? l++ : r--;
        }
};

export { twoSum };
