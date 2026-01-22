/**
 * 0238. Product of Array Except Self
 * Link: https://leetcode.com/problems/product-of-array-except-self/
 * Difficulty: Medium
 * Date: 2025-12-12
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Prefix & Suffix
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
        const res = [];
        let val = 1;

        for (const num of nums) {
                res.push(val);
                val *= num;
        }

        val = 1;

        for (let i = nums.length - 1; i >= 0; i--) {
                res[i] *= val;
                val *= nums[i];
        }

        return res;
};

export { productExceptSelf };
