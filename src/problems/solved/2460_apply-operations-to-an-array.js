/**
 * 2460. Apply Operations to an Array
 * Link: https://leetcode.com/problems/apply-operations-to-an-array/
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
 * @return {number[]}
 */
const applyOperations = (nums) => {
        for (let i = 0; i < nums.length - 1; i++) {
                if (nums[i] === nums[i + 1]) {
                        nums[i] *= 2;
                        nums[i + 1] = 0;
                }
        }

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

export { applyOperations };
