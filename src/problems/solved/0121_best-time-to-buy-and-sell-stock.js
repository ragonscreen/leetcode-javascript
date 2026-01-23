/**
 * 0121. Best Time to Buy and Sell Stock
 * Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * Difficulty: Easy
 * Date: 2026-01-22
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Dynamic Programming (Optimal)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
        let maxVal = 0;
        let maxPft = 0;

        for (let i = prices.length - 1; i >= 0; i--) {
                maxVal = Math.max(prices[i], maxVal);
                maxPft = Math.max(maxPft, maxVal - prices[i]);
        }

        return maxPft;
};

/**
 * Implementation: Dynamic Programming
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit1 = (prices) => {
        let maxVal = 0;
        let maxPft = 0;

        for (let i = prices.length - 1; i >= 0; i--) {
                const price = prices[i];

                if (!maxVal || price > maxVal) {
                        maxVal = price;
                        continue;
                }

                const profit = maxVal - price;

                if (profit > maxPft) {
                        maxPft = profit;
                }
        }

        return maxPft;
};

/**
 * Implementation: Two Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit2 = (prices) => {
        let max = 0;
        let l = 0;
        let r = 1;

        while (r < prices.length) {
                const profit = prices[r] - prices[l];

                if (profit > max) {
                        max = profit;
                }

                if (prices[r] < prices[l]) {
                        l = r;
                }

                r++;
        }

        return max;
};

export { maxProfit, maxProfit1, maxProfit2 };
