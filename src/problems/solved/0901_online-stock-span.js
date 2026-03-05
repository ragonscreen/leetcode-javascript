/**
 * 0901. Online Stock Span
 * Link: https://leetcode.com/problems/online-stock-span/
 * Difficulty: Medium
 * Date: 2026-03-05
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Monotonic Stack
 */
class StockSpanner {
        /**
         * Time Complexity: O(1)
         * Space Complexity: O(n)
         */
        constructor() {
                this.stack = [];
                this.idx = 0;
        }

        /**
         * Time Complexity: O(1) amortised
         * Space Complexity: O(1)
         *
         * @param {number} price
         * @return {number}
         */
        next(price) {
                while (this.stack.length && this.stack.at(-1)[0] <= price) {
                        this.stack.pop();
                }

                const i = this.stack.at(-1)?.[1] ?? -1;
                const res = this.idx - i;
                this.stack.push([price, this.idx++]);

                return res;
        }
}

export { StockSpanner };
