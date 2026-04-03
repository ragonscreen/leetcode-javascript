/**
 * 2279. Maximum Bags With Full Capacity of Rocks
 *
 * Link: https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-03
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Greedy (topic_17)
 * - Sorting (topic_61049)
 *
 * Stats:
 * - Total Accepted: 112,752
 * - Total Submissions: 165,713
 * - Acceptance Rate: 68.0%
 *
 * Similar Problems:
 * - maximum-units-on-a-truck (Easy)
 * - capacity-to-ship-packages-within-d-days (Medium)
 */

/**
 * Approach: Greedy + Sorting
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 *
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
const maximumBags = (capacity, rocks, additionalRocks) => {
        const n = capacity.length;
        const diffs = new Uint32Array(n);

        for (let i = 0; i < n; i++) {
                diffs[i] = capacity[i] - rocks[i];
        }

        diffs.sort();
        let res = 0;
        let count = additionalRocks;

        for (let i = 0; i < n; i++) {
                const diff = diffs[i];

                if (count >= diff) {
                        count -= diff;
                        res++;
                }
        }

        return res;
};

export { maximumBags };
