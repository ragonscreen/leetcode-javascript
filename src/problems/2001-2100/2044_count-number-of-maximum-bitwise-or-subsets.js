/**
 * 2044. Count Number of Maximum Bitwise-OR Subsets
 *
 * Link: https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-04
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Backtracking (topic_14)
 * - Bit Manipulation (topic_19)
 * - Enumeration (topic_61066)
 * - Staff (position_staff)
 * - Weekly Contest 263 (contest_weekly-contest-263)
 *
 * Stats:
 *
 * - Total Accepted: 254,173
 * - Total Submissions: 284,088
 * - Acceptance Rate: 89.5%
 *
 * Similar Problems:
 *
 * - largest-combination-with-bitwise-and-greater-than-zero (Medium)
 * - longest-subarray-with-maximum-bitwise-and (Medium)
 * - subsets (Medium)
 */

/**
 * Approach: Recursion
 * Time Complexity: O(2^n)
 * Space Complexity: O(1)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @returns {number}
 */
const countMaxOrSubsets = (nums) => {
        const n = nums.length;
        const mx = nums.reduce((t, c) => t | c, 0);

        const rec = (i, cur) => {
                if (i === n) return cur === mx;

                // If we have reached max OR then adding any combination of the remaining elements
                // will result in max too, so we can immediately return the number of combinations
                // to add to our result.
                if (cur === mx) return 1 << (n - i);

                const take = rec(i + 1, cur | nums[i]);
                const skip = rec(i + 1, cur);

                return take + skip;
        };

        return rec(0, 0);
};

export { countMaxOrSubsets };
