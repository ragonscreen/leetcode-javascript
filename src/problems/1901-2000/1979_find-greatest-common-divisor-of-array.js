/**
 * 1979. Find Greatest Common Divisor of Array
 *
 * Link: https://leetcode.com/problems/find-greatest-common-divisor-of-array/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-08-24
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Math (topic_8)
 * - Number Theory (topic_61067)
 * - Euclidean Algorithm (topic_89463)
 * - Greatest Common Divisor (topic_98781)
 * - Mid Level (position_mid-level)
 * - Weekly Contest 255 (contest_weekly-contest-255)
 *
 * Stats:
 * - Total Accepted: 412,848
 * - Total Submissions: 494,425
 * - Acceptance Rate: 83.5%
 *
 * Similar Problems:
 * - greatest-common-divisor-of-strings (Easy)
 * - maximum-subarray-with-equal-products (Easy)
 * - smallest-even-multiple (Easy)
 * - three-divisors (Easy)
 * - number-of-subarrays-with-gcd-equal-to-k (Medium)
 * - find-the-number-of-subsequences-with-equal-gcd (Hard)
 * - number-of-different-subsequences-gcds (Hard)
 */

/**
 * Approach: Math
 * Time Complexity: O(log k)
 * Space Complexity: O(1)
 * `k` = `min(nums[i])`
 *
 * @param {number[]} nums
 * @return {number}
 */
const findGCD = (nums) => {
        const gcd = (a, b) => (a ? gcd(b % a, a) : b);
        let mn = nums[0];
        let mx = nums[0];

        for (let i = 1; i < nums.length; i++) {
                const num = nums[i];
                mn = Math.min(mn, num);
                mx = Math.max(mx, num);
        }

        return gcd(mn, mx);
};

export { findGCD };
