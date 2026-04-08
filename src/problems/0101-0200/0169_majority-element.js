/**
 * 0169. Majority Element
 *
 * Link: https://leetcode.com/problems/majority-element/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-02-05
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Divide and Conquer (topic_12)
 * - Sorting (topic_61049)
 * - Counting (topic_61062)
 *
 * Stats:
 * - Total Accepted: 5,317,779
 * - Total Submissions: 8,037,950
 * - Acceptance Rate: 66.2%
 *
 * Similar Problems:
 * - check-if-a-number-is-majority-element-in-a-sorted-array (Easy)
 * - find-valid-pair-of-adjacent-digits-in-string (Easy)
 * - minimum-operations-to-exceed-threshold-value-i (Easy)
 * - most-frequent-even-element (Easy)
 * - find-the-most-common-response (Medium)
 * - majority-element-ii (Medium)
 * - minimum-index-of-a-valid-split (Medium)
 */

/**
 * Approach: Randomisation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
        while (true) {
                const val = nums[Math.floor(Math.random() * nums.length)];
                let frq = 0;

                for (const num of nums) {
                        if (num === val) {
                                frq++;
                        }
                }

                if (frq > Math.floor(nums.length / 2)) {
                        return val;
                }
        }
};

/**
 * Approach: Boyer-Moore Majority Vote Algorithm
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement1 = (nums) => {
        let frq = 0;
        let res = 0;

        for (const n of nums) {
                if (frq === 0) {
                        res = n;
                        frq++;
                } else if (n === res) {
                        frq++;
                } else {
                        frq--;
                }
        }

        return res;
};

/**
 * Approach: Hash Map
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement2 = (nums) => {
        const map = {};
        let res = 0;
        let max = 0;

        for (const num of nums) {
                const frq = (map[num] || 0) + 1;
                map[num] = frq;

                if (frq > max) {
                        res = num;
                        max = frq;
                }
        }

        return res;
};

export { majorityElement, majorityElement1, majorityElement2 };
