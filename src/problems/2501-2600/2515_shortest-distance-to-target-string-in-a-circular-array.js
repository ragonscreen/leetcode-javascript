/**
 * 2515. Shortest Distance to Target String in a Circular Array
 *
 * Link: https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-04-15
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - String (topic_10)
 *
 * Stats:
 * - Total Accepted: 69,039
 * - Total Submissions: 118,315
 * - Acceptance Rate: 58.4%
 *
 * Similar Problems:
 * - defuse-the-bomb (Easy)
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
const closestTarget = (words, target, startIndex) => {
        const n = words.length;
        let res = n;

        for (let i = 0; i < n; i++) {
                if (words[i] === target) {
                        const diff = Math.abs(i - startIndex);
                        res = Math.min(res, diff, n - diff);
                }
        }

        return res === n ? -1 : res;
};

export { closestTarget };
