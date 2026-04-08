/**
 * 2958. Length of Longest Subarray With at Most K Frequency
 *
 * Link: https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-08
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Sliding Window (topic_55821)
 *
 * Stats:
 * - Total Accepted: 191,595
 * - Total Submissions: 339,082
 * - Acceptance Rate: 56.5%
 *
 * Similar Problems:
 * - longest-substring-with-at-least-k-repeating-characters (Medium)
 */

/**
 * Approach: Sliding Window
 * Time Complexity: O(n)
 * Space Complexity: O(m)
 * `n` = length of `nums`, `m` = number of unique values in `nums`
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxSubarrayLength = (nums, k) => {
        const map = {};
        let maxFreq = 0;
        let maxElem = 0;
        let res = 0;

        for (let l = 0, r = 0; r < nums.length; r++) {
                const v = nums[r];
                const f = (map[v] || 0) + 1;
                map[v] = f;

                if (f > maxFreq) {
                        maxFreq = f;
                        maxElem = v;
                }

                while (maxFreq > k) {
                        const vl = nums[l];
                        map[vl]--;

                        if (vl === maxElem) {
                                maxFreq--;
                        }

                        l++;
                }

                res = Math.max(res, r - l + 1);
        }

        return res;
};

export { maxSubarrayLength };
