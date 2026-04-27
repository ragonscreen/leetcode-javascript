/**
 * 3024. Type of Triangle
 *
 * Link: https://leetcode.com/problems/type-of-triangle/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-04-28
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Math (topic_8)
 * - Sorting (topic_61049)
 *
 * Stats:
 * - Total Accepted: 218,355
 * - Total Submissions: 495,358
 * - Acceptance Rate: 44.1%
 */

/**
 * Approach: Math
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @return {string}
 */
const triangleType = (nums) => {
        const [a, b, c] = nums;

        if (a + b <= c || b + c <= a || c + a <= b) {
                return 'none';
        }

        if (a === b && a === c) {
                return 'equilateral';
        }

        if (a === b || b === c || c === a) {
                return 'isosceles';
        }

        return 'scalene';
};

export { triangleType };
