/**
 * 0275. H-Index II
 *
 * Link: https://leetcode.com/problems/h-index-ii/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-05
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Binary Search (topic_11)
 *
 * Stats:
 * - Total Accepted: 268,093
 * - Total Submissions: 677,616
 * - Acceptance Rate: 39.6%
 *
 * Similar Problems:
 * - h-index (Medium)
 */

/**
 * Approach: Binary Search
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 *
 * @param {number[]} citations
 * @return {number}
 */
const hIndex = (citations) => {
        const n = citations.length;

        if (n <= citations[0]) {
                return n;
        }

        let l = 0;
        let r = n;
        let res = 0;

        while (l < r) {
                const m = (l + r) >> 1;

                if (citations[m] < n - m) {
                        l = m + 1;
                } else {
                        res = n - m;
                        r = m;
                }
        }

        return res;
};

export { hIndex };
