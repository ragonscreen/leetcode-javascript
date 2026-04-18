/**
 * 1283. Find the Smallest Divisor Given a Threshold
 *
 * Link: https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-18
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Binary Search (topic_11)
 *
 * Stats:
 * - Total Accepted: 448,138
 * - Total Submissions: 681,453
 * - Acceptance Rate: 65.8%
 *
 * Similar Problems:
 * - minimized-maximum-of-products-distributed-to-any-store (Medium)
 */

/**
 * Approach: Binary Search
 * Time Complexity: O(n log m)
 * Space Complexity: O(1)
 * `n` = length of `nums`, `m` = maximum value of `nums[i]`
 *
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
const smallestDivisor = (nums, threshold) => {
        const check = (div) => {
                let sum = 0;

                for (const num of nums) {
                        sum += Math.ceil(num / div);

                        if (sum > threshold) {
                                return false;
                        }
                }

                return true;
        };

        let ok = Math.max(...nums);
        let ng = 0;

        while (Math.abs(ok - ng) > 1) {
                const m = (ok + ng) >> 1;

                if (check(m)) {
                        ok = m;
                } else {
                        ng = m;
                }
        }

        return ok;
};

export { smallestDivisor };
