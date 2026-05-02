/**
 * 0788. Rotated Digits
 *
 * Link: https://leetcode.com/problems/rotated-digits/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-02
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Math (topic_8)
 * - Dynamic Programming (topic_13)
 *
 * Stats:
 * - Total Accepted: 156,034
 * - Total Submissions: 262,000
 * - Acceptance Rate: 59.6%
 */

/**
 * Approach: Bit Manipulation
 * Time Complexity: O(n)
 * Space Complexity: O(10) = O(1)
 *
 * @param {number} n
 * @return {number}
 */
const rotatedDigits = (n) => {
        const ok = [-1, -1, 1, 0, 0, 1, 1, 0, -1, 1];
        let res = 0;

        for (let i = 1; i <= n; i++) {
                let mask = -1;
                let x = i;

                while (x) {
                        const v = ok[x % 10];
                        x = 0 | (x / 10);

                        if (!v) {
                                mask = 0;
                                break;
                        }

                        mask &= v;
                }

                res += Math.max(mask, 0);
        }

        return res;
};

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(9) = O(1)
 *
 * @param {number} n
 * @return {number}
 */
const rotatedDigits1 = (n) => {
        const ok = [2, 5, 6, 9];
        const ng = [3, 4, 7];
        let res = 0;

        for (let i = 1; i <= n; i++) {
                let valid = false;
                let x = i;

                while (x) {
                        const d = x % 10;
                        x = Math.floor(x / 10);

                        if (ng.includes(d)) {
                                valid = false;
                                break;
                        }

                        if (ok.includes(d)) {
                                valid = true;
                        }
                }

                res += valid;
        }

        return res;
};

export { rotatedDigits, rotatedDigits1 };
