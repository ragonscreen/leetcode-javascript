/**
 * 1968. Array With Elements Not Equal to Average of Neighbors
 *
 * Link: https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-06
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Greedy (topic_17)
 * - Sorting (topic_61049)
 *
 * Stats:
 * - Total Accepted: 49,978
 * - Total Submissions: 98,532
 * - Acceptance Rate: 50.7%
 *
 * Similar Problems:
 * - design-neighbor-sum-service (Easy)
 * - wiggle-sort (Medium)
 * - wiggle-sort-ii (Medium)
 */

/**
 * Approach: Sorting + Greedy + Two Pointers
 * Time Complexity: O(n lg n)
 * Space Complexity: O(1) auxiliary, O(n) total
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const rearrangeArray = (nums) => {
        nums.sort((a, b) => a - b);
        const n = nums.length;
        const res = new Uint32Array(n);
        let l = 0;
        let r = n - 1;
        let i = 0;

        while (l <= r) {
                res[i++] = nums[l++];
                res[i++] = nums[r--];
        }

        return res;
};

export { rearrangeArray };
