/**
 * 2009. Minimum Number of Operations to Make Array Continuous
 *
 * Link: https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-03-29
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Binary Search (topic_11)
 * - Sliding Window (topic_55821)
 *
 * Stats:
 * - Total Accepted: 86,773
 * - Total Submissions: 166,639
 * - Acceptance Rate: 52.1%
 *
 * Similar Problems:
 * - continuous-subarray-sum (Medium)
 * - longest-repeating-character-replacement (Medium)
 * - moving-stones-until-consecutive-ii (Medium)
 * - minimum-adjacent-swaps-for-k-consecutive-ones (Hard)
 * - minimum-one-bit-operations-to-make-integers-zero (Hard)
 */

/**
 * Approach: Sliding Window
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
const minOperations = (nums) => {
        const n = nums.length;
        const arr = [...new Set(nums)];
        arr.sort((a, b) => a - b);
        let maxLen = 0;

        for (let l = 0, r = 0; r < arr.length; r++) {
                while (arr[r] > arr[l] + n - 1) {
                        l++;
                }

                maxLen = Math.max(maxLen, r - l + 1);
        }

        return n - maxLen;
};

export { minOperations };
