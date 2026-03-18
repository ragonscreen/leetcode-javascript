/**
 * 3867. Sum of GCD of Formed Pairs
 *
 * Link: https://leetcode.com/problems/sum-of-gcd-of-formed-pairs/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-03-18
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Math (topic_8)
 * - Two Pointers (topic_9)
 * - Simulation (topic_61055)
 * - Number Theory (topic_61067)
 *
 * Stats:
 * - Total Accepted: 27,321
 * - Total Submissions: 42,020
 * - Acceptance Rate: 65.0%
 */

/**
 * Approach: Math + Prefix Max
 * Time Complexity: O(n * log k)
 * Space Complexity: O(1) auxiliary, O(n) for sorting, O(n) total
 * `n` = length of `nums`, `k` = largest number encountered when calculating GCD
 *
 * @param {number[]} nums
 * @return {number}
 */
const gcdSum = (nums) => {
        const gcd = (a, b) => (b ? gcd(b, a % b) : a);
        const n = nums.length;
        const pre = new Uint32Array(n);
        let max = 0;

        for (let i = 0; i < n; i++) {
                const num = nums[i];
                max = Math.max(max, num);
                pre[i] = gcd(num, max);
        }

        pre.sort();
        let l = 0;
        let r = n - 1;
        let res = 0;

        while (l < r) {
                res += gcd(pre[l++], pre[r--]);
        }

        return res;
};

export { gcdSum };
