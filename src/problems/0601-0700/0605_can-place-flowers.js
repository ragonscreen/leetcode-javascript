/**
 * 0605. Can Place Flowers
 *
 * Link: https://leetcode.com/problems/can-place-flowers/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-03-08 (Updated: 2026-03-10)
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Greedy (topic_17)
 *
 * Stats:
 * - Total Accepted: 1,368,226
 * - Total Submissions: 4,707,502
 * - Acceptance Rate: 29.1%
 *
 * Similar Problems:
 * - teemo-attacking (Easy)
 * - asteroid-collision (Medium)
 */

/**
 * Approach: Greedy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = (flowerbed, n) => {
        let count = 0;

        for (let i = 0; i < flowerbed.length; i++) {
                if (!(flowerbed[i] || flowerbed[i - 1] || flowerbed[i + 1])) {
                        count++;
                        i++;
                }

                if (count >= n) {
                        return true;
                }
        }

        return false;
};

export { canPlaceFlowers };
