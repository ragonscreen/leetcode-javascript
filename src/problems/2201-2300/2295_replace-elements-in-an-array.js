/**
 * 2295. Replace Elements in an Array
 *
 * Link: https://leetcode.com/problems/replace-elements-in-an-array/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-03-09
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Simulation (topic_61055)
 *
 * Stats:
 * - Total Accepted: 47,285
 * - Total Submissions: 79,224
 * - Acceptance Rate: 59.7%
 *
 * Similar Problems:
 * - find-all-numbers-disappeared-in-an-array (Easy)
 * - maximum-number-of-integers-to-choose-from-a-range-i (Medium)
 * - maximum-number-of-integers-to-choose-from-a-range-ii (Medium)
 */

/**
 * Approach: Hash Map
 * Time Complexity: O(max(n, m))
 * Space Complexity: O(n)
 * `n` = length of `nums`, `m` = length of `operations`
 *
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
const arrayChange = (nums, operations) => {
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
                map.set(nums[i], i);
        }

        const res = [...nums];

        for (const [num, newNum] of operations) {
                const idx = map.get(num);
                res[idx] = newNum;
                map.delete(num);
                map.set(newNum, idx);
        }

        return res;
};

export { arrayChange };
