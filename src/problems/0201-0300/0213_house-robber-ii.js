/**
 * 0213. House Robber II
 *
 * Link: https://leetcode.com/problems/house-robber-ii/
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
 * - Total Accepted: 1,257,453
 * - Total Submissions: 2,801,471
 * - Acceptance Rate: 44.9%
 *
 * Similar Problems:
 * - house-robber (Medium)
 * - house-robber-iii (Medium)
 * - paint-fence (Medium)
 * - paint-house (Medium)
 * - coin-path (Hard)
 * - non-negative-integers-without-consecutive-ones (Hard)
 */

/**
 * Approach: Dynamic Programming
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

        const helper = (l, r) => {
                let dp1 = 0;
                let dp2 = 0;

                for (let i = l; i <= r; i++) {
                        const max = Math.max(dp1 + nums[i], dp2);
                        dp1 = dp2;
                        dp2 = max;
                }

                return dp2;
        };

        return Math.max(helper(0, n - 2), helper(1, n - 1));
};

export { rob };
