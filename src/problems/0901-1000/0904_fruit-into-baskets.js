/**
 * 904. Fruit Into Baskets
 *
 * Link: https://leetcode.com/problems/fruit-into-baskets/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-03-20 (Updated: 2026-09-24)
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Sliding Window (topic_55821)
 *
 * Stats:
 *
 * - Total Accepted: 802,432
 * - Total Submissions: 1,582,680
 * - Acceptance Rate: 50.7%
 *
 * Similar Problems:
 *
 * - fruits-into-baskets-ii (Easy)
 * - longest-nice-subarray (Medium)
 */

/**
 * Approach: Sliding Window
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * `n` = `fruits.length`
 *
 * @param {number[]} fruits
 * @returns {number}
 */
const totalFruit = (fruits) => {
        const n = fruits.length;
        const map = new Uint32Array(n); // fruits[i] < n
        let res = -1;

        for (let l = 0, r = 0, cnt = 0; r < n; r++) {
                if (++map[fruits[r]] === 1) cnt++;

                while (cnt > 2) if (--map[fruits[l++]] === 0) cnt--;

                res = Math.max(res, r - l + 1);
        }

        return res;
};

export { totalFruit };
