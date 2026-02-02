/**
 * 0026. Remove Duplicates from Sorted Array
 * Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * Difficulty: Easy
 * Date: 2026-02-02
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Fast and Slow Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
        let slow = 1;
        let fast = 1;

        while (fast < nums.length) {
                if (nums[fast] !== nums[fast - 1]) {
                        nums[slow++] = nums[fast];
                }

                fast++;
        }

        return slow;
};

export { removeDuplicates };
