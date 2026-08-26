/**
 * 2958. Length of Longest Subarray With at Most K Frequency
 *
 * Link: https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-08 (Updated: 2026-08-27)
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Sliding Window (topic_55821)
 * - Staff (position_staff)
 * - Biweekly Contest 119 (contest_biweekly-contest-119)
 *
 * Stats:
 * - Total Accepted: 334,150
 * - Total Submissions: 551,987
 * - Acceptance Rate: 60.5%
 *
 * Similar Problems:
 * - longest-substring-with-at-least-k-repeating-characters (Medium)
 */

/**
 * Approach: Sliding Window
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxSubarrayLength = (nums, k) => {
        const map = {};
        let res = 0;

        for (let l = 0, r = 0, mxf = 0, mxv = 0; r < nums.length; r++) {
                const vr = nums[r];
                const frq = (map[vr] ?? 0) + 1;
                map[vr] = frq;

                if (frq > mxf) {
                        mxf = frq;
                        mxv = vr;
                }

                while (mxf > k) {
                        const vl = nums[l++];
                        map[vl]--;

                        if (vl === mxv) {
                                mxf--;
                        }
                }

                res = Math.max(res, r - l + 1);
        }

        return res;
};

export { maxSubarrayLength };
