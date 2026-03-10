/**
 * 3862. Find the Smallest Balanced Index
 * Link: https://leetcode.com/problems/find-the-smallest-balanced-index/
 * Difficulty: Medium
 * Date: 2026-03-10
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Prefix Sum
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
const smallestBalancedIndex = (nums) => {
        const n = nums.length;
        let sum = 0;

        for (let i = 0; i < n; i++) {
                sum += nums[i];
        }

        let prod = 1;

        for (let i = n - 1; i >= 0; i--) {
                const num = nums[i];
                sum -= num;

                if (sum === prod) {
                        return i;
                }

                prod *= num;
        }

        return -1;
};

export { smallestBalancedIndex };
