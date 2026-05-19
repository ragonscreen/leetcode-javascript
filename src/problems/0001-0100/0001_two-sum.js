/**
 * 0001. Two Sum
 *
 * Link: https://leetcode.com/problems/two-sum/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2025-12-07 (Updated: 2026-05-19)
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Junior (position_junior)
 *
 * Stats:
 * - Total Accepted: 20,988,975
 * - Total Submissions: 36,715,356
 * - Acceptance Rate: 57.2%
 *
 * Similar Problems:
 * - check-distances-between-same-letters (Easy)
 * - count-number-of-pairs-with-absolute-difference-k (Easy)
 * - count-pairs-whose-sum-is-less-than-target (Easy)
 * - find-all-k-distant-indices-in-an-array (Easy)
 * - find-subarrays-with-equal-sum (Easy)
 * - first-letter-to-appear-twice (Easy)
 * - largest-positive-integer-that-exists-with-its-negative (Easy)
 * - number-of-arithmetic-triplets (Easy)
 * - number-of-distinct-averages (Easy)
 * - two-sum-iii-data-structure-design (Easy) (Premium)
 * - two-sum-iv-input-is-a-bst (Easy)
 * - two-sum-less-than-k (Easy) (Premium)
 * - 3sum (Medium)
 * - 4sum (Medium)
 * - count-good-meals (Medium)
 * - max-number-of-k-sum-pairs (Medium)
 * - node-with-highest-edge-score (Medium)
 * - number-of-pairs-of-strings-with-concatenation-equal-to-target (Medium)
 * - subarray-sum-equals-k (Medium)
 * - two-sum-ii-input-array-is-sorted (Medium)
 * - number-of-excellent-pairs (Hard)
 *
 * Custom Details:
 * - Level: 3 (custom-level_3)
 * - Simulation (custom-topic_simulation)
 * - Sorting (custom-topic_sorting)
 * - Two Pointers (custom-topic_two-pointers)
 * - Two Pointers on One Array (custom-tag_two-pointers-on-one-array)
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
                const num = nums[i];
                const pair = target - num;
                const j = map.get(pair) ?? -1;

                if (j !== -1) {
                        return [j, i];
                }

                map.set(num, i);
        }

        return [-1, -1];
};

/**
 * Approach: Sorting + Two Pointers
 * Time Complexity: O(n lg n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum1 = (nums, target) => {
        const n = nums.length;
        const vals = new Array(n);

        for (let i = 0; i < n; i++) {
                vals[i] = [nums[i], i];
        }

        vals.sort((a, b) => a[0] - b[0]);
        let l = 0;
        let r = n - 1;

        while (l < r) {
                const [a, i] = vals[l];
                const [b, j] = vals[r];
                const sum = a + b;

                if (sum === target) {
                        return [i, j];
                }

                if (sum < target) {
                        l++;
                } else {
                        r--;
                }
        }

        return [-1, -1];
};

export { twoSum, twoSum1 };
