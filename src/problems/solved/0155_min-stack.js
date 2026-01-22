/**
 * 0155. Min Stack
 * Link: https://leetcode.com/problems/min-stack/
 * Difficulty: Medium
 * Date: 2025-12-18
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Stack
 * Space Complexity: O(n)
 */
class MinStack {
        constructor() {
                this.stack = [];
        }

        /**
         * Time Complexity: O(1)
         * @param {number} val
         * @return {void}
         */
        push = (val) => {
                const min = Math.min(val, this.stack.at(-1)?.[1] ?? val);
                this.stack.push([val, min]);
        };

        /**
         * Time Complexity: O(1)
         * @return {void}
         */
        pop = () => {
                this.stack.pop();
        };

        /**
         * Time Complexity: O(1)
         * @return {number}
         */
        top = () => {
                return this.stack.at(-1)[0];
        };

        /**
         * Time Complexity: O(1)
         * @return {number}
         */
        getMin = () => {
                return this.stack.at(-1)[1];
        };
}

export { MinStack };
