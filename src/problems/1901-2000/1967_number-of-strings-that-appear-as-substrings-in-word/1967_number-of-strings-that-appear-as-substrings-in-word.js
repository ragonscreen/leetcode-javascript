/**
 * 1967. Number of Strings That Appear as Substrings in Word
 *
 * Link: https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-07-26
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - String (topic_10)
 * - Mid Level (position_mid-level)
 * - Weekly Contest 254 (contest_weekly-contest-254)
 *
 * Stats:
 *
 * - Total Accepted: 247,360
 * - Total Submissions: 287,131
 * - Acceptance Rate: 86.1%
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n * k)
 * Space Complexity: O(1)
 * `n` = `word.length`, `k` = `sum(patterns[i].length)`
 *
 * @param {string[]} patterns
 * @param {string} word
 * @returns {number}
 */
const numOfStrings = (patterns, word) => patterns.filter((e) => word.includes(e)).length;

export { numOfStrings };
