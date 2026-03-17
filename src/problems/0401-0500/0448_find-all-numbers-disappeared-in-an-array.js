/**
 * 0448. Find All Numbers Disappeared in an Array
 *
 * Link: https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-03-09
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 *
 * Stats:
 * - Total Accepted: 1,342,242
 * - Total Submissions: 2,101,808
 * - Acceptance Rate: 63.9%
 *
 * Similar Problems:
 * - append-k-integers-with-minimal-sum (Medium)
 * - find-all-duplicates-in-an-array (Medium)
 * - find-unique-binary-string (Medium)
 * - maximum-number-of-integers-to-choose-from-a-range-i (Medium)
 * - maximum-number-of-integers-to-choose-from-a-range-ii (Medium)
 * - replace-elements-in-an-array (Medium)
 * - first-missing-positive (Hard)
 */

/**
 * Approach: Cyclic Sort + Negative Marking
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary, O(n) total
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = (nums) => {
        for (const num of nums) {
                let idx = Math.abs(num) - 1;

                while (nums[idx] > 0) {
                        const tmp = nums[idx];
                        nums[idx] *= -1;
                        idx = tmp - 1;
                }
        }

        const res = [];

        for (let i = 0; i < nums.length; i++) {
                if (nums[i] > 0) {
                        res.push(i + 1);
                }
        }

        return res;
};

/**
 * Approach: Negative Marking
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary, O(n) total
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers1 = (nums) => {
        for (const num of nums) {
                const idx = Math.abs(num) - 1;

                if (nums[idx] > 0) {
                        nums[idx] *= -1;
                }
        }

        const res = [];

        for (let i = 0; i < nums.length; i++) {
                if (nums[i] > 0) {
                        res.push(i + 1);
                }
        }

        return res;
};

export { findDisappearedNumbers, findDisappearedNumbers1 };
