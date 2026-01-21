/**
 * 0042. Trapping Rain Water
 * Link: https://leetcode.com/problems/trapping-rain-water/
 * Difficulty: Hard
 * Date: 2026-01-21
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Prefix & Suffix Arrays
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} height
 * @return {number}
 */
const trap = (height) => {
        const n = height.length;
        const mins = new Array(n).fill(0);
        let max = 0;

        for (let i = 0; i < n; i++) {
                const v = height[i];
                mins[i] = max;

                if (v > max) {
                        max = v;
                }
        }

        let res = 0;
        max = 0;

        for (let i = n - 1; i >= 0; i--) {
                const v = height[i];
                mins[i] = Math.min(max, mins[i]);
                const water = mins[i] - height[i];

                if (water > 0) {
                        res += water;
                }

                if (v > max) {
                        max = v;
                }
        }

        return res;
};

export default trap;
