/**
 * 1004. Max Consecutive Ones III
 *
 * Link: https://leetcode.com/problems/max-consecutive-ones-iii/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-03-21 (Updated: 2026-04-22)
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Binary Search (topic_11)
 * - Sliding Window (topic_55821)
 * - Prefix Sum (topic_61068)
 *
 * Stats:
 * - Total Accepted: 1,350,017
 * - Total Submissions: 2,002,117
 * - Acceptance Rate: 67.4%
 *
 * Similar Problems:
 * - max-consecutive-ones (Easy)
 * - maximum-enemy-forts-that-can-be-captured (Easy)
 * - minimum-recolors-to-get-k-consecutive-black-blocks (Easy)
 * - longest-nice-subarray (Medium)
 * - longest-repeating-character-replacement (Medium)
 * - longest-subarray-of-1s-after-deleting-one-element (Medium)
 * - longest-substring-with-at-most-k-distinct-characters (Medium)
 * - max-consecutive-ones-ii (Medium)
 * - maximize-the-confusion-of-an-exam (Medium)
 * - maximum-sum-of-distinct-subarrays-with-length-k (Medium)
 */

/**
 * Approach: Sliding Window
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const longestOnes = (nums, k) => {
        let res = 0;
        let flips = 0;

        for (let l = 0, r = 0; r < nums.length; r++) {
                flips += nums[r] ^ 1;

                while (flips > k) {
                        flips -= nums[l++] ^ 1;
                }

                res = Math.max(res, r - l + 1);
        }

        return res;
};

export { longestOnes };
