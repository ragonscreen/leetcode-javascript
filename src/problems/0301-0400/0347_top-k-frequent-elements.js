/**
 * 0347. Top K Frequent Elements
 *
 * Link: https://leetcode.com/problems/top-k-frequent-elements/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2025-12-09
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Divide and Conquer (topic_12)
 * - Sorting (topic_61049)
 * - Heap (Priority Queue) (topic_61050)
 * - Bucket Sort (topic_61060)
 * - Counting (topic_61062)
 * - Quickselect (topic_61069)
 *
 * Stats:
 * - Total Accepted: 3,452,903
 * - Total Submissions: 5,232,446
 * - Acceptance Rate: 66.0%
 *
 * Similar Problems:
 * - linked-list-frequency (Easy)
 * - most-frequent-even-element (Easy)
 * - k-closest-points-to-origin (Medium)
 * - kth-largest-element-in-an-array (Medium)
 * - sender-with-largest-word-count (Medium)
 * - sort-characters-by-frequency (Medium)
 * - sort-features-by-popularity (Medium)
 * - split-array-into-consecutive-subsequences (Medium)
 * - top-k-frequent-words (Medium)
 * - word-frequency (Medium)
 */

/**
 * Approach: Counting Sort
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
        const counts = new Map();

        for (const num of nums) {
                counts.set(num, (counts.get(num) || 0) + 1);
        }

        const bucket = new Array(nums.length + 1).fill(null);

        for (const [num, count] of counts.entries()) {
                bucket[count] ??= [];
                bucket[count].push(num);
        }

        const res = [];

        for (let i = bucket.length - 1; i > 0 && res.length < k; i--) {
                const vals = bucket[i];

                if (vals) {
                        res.push(...vals);
                }
        }

        return res;
};

export { topKFrequent };
