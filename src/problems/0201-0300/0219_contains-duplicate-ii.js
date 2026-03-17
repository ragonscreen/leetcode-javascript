/**
 * 0219. Contains Duplicate II
 *
 * Link: https://leetcode.com/problems/contains-duplicate-ii/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-02-24
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Sliding Window (topic_55821)
 *
 * Stats:
 * - Total Accepted: 1,718,597
 * - Total Submissions: 3,374,742
 * - Acceptance Rate: 50.9%
 *
 * Similar Problems:
 * - contains-duplicate (Easy)
 * - contains-duplicate-iii (Hard)
 */

/**
 * Approach: Hash Set + Sliding Window
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = (nums, k) => {
        const set = new Set();
        const window = Math.min(nums.length - 1, k);

        for (let i = 0; i <= window; i++) {
                if (set.has(nums[i])) {
                        return true;
                }

                set.add(nums[i]);
        }

        for (let r = window + 1, l = 0; r < nums.length; r++) {
                set.delete(nums[l++]);

                if (set.has(nums[r])) {
                        return true;
                }

                set.add(nums[r]);
        }

        return false;
};

export { containsNearbyDuplicate };
