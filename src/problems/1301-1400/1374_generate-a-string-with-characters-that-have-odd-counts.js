/**
 * 1374. Generate a String With Characters That Have Odd Counts
 *
 * Link: https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-03-21
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 *
 * Stats:
 * - Total Accepted: 113,575
 * - Total Submissions: 144,664
 * - Acceptance Rate: 78.5%
 */

/**
 * Approach: Math
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary, O(n) total
 *
 * @param {number} n
 * @return {string}
 */
const generateTheString = (n) => 'a'.repeat(n - 1) + (n % 2 ? 'a' : 'b');

export { generateTheString };
