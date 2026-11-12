/**
 * 875. Koko Eating Bananas
 *
 * Link: https://leetcode.com/problems/koko-eating-bananas/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-02 (Updated: 2026-11-12)
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Binary Search (topic_11)
 *
 * Stats:
 *
 * - Total Accepted: 1,536,640
 * - Total Submissions: 3,082,892
 * - Acceptance Rate: 49.8%
 *
 * Similar Problems:
 *
 * - frog-jump-ii (Medium)
 * - maximum-candies-allocated-to-k-children (Medium)
 * - minimized-maximum-of-products-distributed-to-any-store (Medium)
 * - minimum-time-to-repair-cars (Medium)
 * - minimize-max-distance-to-gas-station (Hard)
 */

/**
 * Approach: Binary Search
 * Time Complexity: O(n lg K)
 * Space Complexity: O(1)
 * `n` = `piles.length`, `K` = `max(piles[i])`
 *
 * @param {number[]} piles
 * @param {number} h
 * @returns {number}
 */
const minEatingSpeed = (piles, h) => {
        const check = (v) => {
                let t = 0;

                for (const p of piles) {
                        t += Math.ceil(p / v);

                        if (t > h) return false;
                }

                return true;
        };

        let ng = 0;
        let ok = Math.max(...piles);

        while (ok - ng > 1) {
                const mid = (ok + ng) >> 1;

                if (check(mid)) ok = mid;
                else ng = mid;
        }

        return ok;
};

export { minEatingSpeed };
