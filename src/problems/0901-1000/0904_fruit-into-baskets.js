/**
 * 0904. Fruit Into Baskets
 *
 * Link: https://leetcode.com/problems/fruit-into-baskets/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-03-20
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Sliding Window (topic_55821)
 *
 * Stats:
 * - Total Accepted: 802,432
 * - Total Submissions: 1,582,680
 * - Acceptance Rate: 50.7%
 *
 * Similar Problems:
 * - fruits-into-baskets-ii (Easy)
 * - longest-nice-subarray (Medium)
 */

/**
 * Approach: Sliding Window
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} fruits
 * @return {number}
 */
const totalFruit = (fruits) => {
        const map = new Map();
        let res = 0;

        for (let l = 0, r = 0; r < fruits.length; r++) {
                const v = fruits[r];
                map.set(v, (map.get(v) || 0) + 1);

                while (map.size > 2) {
                        const vl = fruits[l];
                        map.set(vl, map.get(vl) - 1);

                        if (map.get(vl) === 0) {
                                map.delete(vl);
                        }

                        l++;
                }

                if (map.size <= 2) {
                        res = Math.max(res, r - l + 1);
                }
        }

        return res;
};

export { totalFruit };
