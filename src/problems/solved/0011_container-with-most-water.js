/**
 * 0011. Container With Most Water
 * Link: https://leetcode.com/problems/container-with-most-water/
 * Difficulty: Medium
 * Date: 2026-01-20
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Two Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
        let max = 0;
        let l = 0;
        let r = height.length - 1;

        while (l < r) {
                const hl = height[l];
                const hr = height[r];
                const w = r - l;
                const h = Math.min(hl, hr);
                const a = w * h;

                if (a > max) {
                        max = a;
                }

                hl < hr ? l++ : r--;
        }

        return max;
};

export default maxArea;
