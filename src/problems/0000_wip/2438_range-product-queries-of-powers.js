/**
 * 2438. Range Product Queries of Powers
 *
 * Link: https://leetcode.com/problems/range-product-queries-of-powers/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-19
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Bit Manipulation (topic_19)
 * - Prefix Sum (topic_61068)
 *
 * Stats:
 * - Total Accepted: 118,529
 * - Total Submissions: 193,032
 * - Acceptance Rate: 61.4%
 */

/**
 * Approach:
 * Time Complexity: O()
 * Space Complexity: O()
 *
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
const productQueries = (n, queries) => {
        const mod = 1e9 + 7;
        const exp = Math.floor(Math.log2(n));
        const powers = new Uint32Array(exp + 1);
        let val = 1 << exp;
        let sum = 0;
        let lastIdx = -1;
        let j = 0;

        while (val >= 1) {
                if (sum + val <= n) {
                        sum += val;
                        lastIdx = j;
                        powers[j++] = val;
                }

                val >>= 1;
        }

        const prefix = new Uint32Array(lastIdx + 1);
        let mult = 1;

        for (let i = lastIdx; i > -1; i--) {
                mult = (mult * powers[i]) % mod;
                prefix[lastIdx - i] = mult;
        }

        const m = queries.length;
        const res = new Uint32Array(m);

        for (let i = 0; i < m; i++) {
                const [l, r] = queries[i];
                res[i] = prefix[r] / (prefix[l - 1] ?? 1);
        }

        return res;
};

// const productQueries = (n, queries) => {
//         const mod = 1e9 + 7;
//         const len = Math.floor(Math.log2(n)) + 1;
//         const allPowers = new Uint32Array(len);
//         let num = 1;
//         let pow = 1;

//         while (num <= n) {
//                 allPowers[pow - 1] = num;
//                 num = 1 << pow++;
//         }

//         const powers = new Uint32Array(len);
//         let lastIdx = -1;
//         let sum = 0;

//         for (let i = len - 1, j = 0; i > -1; i--) {
//                 const p = allPowers[i];

//                 if (sum + p <= n) {
//                         sum += p;
//                         lastIdx = j;
//                         powers[j++] = p;
//                 }
//         }

//         const prefix = new Uint32Array(lastIdx + 1);
//         let mult = 1;

//         for (let i = lastIdx; i > -1; i--) {
//                 mult = (mult * powers[i]) % mod;
//                 prefix[lastIdx - i] = mult;
//         }

//         const m = queries.length;
//         const res = new Uint32Array(m);

//         for (let i = 0; i < m; i++) {
//                 const [l, r] = queries[i];
//                 res[i] = prefix[r] / (prefix[l - 1] ?? 1);
//         }

//         return res;
// };

export { productQueries };
