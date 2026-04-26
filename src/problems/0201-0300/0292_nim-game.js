/**
 * 0292. Nim Game
 *
 * Link: https://leetcode.com/problems/nim-game/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-04-26
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Math (topic_8)
 * - Brainteaser (topic_32)
 * - Game Theory (topic_61073)
 *
 * Stats:
 * - Total Accepted: 546,696
 * - Total Submissions: 915,920
 * - Acceptance Rate: 59.7%
 *
 * Similar Problems:
 * - flip-game-ii (Medium)
 */

/**
 * Approach: Math
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 *
 * @param {number} n
 * @return {boolean}
 */
const canWinNim = (n) => n % 4 !== 0;

export { canWinNim };
