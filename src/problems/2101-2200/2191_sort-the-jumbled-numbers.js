/**
 * 2191. Sort the Jumbled Numbers
 *
 * Link: https://leetcode.com/problems/sort-the-jumbled-numbers/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-22
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Sorting (topic_61049)
 *
 * Stats:
 * - Total Accepted: 155,593
 * - Total Submissions: 259,460
 * - Acceptance Rate: 60.0%
 *
 * Similar Problems:
 * - map-sum-pairs (Medium)
 */

/**
 * Approach: Sorting
 * Time Complexity: O(n log n + n log10 k)
 * Space Complexity: O(n)
 * `n` = length of `nums`, `k` = largest number in `nums`
 *
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
const sortJumbled = (mapping, nums) => {
        const n = nums.length;
        const map = new Map();

        for (let i = 0; i < n; i++) {
                const num = nums[i];

                if (num === 0) {
                        map.set(num, mapping[0]);
                        continue;
                }

                let val = 0;
                let mult = 1;
                let k = num;

                while (k) {
                        val += mult * mapping[k % 10];
                        k = Math.floor(k / 10);
                        mult *= 10;
                }

                map.set(num, val);
        }

        return nums.sort((a, b) => map.get(a) - map.get(b));
};

export { sortJumbled };
