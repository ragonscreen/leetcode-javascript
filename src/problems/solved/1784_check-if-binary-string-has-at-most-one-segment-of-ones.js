/**
 * 1784. Check if Binary String Has at Most One Segment of Ones
 * Link: https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones/
 * Difficulty: Easy
 * Date: 2026-03-08
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {string} s
 * @return {boolean}
 */
const checkOnesSegment = (s) => !s.includes('01');

export { checkOnesSegment };
