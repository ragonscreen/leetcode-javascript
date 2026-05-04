/**
 * 0274. H-Index
 *
 * Link: https://leetcode.com/problems/h-index/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-05
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Sorting (topic_61049)
 * - Counting Sort (topic_61072)
 *
 * Stats:
 * - Total Accepted: 869,608
 * - Total Submissions: 2,101,670
 * - Acceptance Rate: 41.4%
 *
 * Similar Problems:
 * - h-index-ii (Medium)
 */

/**
 * Approach: Counting Sort
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} citations
 * @return {number}
 */
const hIndex = (citations) => {
        const n = citations.length;
        const buckets = new Uint16Array(n + 1);

        for (let i = 0; i < n; i++) {
                buckets[Math.min(n, citations[i])]++;
        }

        let cnt = 0;

        for (let i = buckets.length - 1; i > -1; i--) {
                cnt += buckets[i];

                if (cnt >= i) {
                        return i;
                }
        }
};

export { hIndex };
