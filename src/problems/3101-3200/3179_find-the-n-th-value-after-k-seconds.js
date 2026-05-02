/**
 * 3179. Find the N-th Value After K Seconds
 *
 * Link: https://leetcode.com/problems/find-the-n-th-value-after-k-seconds/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-02
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Math (topic_8)
 * - Simulation (topic_61055)
 * - Combinatorics (topic_61056)
 * - Prefix Sum (topic_61068)
 *
 * Stats:
 * - Total Accepted: 45,473
 * - Total Submissions: 84,439
 * - Acceptance Rate: 53.9%
 *
 * Similar Problems:
 * - left-and-right-sum-differences (Easy)
 */

/**
 * Approach: Simulation + Prefix Sum
 * Time Complexity: O(N * K)
 * Space Complexity: O(N)
 * `N` = `n`, `K` = `k`
 *
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const valueAfterKSeconds = (n, k) => {
        const nums = new Uint32Array(n).fill(1);

        for (let j = 0; j < k; j++) {
                for (let i = 1; i < n; i++) {
                        nums[i] = (nums[i] + nums[i - 1]) % (1e9 + 7);
                }
        }

        return nums[n - 1];
};

export { valueAfterKSeconds };
