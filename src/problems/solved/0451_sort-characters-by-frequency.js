/**
 * 0451. Sort Characters By Frequency
 * Link: https://leetcode.com/problems/sort-characters-by-frequency/
 * Difficulty: Medium
 * Date: 2026-01-30
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Bucket Sort
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} s
 * @return {string}
 */
const frequencySort = (s) => {
        const map = {};

        for (const c of s) {
                map[c] = (map[c] || 0) + 1;
        }

        const arr = new Array(s.length + 1).fill(null);

        for (const [char, freq] of Object.entries(map)) {
                arr[freq] ??= [];
                arr[freq].push(char);
        }

        const res = [];

        for (let i = arr.length - 1; i > 0; i--) {
                const e = arr[i];

                if (!e) {
                        continue;
                }

                for (const c of e) {
                        res.push(c.repeat(i));
                }
        }

        return res.join('');
};

export { frequencySort };
