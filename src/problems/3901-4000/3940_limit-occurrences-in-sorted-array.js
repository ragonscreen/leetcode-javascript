/**
 * 3940. Limit Occurrences in Sorted Array
 *
 * Link: https://leetcode.com/problems/limit-occurrences-in-sorted-array/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-05-24
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Mid Level (position_mid-level)
 * - Weekly Contest 503 (contest_weekly-contest-503)
 *
 * Stats:
 * - Total Accepted: 42,472
 * - Total Submissions: 57,887
 * - Acceptance Rate: 73.4%
 */

/**
 * Approach: Two Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary, O(n) total
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const limitOccurrences = (nums, k) => {
        let l = 0;

        for (let r = 0; r < nums.length; r++) {
                const num = nums[r];

                if (num !== nums[l - k]) {
                        nums[l++] = num;
                }
        }

        return nums.slice(0, l);
};

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const limitOccurrences1 = (nums, k) => {
        const res = [];
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
                const num = nums[i];
                const cnt = map.get(num) ?? 0;

                if (cnt === k) {
                        continue;
                }

                res.push(num);
                map.set(num, cnt + 1);
        }

        return res;
};

export { limitOccurrences, limitOccurrences1 };
