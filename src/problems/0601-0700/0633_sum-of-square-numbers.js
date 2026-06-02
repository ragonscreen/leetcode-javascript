/**
 * 0633. Sum of Square Numbers
 *
 * Link: https://leetcode.com/problems/sum-of-square-numbers/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-31
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Math (topic_8)
 * - Two Pointers (topic_9)
 * - Binary Search (topic_11)
 * - Mid Level (position_mid-level)
 *
 * Stats:
 * - Total Accepted: 446,152
 * - Total Submissions: 1,210,160
 * - Acceptance Rate: 36.9%
 *
 * Similar Problems:
 * - sum-of-squares-of-special-elements (Easy)
 * - valid-perfect-square (Easy)
 */

/**
 * Approach: Sum of Two Squares Theorem
 * Time Complexity: O(sqrt(N))
 * Space Complexity: O(1)
 * `N` = `c`
 *
 * @param {number} c
 * @return {boolean}
 */
const judgeSquareSum = (c) => {
        if (c <= 1) {
                return true;
        }

        const cdt = Math.sqrt(c);
        const rt = Math.floor(cdt);

        // x^2 + 0^2 = c
        // c = x^2
        if (cdt === rt) {
                return true;
        }

        for (let i = 2; i <= rt; i++) {
                let cnt = 0;

                while (c % i === 0) {
                        cnt++;
                        c /= i;
                }

                if (i % 4 === 3 && cnt % 2) {
                        return false;
                }
        }

        return c % 4 !== 3;
};

/**
 * Approach: Math + Two Pointers [II]
 * Time Complexity: O(sqrt(N))
 * Space Complexity: O(1)
 * `N` = `c`
 *
 * @param {number} c
 * @return {boolean}
 */
const judgeSquareSum1 = (c) => {
        if (c <= 1) {
                return true;
        }

        const cdt = Math.sqrt(c);
        const rt = Math.floor(cdt);

        // x^2 + 0^2 = c
        // c = x^2
        if (cdt === rt) {
                return true;
        }

        let l = 0;
        let r = rt;

        while (l <= r) {
                const sum = l ** 2 + r ** 2;

                if (sum === c) {
                        return true;
                }

                if (sum < c) {
                        l++;
                } else {
                        r--;
                }
        }

        return false;
};

/**
 * Approach: Math + Two Pointers [I]
 * Time Complexity: O(sqrt(N))
 * Space Complexity: O(1)
 * `N` = `c`
 *
 * @param {number} c
 * @return {boolean}
 */
const judgeSquareSum2 = (c) => {
        if (c <= 1) {
                return true;
        }

        const cdt = Math.sqrt(c);
        const rt = Math.floor(cdt);

        if (cdt === rt) {
                return true;
        }

        for (let a = 1; a <= rt; a++) {
                const bb = c - a ** 2;
                const cdtb = Math.sqrt(bb);
                const b = Math.floor(cdtb);

                if (b === cdtb) {
                        return true;
                }
        }

        return false;
};

/**
 * Approach: Binary Search
 * Time Complexity: O(sqrt(N) * lg N)
 * Space Complexity: O(1)
 * `N` = `c`
 *
 * @param {number} c
 * @return {boolean}
 */
const judgeSquareSum3 = (c) => {
        const cdt = Math.sqrt(c);
        const rt = Math.floor(cdt);

        if (cdt === rt) {
                return true;
        }

        for (let a = 0; a <= rt; a++) {
                const aa = a ** 2;
                let l = 0;
                let r = c + 1;

                while (l <= r) {
                        const m = (l + r) >> 1;
                        const sum = aa + m ** 2;

                        if (sum === c) {
                                return true;
                        }

                        if (sum < c) {
                                l = m + 1;
                        } else {
                                r = m - 1;
                        }
                }
        }

        return false;
};

export { judgeSquareSum, judgeSquareSum1, judgeSquareSum2, judgeSquareSum3 };
