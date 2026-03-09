/**
 * 0041. First Missing Positive
 * Link: https://leetcode.com/problems/first-missing-positive/
 * Difficulty: Hard
 * Date: 2026-03-09
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Cyclic Sort + Negative Marking
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary
 *
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = (nums) => {
        const n = nums.length;

        for (let i = 0; i < n; i++) {
                if (nums[i] <= 0) {
                        nums[i] = n + 1;
                }
        }

        for (const num of nums) {
                let idx = Math.abs(num) - 1;

                while (nums[idx] > 0) {
                        const tmp = nums[idx];
                        nums[idx] *= -1;
                        idx = tmp - 1;
                }
        }

        for (let i = 0; i < n; i++) {
                if (nums[i] > 0) {
                        return i + 1;
                }
        }

        return n + 1;
};

export { firstMissingPositive };
