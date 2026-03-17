/**
 * 0128. Longest Consecutive Sequence
 *
 * Link: https://leetcode.com/problems/longest-consecutive-sequence/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2025-12-16
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Union-Find (topic_23)
 *
 * Stats:
 * - Total Accepted: 3,193,894
 * - Total Submissions: 6,792,244
 * - Acceptance Rate: 47.0%
 *
 * Similar Problems:
 * - binary-tree-longest-consecutive-sequence (Medium)
 * - find-the-maximum-number-of-elements-in-subset (Medium)
 * - find-three-consecutive-integers-that-sum-to-a-given-number (Medium)
 * - length-of-the-longest-alphabetical-continuous-substring (Medium)
 * - maximum-consecutive-floors-without-special-floors (Medium)
 */

/**
 * Approach: Hash Set
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = (nums) => {
        const set = new Set(nums);
        let max = 0;

        for (const n of set) {
                if (set.has(n - 1)) {
                        continue;
                }

                let len = 1;

                while (set.has(n + len)) {
                        len++;
                }

                if (len > max) {
                        max = len;
                }
        }

        return max;
};

export { longestConsecutive };
