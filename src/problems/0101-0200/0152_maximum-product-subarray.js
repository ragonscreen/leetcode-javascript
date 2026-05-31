/**
 * 0152. Maximum Product Subarray
 *
 * Link: https://leetcode.com/problems/maximum-product-subarray/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-31
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Dynamic Programming (topic_13)
 *
 * Stats:
 * - Total Accepted: 2,051,235
 * - Total Submissions: 5,628,882
 * - Acceptance Rate: 36.4%
 *
 * Similar Problems:
 * - maximum-product-of-three-numbers (Easy)
 * - house-robber (Medium)
 * - maximum-subarray (Medium)
 * - product-of-array-except-self (Medium)
 * - subarray-product-less-than-k (Medium)
 */

/**
 * Approach: Sliding Window + Greedy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = (nums) => {
        const helper = (l, r) => {
                // invalid window / only 1 number in window
                if (r <= l) {
                        return nums[l];
                }

                let cntNeg = 0;
                let mult = 1;
                let lneg;
                let rneg;

                for (let i = l; i <= r; i++) {
                        const num = nums[i];
                        mult *= num;

                        if (num < 0) {
                                cntNeg++;
                                lneg ??= i;
                                rneg = i;
                        }
                }

                if (cntNeg % 2 === 0) {
                        return mult;
                }

                let lmult = 1;

                for (let i = l; i < rneg; i++) {
                        lmult *= nums[i];
                }

                let rmult = 1;

                for (let i = r; i > lneg; i--) {
                        rmult *= nums[i];
                }

                return Math.max(lmult, rmult);
        };

        const n = nums.length;
        let res = nums[0];

        for (let l = 0, r = 0; r < n; r++) {
                if (nums[r] === 0) {
                        res = Math.max(res, 0, helper(l, r - 1));

                        while (nums[r] === 0) {
                                r++;
                        }

                        l = r;
                }

                if (r === n - 1) {
                        res = Math.max(res, helper(l, r));
                }
        }

        return res;
};

export { maxProduct };
