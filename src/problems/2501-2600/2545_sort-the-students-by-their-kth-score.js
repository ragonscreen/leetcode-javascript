/**
 * 2545. Sort the Students by Their Kth Score
 *
 * Link: https://leetcode.com/problems/sort-the-students-by-their-kth-score/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-26
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Sorting (topic_61049)
 * - Matrix (topic_61053)
 *
 * Stats:
 * - Total Accepted: 90,085
 * - Total Submissions: 104,793
 * - Acceptance Rate: 86.0%
 *
 * Similar Problems:
 * - sort-the-people (Easy)
 * - custom-sort-string (Medium)
 * - sort-threats-by-severity-and-exploitability (Medium)
 * - erect-the-fence (Hard)
 */

/**
 * Approach: Sorting
 * Time Complexity: O(n log n)
 * Space Complexity: O(1) auxiliary, O(n) for sorting
 *
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
const sortTheStudents = (score, k) => score.sort((a, b) => b[k] - a[k]);

export { sortTheStudents };
