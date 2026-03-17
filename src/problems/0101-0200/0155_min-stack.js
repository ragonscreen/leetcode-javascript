/**
 * 0155. Min Stack
 *
 * Link: https://leetcode.com/problems/min-stack/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2025-12-18
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Stack (topic_15)
 * - Design (topic_25)
 *
 * Stats:
 * - Total Accepted: 2,636,650
 * - Total Submissions: 4,560,742
 * - Acceptance Rate: 57.8%
 *
 * Similar Problems:
 * - max-stack (Hard)
 * - sliding-window-maximum (Hard)
 */

/**
 * Approach: Stack
 */
class MinStack {
        /**
         * Time Complexity: O(1)
         * Space Complexity: O(1)
         */
        constructor() {
                this.stack = [];
        }

        /**
         * Time Complexity: O(1)
         * Space Complexity: O(1)
         *
         * @param {number} val
         * @return {void}
         */
        push(val) {
                const min = Math.min(val, this.stack.at(-1)?.[1] ?? val);
                this.stack.push([val, min]);
        }

        /**
         * Time Complexity: O(1)
         * Space Complexity: O(1)
         *
         * @return {void}
         */
        pop() {
                this.stack.pop();
        }

        /**
         * Time Complexity: O(1)
         * Space Complexity: O(1)
         *
         * @return {number}
         */
        top() {
                return this.stack.at(-1)[0];
        }

        /**
         * Time Complexity: O(1)
         * Space Complexity: O(1)
         *
         * @return {number}
         */
        getMin() {
                return this.stack.at(-1)[1];
        }
}

export { MinStack };
