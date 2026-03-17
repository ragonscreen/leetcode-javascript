/**
 * 0258. Add Digits
 *
 * Link: https://leetcode.com/problems/add-digits/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-03-17
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Math (topic_8)
 * - Simulation (topic_61055)
 * - Number Theory (topic_61067)
 *
 * Stats:
 * - Total Accepted: 1,193,531
 * - Total Submissions: 1,736,998
 * - Acceptance Rate: 68.7%
 *
 * Similar Problems:
 * - alternating-digit-sum (Easy)
 * - calculate-digit-sum-of-a-string (Easy)
 * - difference-between-element-sum-and-digit-sum-of-an-array (Easy)
 * - happy-number (Easy)
 * - minimum-sum-of-four-digit-number-after-splitting-digits (Easy)
 * - sum-of-digits-in-the-minimum-number (Easy)
 * - sum-of-digits-of-string-after-convert (Easy)
 */

/**
 * Approach: Math
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 *
 * @param {number} num
 * @return {number}
 */
const addDigits = (num) => (num ? num % 9 || 9 : 0);

export { addDigits };
