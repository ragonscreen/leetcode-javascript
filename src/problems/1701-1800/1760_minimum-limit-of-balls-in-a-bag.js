/**
 * 1760. Minimum Limit of Balls in a Bag
 *
 * Link: https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-13
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Binary Search (topic_11)
 *
 * Stats:
 * - Total Accepted: 153,757
 * - Total Submissions: 231,632
 * - Acceptance Rate: 66.4%
 *
 * Similar Problems:
 * - maximum-candies-allocated-to-k-children (Medium)
 * - minimized-maximum-of-products-distributed-to-any-store (Medium)
 */

/**
 * Approach: Binary Search
 * Time Complexity: O(n log m)
 * Space Complexity: O(1)
 * `n` = length of `nums`, `m` = maximum value in `nums`
 *
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
const minimumSize = (nums, maxOperations) => {
        const check = (val) => {
                let ops = 0;

                for (const num of nums) {
                        ops += Math.ceil(num / val) - 1;

                        if (ops > maxOperations) {
                                return false;
                        }
                }

                return true;
        };

        let ok = Math.max(...nums);
        let ng = 0;

        while (Math.abs(ok - ng) > 1) {
                const m = (ok + ng) >>> 1;

                if (check(m)) {
                        ok = m;
                } else {
                        ng = m;
                }
        }

        return ok;
};

export { minimumSize };
