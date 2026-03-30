/**
 * 2529. Maximum Count of Positive Integer and Negative Integer
 *
 * Link: https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-03-30
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Binary Search (topic_11)
 * - Counting (topic_61062)
 *
 * Stats:
 * - Total Accepted: 359,998
 * - Total Submissions: 484,572
 * - Acceptance Rate: 74.3%
 *
 * Similar Problems:
 * - binary-search (Easy)
 * - count-negative-numbers-in-a-sorted-matrix (Easy)
 */

/**
 * Approach: Binary Search
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
const maximumCount = (nums) => {
        const idxLeft = lowerBound(nums, 0);
        const idxRight = upperBound(nums, 0);
        const countPos = nums.length - idxRight;
        const countNeg = idxLeft;

        return Math.max(countPos, countNeg);
};

const lowerBound = (arr, target) => {
        let l = 0;
        let r = arr.length;

        while (l < r) {
                const m = l + Math.floor((r - l) / 2);

                if (arr[m] < target) {
                        l = m + 1;
                } else {
                        r = m;
                }
        }

        return l;
};

const upperBound = (arr, target) => {
        let l = 0;
        let r = arr.length;

        while (l < r) {
                const m = l + Math.floor((r - l) / 2);

                if (arr[m] <= target) {
                        l = m + 1;
                } else {
                        r = m;
                }
        }

        return l;
};

export { maximumCount };
