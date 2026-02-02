/**
 * 0283. Move Zeroes
 * Link: https://leetcode.com/problems/move-zeroes/
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
 * @return {void}
 */
const moveZeroes = (nums) => {
        let slow = 0;
        let fast = 0;

        while (fast < nums.length) {
                if (nums[fast] !== 0) {
                        if (nums[slow] === 0) {
                                nums[slow] = nums[fast];
                                nums[fast] = 0;
                        }

                        slow++;
                }

                fast++;
        }

        return nums;
};

export { moveZeroes };
