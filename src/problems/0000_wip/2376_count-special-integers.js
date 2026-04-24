/**
 * 2376. Count Special Integers
 *
 * Link: https://leetcode.com/problems/count-special-integers/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-04-25
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Math (topic_8)
 * - Dynamic Programming (topic_13)
 *
 * Stats:
 * - Total Accepted: 17,525
 * - Total Submissions: 41,321
 * - Acceptance Rate: 42.4%
 *
 * Similar Problems:
 * - count-numbers-with-unique-digits (Medium)
 * - k-th-smallest-in-lexicographical-order (Hard)
 */

import { debug } from '../../utils/utils.js';

/**
 * Approach:
 * Time Complexity: O()
 * Space Complexity: O()
 *
 * @param {number} n
 * @return {number}
 */
const countSpecialNumbers = (n) => {
        const map = new Array(9);
        map[0] = 9;
        let prefix = 9;

        for (let i = 1; i < 9; i++) {
                prefix *= 10 - i;
                map[i] = map[i - 1] + prefix;
        }

        const lg = Math.log10(n);
        const digits = Math.floor(lg) + 1;
        const res = map[digits - 2] ?? 0;

        if (lg % 1 === 0) {
                return res;
        }
};

export { countSpecialNumbers };

/*

let x = n;
    let pow = digits - 1;
    let res2 = 0;
    let seen = 0;

    while (x) {
        const k = Math.floor(x / 10 ** pow)
        const v = k * (10 ** pow);
        const xlg = Math.floor(Math.log10(v)) + 1;
        let cnt = (k - 1) * ((map2[xlg - 2] ?? seen + 1) - seen);
        res2 += cnt;
        x -= v
        pow--;
        seen++;

        console.log({k,v,xlg,cnt,res2,m: map2[xlg-2]})
    }

    */
