/**
 * 2841. Maximum Sum of Almost Unique Subarray
 *
 * Link: https://leetcode.com/problems/maximum-sum-of-almost-unique-subarray/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-19
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Sliding Window (topic_55821)
 *
 * Stats:
 * - Total Accepted: 35,952
 * - Total Submissions: 87,447
 * - Acceptance Rate: 41.1%
 */

/**
 * Approach: Sliding Window
 * Time Complexity: O(n)
 * Space Complexity: O(m)
 *
 * @param {number[]} nums
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
const maxSum = (nums, m, k) => {
        const map = new Map();
        let res = 0;
        let sum = 0;

        for (let l = 0, r = 0; r < nums.length; r++) {
                const nr = nums[r];
                sum += nr;
                map.set(nr, (map.get(nr) || 0) + 1);

                if (r - l + 1 < k) {
                        continue;
                }

                if (map.size >= m) {
                        res = Math.max(res, sum);
                }

                const nl = nums[l++];
                const vl = map.get(nl);
                sum -= nl;

                if (vl === 1) {
                        map.delete(nl);
                } else {
                        map.set(nl, vl - 1);
                }
        }

        return res;
};

export { maxSum };
