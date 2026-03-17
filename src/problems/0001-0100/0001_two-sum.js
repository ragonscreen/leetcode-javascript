/**
 * 0001. Two Sum
 *
 * Link: https://leetcode.com/problems/two-sum/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2025-12-07
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
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
 * - two-sum-iii-data-structure-design (Easy)
 * - two-sum-iv-input-is-a-bst (Easy)
 * - two-sum-less-than-k (Easy)
 * - 3sum (Medium)
 * - 4sum (Medium)
 * - count-good-meals (Medium)
 * - max-number-of-k-sum-pairs (Medium)
 * - node-with-highest-edge-score (Medium)
 * - number-of-pairs-of-strings-with-concatenation-equal-to-target (Medium)
 * - subarray-sum-equals-k (Medium)
 * - two-sum-ii-input-array-is-sorted (Medium)
 * - number-of-excellent-pairs (Hard)
 */

/**
 * Approach: Hash Map
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
                const pairIdx = map.get(pair);

                if (pairIdx !== undefined) {
                        return [i, pairIdx];
                }

                map.set(num, i);
        }

        return [];
};

export { twoSum };
