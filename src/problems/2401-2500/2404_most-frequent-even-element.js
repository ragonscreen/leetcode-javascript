/**
 * 2404. Most Frequent Even Element
 *
 * Link: https://leetcode.com/problems/most-frequent-even-element/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-02-05
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Counting (topic_61062)
 *
 * Stats:
 * - Total Accepted: 133,904
 * - Total Submissions: 251,125
 * - Acceptance Rate: 53.3%
 *
 * Similar Problems:
 * - majority-element (Easy)
 * - majority-element-ii (Medium)
 * - sort-characters-by-frequency (Medium)
 * - top-k-frequent-elements (Medium)
 */

/**
 * Approach: Hash Map
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
const mostFrequentEven = (nums) => {
        const map = {};
        let res = -1;
        let max = 0;

        for (const num of nums) {
                if (num % 2) {
                        continue;
                }

                const frq = (map[num] || 0) + 1;
                map[num] = frq;

                if (frq > max) {
                        res = num;
                        max = frq;
                }

                if (frq === max && num < res) {
                        res = num;
                }
        }

        return res;
};

export { mostFrequentEven };
