/**
 * 3653. XOR After Range Multiplication Queries I
 *
 * Link: https://leetcode.com/problems/xor-after-range-multiplication-queries-i/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-08
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Divide and Conquer (topic_12)
 * - Simulation (topic_61055)
 *
 * Stats:
 * - Total Accepted: 75,179
 * - Total Submissions: 102,767
 * - Acceptance Rate: 73.2%
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n * q)
 * Space Complexity: O(1)
 * `n` = length of `nums`, `q` = length of `queries`
 *
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
const xorAfterQueries = (nums, queries) => {
        for (const [l, r, k, v] of queries) {
                for (let i = l; i <= r; i += k) {
                        nums[i] = (nums[i] * v) % (10 ** 9 + 7);
                }
        }

        let res = 0;

        for (const num of nums) {
                res ^= num;
        }

        return res;
};

export { xorAfterQueries };
