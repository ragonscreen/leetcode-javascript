/**
 * 0977. Squares of a Sorted Array
 *
 * Link: https://leetcode.com/problems/squares-of-a-sorted-array/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-03-06
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Two Pointers (topic_9)
 * - Sorting (topic_61049)
 *
 * Stats:
 * - Total Accepted: 2,571,399
 * - Total Submissions: 3,491,725
 * - Acceptance Rate: 73.6%
 *
 * Similar Problems:
 * - merge-sorted-array (Easy)
 * - sort-transformed-array (Medium)
 */

/**
 * Approach: Two Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary, O(n) total
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = (nums) => {
        const n = nums.length;
        const res = new Array(n);
        let l = 0;
        let r = n - 1;
        let idx = n - 1;

        while (l <= r) {
                const nl = Math.abs(nums[l]);
                const nr = Math.abs(nums[r]);

                if (nl < nr) {
                        res[idx--] = nr ** 2;
                        r--;
                } else {
                        res[idx--] = nl ** 2;
                        l++;
                }
        }

        return res;
};

export { sortedSquares };
