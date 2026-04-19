/**
 * 2001. Number of Pairs of Interchangeable Rectangles
 *
 * Link: https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-19
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Math (topic_8)
 * - Counting (topic_61062)
 * - Number Theory (topic_61067)
 *
 * Stats:
 * - Total Accepted: 59,324
 * - Total Submissions: 112,927
 * - Acceptance Rate: 52.5%
 *
 * Similar Problems:
 * - number-of-good-pairs (Easy)
 * - count-nice-pairs-in-an-array (Medium)
 * - replace-non-coprime-numbers-in-array (Hard)
 */

/**
 * Approach: Hash Map
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[][]} rectangles
 * @return {number}
 */
const interchangeableRectangles = (rectangles) => {
        const map = new Map();

        for (const [width, height] of rectangles) {
                const ratio = width / height;
                map.set(ratio, (map.get(ratio) || 0) + 1);
        }

        let res = 0;

        for (const cnt of map.values()) {
                res += Math.floor((cnt * (cnt - 1)) / 2);
        }

        return res;
};

export { interchangeableRectangles };
