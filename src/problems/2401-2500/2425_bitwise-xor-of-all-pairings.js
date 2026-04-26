/**
 * 2425. Bitwise XOR of All Pairings
 *
 * Link: https://leetcode.com/problems/bitwise-xor-of-all-pairings/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-27
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Bit Manipulation (topic_19)
 * - Brainteaser (topic_32)
 *
 * Stats:
 * - Total Accepted: 152,989
 * - Total Submissions: 228,657
 * - Acceptance Rate: 66.9%
 */

/**
 * Approach: Bit Manipulation
 * Time Complexity: O(n + m)
 * Space Complexity: O(1)
 * `n` = length of `nums1`, `m` = length of `nums2`
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const xorAllNums = (nums1, nums2) => {
        const xor = (nums) => {
                let res = 0;

                for (const num of nums) {
                        res ^= num;
                }

                return res;
        };

        const n = nums1.length;
        const m = nums2.length;

        if (n % 2 === 0 && m % 2 === 0) {
                return 0;
        }

        if (n % 2 === 1 && m % 2 === 1) {
                return xor(nums1) ^ xor(nums2);
        }

        return n % 2 === 0 ? xor(nums1) : xor(nums2);
};

export { xorAllNums };
