/**
 * 3751. Total Waviness of Numbers in Range I
 *
 * Link: https://leetcode.com/problems/total-waviness-of-numbers-in-range-i/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-06-04
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Math (topic_8)
 * - Dynamic Programming (topic_13)
 * - Enumeration (topic_61066)
 * - Senior (position_senior)
 * - Biweekly Contest 170 (contest_biweekly-contest-170)
 *
 * Stats:
 * - Total Accepted: 58,340
 * - Total Submissions: 68,075
 * - Acceptance Rate: 85.7%
 */

/**
 * Approach: Math [II]
 * Time Complexity: O(N * log M)
 * Space Complexity: O(1)
 * `N` = `num2 - num1 + 1`, `M` = `num2`
 *
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
const totalWaviness = (num1, num2) => {
        let res = 0;

        for (let num = num1; num <= num2; num++) {
                if (num < 100) {
                        continue;
                }

                let _num = num;

                while (_num > 100) {
                        const b = 0 | (_num / 10);
                        const a = 0 | (_num / 100);
                        const val = b % 10;
                        const pre = a % 10;
                        const nxt = _num % 10;

                        if (
                                (val > pre && val > nxt) ||
                                (val < pre && val < nxt)
                        ) {
                                res++;
                        }

                        _num = b;
                }
        }

        return res;
};

/**
 * Approach: Math [I]
 * Time Complexity: O(N * log M)
 * Space Complexity: O(1)
 * `N` = `num2 - num1 + 1`, `M` = `num2`
 *
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
const totalWaviness1 = (num1, num2) => {
        let res = 0;

        for (let num = num1; num <= num2; num++) {
                let _num = num;
                const nd = (0 | Math.log10(_num)) + 1;
                const d = new Uint8Array(nd);

                for (let j = 0; j < nd; j++) {
                        d[j] = _num % 10;
                        _num = 0 | (_num / 10);
                }

                for (let j = 1; j < nd - 1; j++) {
                        const val = d[j];
                        const pre = d[j - 1];
                        const nxt = d[j + 1];

                        if (
                                (val > pre && val > nxt) ||
                                (val < pre && val < nxt)
                        ) {
                                res++;
                        }
                }
        }

        return res;
};

export { totalWaviness, totalWaviness1 };
