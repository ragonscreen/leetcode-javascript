/**
 * 1822. Sign of the Product of an Array
 *
 * Link: https://leetcode.com/problems/sign-of-the-product-of-an-array/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-04-26
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Math (topic_8)
 *
 * Stats:
 * - Total Accepted: 442,280
 * - Total Submissions: 682,461
 * - Acceptance Rate: 64.8%
 */

/**
 * Approach: Math
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
const arraySign = (nums) => {
        let cnt = 0;

        for (const num of nums) {
                if (num === 0) {
                        return 0;
                }

                cnt += num < 0 ? 1 : 0;
        }

        // branchless cnt % 2 ? -1 : 1;
        return (cnt % 2) * -2 + 1;
};

export { arraySign };
