/**
 * 1679. Max Number of K-Sum Pairs
 *
 * Link: https://leetcode.com/problems/max-number-of-k-sum-pairs/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-22
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Two Pointers (topic_9)
 * - Sorting (topic_61049)
 *
 * Stats:
 * - Total Accepted: 599,590
 * - Total Submissions: 1,052,076
 * - Acceptance Rate: 57.0%
 *
 * Similar Problems:
 * - two-sum (Easy)
 * - count-good-meals (Medium)
 * - divide-players-into-teams-of-equal-skill (Medium)
 */

/**
 * Approach: Hash Map
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxOperations = (nums, k) => {
        const map = new Map();

        for (const num of nums) {
                map.set(num, (map.get(num) || 0) + 1);
        }

        let res = 0;

        for (const [num, cnt] of map) {
                const pair = k - num;
                const cntPair = map.get(pair) ?? 0;
                res += num === pair ? cnt >> 1 : Math.min(cnt, cntPair);
                map.set(num, 0); // prevent double count
        }

        return res;
};

/**
 * Approach: Sorting + Two Pointers
 * Time Complexity: O(n log n)
 * Space Complexity: O(1) auxiliary, O(n) for sorting
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxOperations1 = (nums, k) => {
        nums.sort((a, b) => a - b);
        let res = 0;
        let l = 0;
        let r = nums.length - 1;

        while (l < r) {
                const v = nums[l] + nums[r];

                if (v < k) {
                        l++;
                } else if (v > k) {
                        r--;
                } else {
                        res++;
                        l++;
                        r--;
                }
        }

        return res;
};

export { maxOperations, maxOperations1 };
