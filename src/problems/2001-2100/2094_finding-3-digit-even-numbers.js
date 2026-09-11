/**
 * 2094. Finding 3-Digit Even Numbers
 *
 * Link: https://leetcode.com/problems/finding-3-digit-even-numbers/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-09-11
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Recursion (topic_31)
 * - Sorting (topic_61049)
 * - Enumeration (topic_61066)
 * - Mid Level (position_mid-level)
 * - Weekly Contest 270 (contest_weekly-contest-270)
 *
 * Stats:
 *
 * - Total Accepted: 195,149
 * - Total Submissions: 247,794
 * - Acceptance Rate: 78.8%
 *
 * Similar Problems:
 *
 * - find-numbers-with-even-number-of-digits (Easy)
 * - unique-3-digit-even-numbers (Easy)
 */

/**
 * Approach: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `digits.length`
 *
 * @param {number[]} digits
 * @returns {number[]}
 */
const findEvenNumbers = (digits) => {
        const frq = new Int8Array(10);

        for (const d of digits) frq[d]++;

        const res = [];

        for (let num = 100; num <= 998; num += 2) {
                const x = Math.floor(num / 100);
                const y = Math.floor((num / 10) % 10);
                const z = Math.floor(num % 10);
                const dd = [x, y, z];
                let ok = true;

                for (const d of dd) frq[d]--;

                for (const d of dd) {
                        if (frq[d] < 0) ok = false;
                        frq[d]++;
                }

                if (ok) res.push(num);
        }

        return res;
};

/**
 * Approach:
 * Time Complexity: O(n^3)
 * Space Complexity: O(1)
 * `n` = `digits.length`
 *
 * @param {number[]} digits
 * @returns {number[]}
 */
const findEvenNumbers1 = (digits) => {
        const n = digits.length;
        const vis = new Uint8Array(999);
        let cnt = 0;

        for (let i = 0; i < n; i++) {
                const x = digits[i];

                if (x === 0) continue;

                for (let j = 0; j < n; j++) {
                        if (j === i) continue;

                        const y = digits[j];

                        for (let k = 0; k < n; k++) {
                                if (k === i || k === j) continue;

                                const z = digits[k];

                                if (z & 1) continue;

                                const num = x * 100 + y * 10 + z;

                                if (!vis[num]) {
                                        cnt++;
                                        vis[num] = 1;
                                }
                        }
                }
        }

        const res = new Uint16Array(cnt);

        for (let i = 0, ri = 0; i < 999; i++) if (vis[i]) res[ri++] = i;

        return res;
};

export { findEvenNumbers, findEvenNumbers1 };
