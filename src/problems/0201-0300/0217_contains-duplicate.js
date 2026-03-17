/**
 * 0217. Contains Duplicate
 *
 * Link: https://leetcode.com/problems/contains-duplicate/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2025-12-04
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Sorting (topic_61049)
 *
 * Stats:
 * - Total Accepted: 6,202,605
 * - Total Submissions: 9,673,435
 * - Acceptance Rate: 64.1%
 *
 * Similar Problems:
 * - contains-duplicate-ii (Easy)
 * - find-valid-pair-of-adjacent-digits-in-string (Easy)
 * - make-array-zero-by-subtracting-equal-amounts (Easy)
 * - contains-duplicate-iii (Hard)
 */

/**
 * Approach: Hash Set
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
        const set = new Set();

        for (const num of nums) {
                if (set.has(num)) {
                        return true;
                }

                set.add(num);
        }

        return false;
};

export { containsDuplicate };
