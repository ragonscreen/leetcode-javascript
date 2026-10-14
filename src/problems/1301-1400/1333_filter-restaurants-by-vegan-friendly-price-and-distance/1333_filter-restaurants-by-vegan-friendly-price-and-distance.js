/**
 * 1333. Filter Restaurants by Vegan-Friendly, Price and Distance
 *
 * Link: https://leetcode.com/problems/filter-restaurants-by-vegan-friendly-price-and-distance/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-10-14
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Sorting (topic_61049)
 * - Senior (position_senior)
 * - Weekly Contest 173 (contest_weekly-contest-173)
 *
 * Stats:
 *
 * - Total Accepted: 39,254
 * - Total Submissions: 60,729
 * - Acceptance Rate: 64.6%
 */

/**
 * Approach: Sorting
 * Time Complexity: O(n lg n)
 * Space Complexity: O(1) auxiliary, O(n) total
 *
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @returns {number[]}
 */
const filterRestaurants = (restaurants, veganFriendly, maxPrice, maxDistance) =>
        restaurants
                .filter((e) => e[2] >= veganFriendly && e[3] <= maxPrice && e[4] <= maxDistance)
                .sort((a, b) => b[1] - a[1] || b[0] - a[0])
                .map((e) => e[0]);

export { filterRestaurants };
