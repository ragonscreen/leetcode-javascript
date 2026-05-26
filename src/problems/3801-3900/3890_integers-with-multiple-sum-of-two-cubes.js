/**
 * 3890. Integers With Multiple Sum of Two Cubes
 *
 * Link: https://leetcode.com/problems/integers-with-multiple-sum-of-two-cubes/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-19
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Hash Table (topic_6)
 * - Sorting (topic_61049)
 * - Counting (topic_61062)
 * - Enumeration (topic_61066)
 * - Staff (position_staff)
 * - Weekly Contest 496 (contest_weekly-contest-496)
 *
 * Stats:
 * - Total Accepted: 31,893
 * - Total Submissions: 57,383
 * - Acceptance Rate: 55.6%
 */

/**
 * Approach: Math
 * Time Complexity: O(N^(2/3) + k lg k)
 * Space Complexity: O(N^(2/3)) auxiliary, O(N^(2/3) + k) total
 * `N` = `n`, `k` = count of valid numbers
 *
 * @param {number} n
 * @return {number[]}
 */
const findGoodIntegers = (n) => {
        const max = Math.floor(Math.cbrt(n));
        const cubes = new Uint32Array(max);

        for (let i = 1; i <= max; i++) {
                cubes[i - 1] = i ** 3;
        }

        const map = new Map();
        const res = [];

        for (let i = 0; i < max - 1; i++) {
                for (let j = i + 1; j < max; j++) {
                        const x = cubes[i] + cubes[j];

                        if (x > n) {
                                continue;
                        }

                        const cnt = map.get(x) ?? 0;

                        if (cnt === 1) {
                                res.push(x);
                        }

                        map.set(x, cnt + 1);
                }
        }

        return res.sort((a, b) => a - b);
};

export { findGoodIntegers };
