/**
 * 877. Stone Game
 *
 * Link: https://leetcode.com/problems/stone-game/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-08-26
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Math (topic_8)
 * - Dynamic Programming (topic_13)
 * - Minimax (topic_35)
 * - Game Theory (topic_61073)
 * - Zero-Sum Game (topic_122082)
 * - Staff (position_staff)
 * - Weekly Contest 95 (contest_weekly-contest-95)
 *
 * Stats:
 *
 * - Total Accepted: 525,141
 * - Total Submissions: 682,130
 * - Acceptance Rate: 77.0%
 *
 * Similar Problems:
 *
 * - stone-game-ix (Medium)
 * - stone-game-vi (Medium)
 * - stone-game-vii (Medium)
 * - strictly-palindromic-number (Medium)
 * - visit-array-positions-to-maximize-score (Medium)
 * - stone-game-v (Hard)
 * - stone-game-viii (Hard)
 */

/**
 * Approach: Math
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 *
 * Since there are an even number of piles, Alice can force either all the
 * odd-indexed piles or all the even-indexed piles. Since the number of stones
 * in total is odd, one of them must contain more stones than the other. Alice
 * simply chooses the parity with more stones and wins the game.
 *
 * @param {number[]} piles
 * @returns {boolean}
 */
const stoneGame = (piles) => true;

export { stoneGame };
