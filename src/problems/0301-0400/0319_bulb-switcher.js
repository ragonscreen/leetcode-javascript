/**
 * 0319. Bulb Switcher
 *
 * Link: https://leetcode.com/problems/bulb-switcher/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-27
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Math (topic_8)
 * - Brainteaser (topic_32)
 *
 * Stats:
 * - Total Accepted: 306,916
 * - Total Submissions: 550,087
 * - Acceptance Rate: 55.8%
 *
 * Similar Problems:
 * - find-the-pivot-integer (Easy)
 * - bulb-switcher-ii (Medium)
 * - number-of-times-binary-string-is-prefix-aligned (Medium)
 * - minimum-number-of-k-consecutive-bit-flips (Hard)
 */

/**
 * Approach: Math
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 *
 * @param {number} n
 * @return {number}
 */
const bulbSwitch = (n) => Math.floor(Math.sqrt(n));

export { bulbSwitch };
