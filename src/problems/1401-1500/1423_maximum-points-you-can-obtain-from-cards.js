/**
 * 1423. Maximum Points You Can Obtain from Cards
 *
 * Link: https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-07
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Sliding Window (topic_55821)
 * - Prefix Sum (topic_61068)
 *
 * Stats:
 * - Total Accepted: 521,241
 * - Total Submissions: 905,029
 * - Acceptance Rate: 57.6%
 *
 * Similar Problems:
 * - minimum-recolors-to-get-k-consecutive-black-blocks (Easy)
 * - removing-minimum-and-maximum-from-array (Medium)
 * - maximum-score-from-performing-multiplication-operations (Hard)
 * - maximum-spending-after-buying-items (Hard)
 */

/**
 * Approach: Sliding Window
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
const maxScore = (cardPoints, k) => {
        const n = cardPoints.length;
        const sz = n - k;
        let min = Number.POSITIVE_INFINITY;
        let tot = 0;
        let sum = 0;

        for (let l = 0, r = 0; r < n; r++) {
                const num = cardPoints[r];
                tot += num;
                sum += num;

                if (r - l + 1 < sz) {
                        continue;
                }

                min = Math.min(min, sum);
                sum -= cardPoints[l++];
        }

        return sz ? tot - min : tot;
};

export { maxScore };
