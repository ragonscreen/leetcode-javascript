/**
 * 1512. Number of Good Pairs
 *
 * Link: https://leetcode.com/problems/number-of-good-pairs/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-04-26
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Math (topic_8)
 * - Counting (topic_61062)
 *
 * Stats:
 * - Total Accepted: 1,051,957
 * - Total Submissions: 1,171,218
 * - Acceptance Rate: 89.8%
 *
 * Similar Problems:
 * - number-of-pairs-of-interchangeable-rectangles (Medium)
 * - substrings-that-begin-and-end-with-the-same-letter (Medium)
 */

/**
 * Approach: Hash Map
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
const numIdenticalPairs = (nums) => {
        const map = new Map();

        for (const num of nums) {
                map.set(num, (map.get(num) || 0) + 1);
        }

        let res = 0;

        for (const v of map.values()) {
                res += (v * (v - 1)) / 2;
        }

        return res;
};

export { numIdenticalPairs };
