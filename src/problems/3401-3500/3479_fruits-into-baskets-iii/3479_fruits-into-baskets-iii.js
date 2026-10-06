/**
 * 3479. Fruits Into Baskets III
 *
 * Link: https://leetcode.com/problems/fruits-into-baskets-iii/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-09-24
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Binary Search (topic_11)
 * - Segment Tree (topic_29)
 * - Ordered Set (topic_61070)
 * - Staff (position_staff)
 * - Weekly Contest 440 (contest_weekly-contest-440)
 *
 * Stats:
 *
 * - Total Accepted: 90,088
 * - Total Submissions: 228,637
 * - Acceptance Rate: 39.4%
 *
 * Similar Problems:
 *
 * - block-placement-queries (Hard)
 */

/**
 * Approach: Sqrt Decomposition
 * Time Complexity: O(n * sqrt(n))
 * Space Complexity: O(n)
 * `n` = `fruits.length`
 *
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @returns {number}
 */
const numOfUnplacedFruits = (fruits, baskets) => {
        const n = fruits.length;
        const b = Uint32Array.from(baskets);
        const secSiz = 0 | Math.sqrt(n);
        const secCnt = Math.ceil(n / secSiz);
        const mx = new Uint32Array(secCnt);

        for (let i = 0, curSecSiz = 0, sec = 0; i < n; i++) {
                mx[sec] = Math.max(mx[sec], baskets[i]);

                if (++curSecSiz === secSiz) {
                        sec++;
                        curSecSiz = 0;
                }
        }

        let res = 0;

        for (const v of fruits) {
                let sec = 0;

                while (sec < secCnt && mx[sec] < v) sec++;

                // no section exists for this fruit
                if (sec === secCnt) {
                        res++;
                        continue;
                }

                let i = sec * secSiz;
                let curmx = 0; // max of prefix and suffix of used basket (exclusive)

                while (b[i] < v) curmx = Math.max(curmx, b[i++]);

                b[i] = 0;

                const bound = Math.min((sec + 1) * secSiz, n);

                while (i < bound) curmx = Math.max(curmx, b[i++]);

                mx[sec] = curmx;
        }

        return res;
};

export { numOfUnplacedFruits };
