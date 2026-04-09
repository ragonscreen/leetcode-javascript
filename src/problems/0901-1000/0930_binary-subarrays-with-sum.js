/**
 * 0930. Binary Subarrays With Sum
 *
 * Link: https://leetcode.com/problems/binary-subarrays-with-sum/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-09
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Sliding Window (topic_55821)
 * - Prefix Sum (topic_61068)
 *
 * Stats:
 * - Total Accepted: 510,448
 * - Total Submissions: 744,217
 * - Acceptance Rate: 68.6%
 *
 * Similar Problems:
 * - find-all-possible-stable-binary-arrays-i (Medium)
 * - ways-to-split-array-into-good-subarrays (Medium)
 * - count-subarrays-with-score-less-than-k (Hard)
 * - find-all-possible-stable-binary-arrays-ii (Hard)
 */

/**
 * Approach: Sliding Window + Three Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
const numSubarraysWithSum = (nums, goal) => {
        let res = 0;
        let sum = 0;

        for (let l = 0, m = 0, r = 0; r < nums.length; r++) {
                sum += nums[r];

                if (sum > goal) {
                        while (sum > goal && l < r) {
                                sum -= nums[l++];
                        }

                        m = l;
                }

                if (sum === goal) {
                        while (nums[m] === 0 && m < r) {
                                m++;
                        }

                        res += m - l + 1;
                }
        }

        return res;
};

export { numSubarraysWithSum };
