/**
 * 2553. Separate the Digits in an Array
 *
 * Link: https://leetcode.com/problems/separate-the-digits-in-an-array/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-05-14
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Simulation (topic_61055)
 *
 * Stats:
 * - Total Accepted: 219,818
 * - Total Submissions: 256,297
 * - Acceptance Rate: 85.8%
 *
 * Similar Problems:
 * - alternating-digit-sum (Easy)
 * - count-integers-with-even-digit-sum (Easy)
 */

/**
 * Approach: Math
 * Time Complexity: O(n log m)
 * Space Complexity: O(1) auxiliary, O(k) total
 * `n` = length of `nums`, `m` = maximum value of `nums[i]`
 * `k` = total number of digits across `nums`
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const separateDigits = (nums) => {
        const res = [];

        for (let i = 0; i < nums.length; i++) {
                let num = nums[i];
                let pow = 0 | Math.log10(num);

                while (pow > -1) {
                        const div = 10 ** pow--;
                        const d = 0 | (num / div);
                        res.push(d);
                        num %= div;
                }
        }

        return res;
};

/**
 * Approach: Simulation [One-Liner]
 * Time Complexity: O(n log m)
 * Space Complexity: O(1) auxiliary, O(k) total
 * `n` = length of `nums`, `m` = maximum value of `nums[i]`
 * `k` = total number of digits across `nums`
 *
 * @param {number[]} nums
 * @return {number[]}
 */
// biome-ignore format: one-liner
const separateDigits1 = (nums) => nums.flatMap((e) => [...String(e)]).map(Number);

export { separateDigits, separateDigits1 };
