/**
 * 0167. Two Sum II - Input Array Is Sorted
 * Link: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * Difficulty: Medium
 * Date: 2026-01-16
 * Author: ragonscreen
 */

/**
 * Implementation: Two Pointers
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

export default twoSum;
