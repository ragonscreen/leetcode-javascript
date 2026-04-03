/**
 * 0875. Koko Eating Bananas
 *
 * Link: https://leetcode.com/problems/koko-eating-bananas/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-02
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Binary Search (topic_11)
 *
 * Stats:
 * - Total Accepted: 1,536,640
 * - Total Submissions: 3,082,892
 * - Acceptance Rate: 49.8%
 *
 * Similar Problems:
 * - frog-jump-ii (Medium)
 * - maximum-candies-allocated-to-k-children (Medium)
 * - minimized-maximum-of-products-distributed-to-any-store (Medium)
 * - minimum-time-to-repair-cars (Medium)
 * - minimize-max-distance-to-gas-station (Hard)
 */

/**
 * Approach: Binary Search
 * Time Complexity: O(n log k)
 * Space Complexity: O(1)
 * `n` = length of `piles`, `k` = maximum value in `piles`
 *
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const minEatingSpeed = (piles, h) => {
        let l = 1;
        let r = Math.max(...piles);

        while (l < r) {
                const m = l + Math.floor((r - l) / 2);
                let time = 0;

                for (const pile of piles) {
                        time += Math.ceil(pile / m);
                }

                if (time > h) {
                        l = m + 1;
                } else {
                        r = m;
                }
        }

        return r;
};

export { minEatingSpeed };
