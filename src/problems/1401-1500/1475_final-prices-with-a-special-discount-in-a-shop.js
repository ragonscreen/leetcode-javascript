/**
 * 1475. Final Prices With a Special Discount in a Shop
 *
 * Link: https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-03-18
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Stack (topic_15)
 * - Monotonic Stack (topic_61054)
 *
 * Stats:
 * - Total Accepted: 397,465
 * - Total Submissions: 472,746
 * - Acceptance Rate: 84.1%
 */

/**
 * Approach: Stack
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} prices
 * @return {number[]}
 */
const finalPrices = (prices) => {
        const n = prices.length;
        const res = new Array(n);
        const stack = [];

        for (let i = 0; i < n; i++) {
                const price = prices[i];

                while (price <= prices[stack.at(-1)]) {
                        res[stack.pop()] -= price;
                }

                stack.push(i);
                res[i] = price;
        }

        return res;
};

export { finalPrices };
