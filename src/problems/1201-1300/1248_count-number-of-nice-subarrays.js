/**
 * 1248. Count Number of Nice Subarrays
 *
 * Link: https://leetcode.com/problems/count-number-of-nice-subarrays/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-21
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Math (topic_8)
 * - Sliding Window (topic_55821)
 * - Prefix Sum (topic_61068)
 *
 * Stats:
 * - Total Accepted: 487,768
 * - Total Submissions: 650,529
 * - Acceptance Rate: 75.0%
 *
 * Similar Problems:
 * - count-of-interesting-subarrays (Medium)
 * - k-divisible-elements-subarrays (Medium)
 * - ways-to-split-array-into-good-subarrays (Medium)
 * - count-subarrays-with-fixed-bounds (Hard)
 */

/**
 * Approach: Sliding Window + Three Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const numberOfSubarrays = (nums, k) => {
        let res = 0;
        let cnt = 0;

        for (let l = 0, m = 0, r = 0; r < nums.length; r++) {
                cnt += nums[r] % 2;

                // invalid window -> too many odds
                if (cnt > k) {
                        while (cnt > k) {
                                cnt -= nums[l++] % 2;
                        }

                        m = l;
                }

                // valid window -> find smallest valid window
                while (nums[m] % 2 === 0) {
                        m++;
                }

                if (cnt === k) {
                        res += m - l + 1;
                }
        }

        return res;
};

export { numberOfSubarrays };
