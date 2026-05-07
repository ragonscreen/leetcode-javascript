/**
 * 2183. Count Array Pairs Divisible by K
 *
 * Link: https://leetcode.com/problems/count-array-pairs-divisible-by-k/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-05-08
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Math (topic_8)
 * - Counting (topic_61062)
 * - Number Theory (topic_61067)
 *
 * Stats:
 * - Total Accepted: 23,492
 * - Total Submissions: 76,616
 * - Acceptance Rate: 30.7%
 *
 * Similar Problems:
 * - find-the-number-of-good-pairs-i (Easy)
 * - check-if-array-pairs-are-divisible-by-k (Medium)
 * - find-the-number-of-good-pairs-ii (Medium)
 * - number-of-single-divisor-triplets (Medium)
 */

/**
 * Approach: Math
 * Time Complexity: O(n log K + d^2)
 * Space Complexity: O(d)
 * `n` = length of `nums`, `K` = `k`, `d` = number of divisors of `k`
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const countPairs = (nums, k) => {
        const gcd = (a, b) => (b ? gcd(b, a % b) : a);
        const map = new Map();

        for (const num of nums) {
                const g = gcd(num, k);
                map.set(g, (map.get(g) || 0) + 1);
        }

        let res = 0;

        for (const [x, cx] of map) {
                for (const [y, cy] of map) {
                        if (x <= y && (x * y) % k === 0) {
                                res += x < y ? cx * cy : (cx * (cx - 1)) / 2;
                        }
                }
        }

        return res;
};

export { countPairs };
