/**
 * 1784. Check if Binary String Has at Most One Segment of Ones
 *
 * Link: https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-03-08
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 *
 * Stats:
 * - Total Accepted: 187,344
 * - Total Submissions: 382,437
 * - Acceptance Rate: 49.0%
 *
 * Similar Problems:
 * - longer-contiguous-segments-of-ones-than-zeros (Easy)
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {string} s
 * @return {boolean}
 */
const checkOnesSegment = (s) => !s.includes('01');

export { checkOnesSegment };
