/**
 * 2404. Most Frequent Even Element
 * Link: https://leetcode.com/problems/most-frequent-even-element/
 * Difficulty: Easy
 * Date: 2026-02-05
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Hash Map
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
const mostFrequentEven = (nums) => {
        const map = {};
        let res = -1;
        let max = 0;

        for (const num of nums) {
                if (num % 2) {
                        continue;
                }

                const frq = (map[num] || 0) + 1;
                map[num] = frq;

                if (frq > max) {
                        res = num;
                        max = frq;
                }

                if (frq === max && num < res) {
                        res = num;
                }
        }

        return res;
};

export { mostFrequentEven };
