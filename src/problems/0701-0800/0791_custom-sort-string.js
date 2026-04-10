/**
 * 0791. Custom Sort String
 *
 * Link: https://leetcode.com/problems/custom-sort-string/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-10
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Hash Table (topic_6)
 * - String (topic_10)
 * - Sorting (topic_61049)
 *
 * Stats:
 * - Total Accepted: 577,692
 * - Total Submissions: 799,178
 * - Acceptance Rate: 72.3%
 *
 * Similar Problems:
 * - sort-the-students-by-their-kth-score (Medium)
 */

/**
 * Approach: Hash Map
 * Time Complexity: O(n + m)
 * Space Complexity: O(1)
 * `n` = length of `order`, `m` = length of `s`
 *
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
const customSortString = (order, s) => {
        const map = new Map();

        for (const c of s) {
                map[c] = (map[c] || 0) + 1;
                map.set(c, (map.get(c) || 0) + 1);
        }

        let res = '';

        for (const c of order) {
                res += c.repeat(map.get(c));
                map.set(c, 0);
        }

        for (const [c, v] of map) {
                res += c.repeat(v);
        }

        return res;
};

/**
 * Approach: Sorting
 * Time Complexity: O(n + m log m)
 * Space Complexity: O(m) for sorting, O(n + m) total
 * `n` = length of `order`, `m` = length of `s`
 *
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
const customSortString1 = (order, s) => {
        const map = {};

        for (let i = 0; i < order.length; i++) {
                map[order[i]] = i;
        }

        return [...s]
                .sort((a, b) => {
                        const x = map[a];
                        const y = map[b];

                        return x === undefined && y === undefined
                                ? 0
                                : x === undefined
                                  ? 1
                                  : y === undefined
                                    ? -1
                                    : x - y;
                })
                .join('');
};

export { customSortString, customSortString1 };
