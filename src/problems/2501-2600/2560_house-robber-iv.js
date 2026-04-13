/**
 * 2560. House Robber IV
 *
 * Link: https://leetcode.com/problems/house-robber-iv/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-13
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Binary Search (topic_11)
 * - Dynamic Programming (topic_13)
 * - Greedy (topic_17)
 *
 * Stats:
 * - Total Accepted: 139,962
 * - Total Submissions: 216,189
 * - Acceptance Rate: 64.7%
 *
 * Similar Problems:
 * - container-with-most-water (Medium)
 * - house-robber (Medium)
 */

/**
 * Approach: Binary Search + Greedy
 * Time Complexity: O(n log m)
 * Space Complexity: O(1)
 * `n` = length of `nums`, `m` = maximum value in `nums`
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minCapability = (nums, k) => {
        const check = (money) => {
                let thefts = 0;

                for (let i = 0; i < nums.length; i++) {
                        if (nums[i] <= money) {
                                thefts++;
                                i++;
                        }

                        if (thefts >= k) {
                                return true;
                        }
                }

                return false;
        };

        let ok = Math.max(...nums);
        let ng = -1;

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

export { minCapability };
