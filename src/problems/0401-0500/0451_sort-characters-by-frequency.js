/**
 * 0451. Sort Characters By Frequency
 *
 * Link: https://leetcode.com/problems/sort-characters-by-frequency/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-01-30
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Hash Table (topic_6)
 * - String (topic_10)
 * - Sorting (topic_61049)
 * - Heap (Priority Queue) (topic_61050)
 * - Bucket Sort (topic_61060)
 * - Counting (topic_61062)
 *
 * Stats:
 * - Total Accepted: 1,085,501
 * - Total Submissions: 1,444,358
 * - Acceptance Rate: 75.2%
 *
 * Similar Problems:
 * - count-pairs-of-similar-strings (Easy)
 * - first-unique-character-in-a-string (Easy)
 * - maximum-number-of-pairs-in-array (Easy)
 * - most-frequent-even-element (Easy)
 * - percentage-of-letter-in-string (Easy)
 * - sort-array-by-increasing-frequency (Easy)
 * - node-with-highest-edge-score (Medium)
 * - top-k-frequent-elements (Medium)
 */

/**
 * Approach: Counting Sort
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
