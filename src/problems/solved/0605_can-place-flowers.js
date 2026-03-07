/**
 * 0605. Can Place Flowers
 * Link: https://leetcode.com/problems/can-place-flowers/
 * Difficulty: Easy
 * Date: 2026-03-08
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Simulation
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
        }

        return count >= n;
};

export { canPlaceFlowers };
