/**
 * 3477. Fruits Into Baskets II
 *
 * Link: https://leetcode.com/problems/fruits-into-baskets-ii/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-09-24
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Binary Search (topic_11)
 * - Segment Tree (topic_29)
 * - Simulation (topic_61055)
 * - Ordered Set (topic_61070)
 * - Mid Level (position_mid-level)
 * - Weekly Contest 440 (contest_weekly-contest-440)
 *
 * Stats:
 *
 * - Total Accepted: 210,079
 * - Total Submissions: 299,165
 * - Acceptance Rate: 70.2%
 *
 * Similar Problems:
 *
 * - fruit-into-baskets (Medium)
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

/**
 * Approach: Simulation
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 * `n` = `fruits.length`
 *
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @returns {number}
 */
const numOfUnplacedFruits1 = (fruits, baskets) => {
        const n = fruits.length;
        let res = 0;

        outer: for (let i = 0; i < n; i++) {
                const v = fruits[i];

                for (let j = 0; j < n; j++) {
                        if (baskets[j] >= v) {
                                baskets[j] = -1;
                                continue outer;
                        }
                }

                res++;
        }

        return res;
};

export { numOfUnplacedFruits, numOfUnplacedFruits1 };
