/**
 * 0027. Remove Element
 * Link: https://leetcode.com/problems/remove-element/
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
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
        let slow = 0;
        let fast = 0;

        while (fast < nums.length) {
                if (nums[fast] !== val) {
                        nums[slow++] = nums[fast];
                }

                fast++;
        }

        return slow;
};

export { removeElement };
