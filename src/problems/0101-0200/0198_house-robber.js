/**
 * 0198. House Robber
 *
 * Link: https://leetcode.com/problems/house-robber/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-12
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Dynamic Programming (topic_13)
 *
 * Stats:
 * - Total Accepted: 3,560,596
 * - Total Submissions: 6,693,518
 * - Acceptance Rate: 53.2%
 *
 * Similar Problems:
 * - count-number-of-ways-to-place-houses (Medium)
 * - delete-and-earn (Medium)
 * - house-robber-ii (Medium)
 * - house-robber-iii (Medium)
 * - house-robber-iv (Medium)
 * - house-robber-v (Medium)
 * - largest-element-in-an-array-after-merge-operations (Medium)
 * - maximum-product-subarray (Medium)
 * - mice-and-cheese (Medium)
 * - paint-fence (Medium)
 * - paint-house (Medium)
 * - solving-questions-with-brainpower (Medium)
 * - coin-path (Hard)
 * - non-negative-integers-without-consecutive-ones (Hard)
 */

/**
 * Approach: Dynamic Programming [Space Optimized]
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
        const n = nums.length;

        if (n <= 1) {
                return n ? nums[0] : 0;
        }

        let dp1 = 0;
        let dp2 = 0;

        for (let i = 0; i < n; i++) {
                const max = Math.max(dp1 + nums[i], dp2);
                dp1 = dp2;
                dp2 = max;
        }

        return dp2;
};

/**
 * Approach: Dynamic Programming
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
const rob1 = (nums) => {
        const n = nums.length;

        if (n <= 1) {
                return n ? nums[0] : 0;
        }

        const dp = new Uint16Array(n);
        dp[0] = nums[0];
        dp[1] = Math.max(nums[0], nums[1]);

        for (let i = 2; i < n; i++) {
                dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
        }

        return dp[n - 1];
};

export { rob, rob1 };
