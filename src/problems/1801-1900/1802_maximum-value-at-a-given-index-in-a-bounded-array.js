/**
 * 1802. Maximum Value at a Given Index in a Bounded Array
 *
 * Link: https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-26
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Math (topic_8)
 * - Binary Search (topic_11)
 * - Greedy (topic_17)
 * - Staff (position_staff)
 * - Weekly Contest 233 (contest_weekly-contest-233)
 *
 * Stats:
 * - Total Accepted: 89,135
 * - Total Submissions: 229,329
 * - Acceptance Rate: 38.9%
 */

/**
 * Approach: Math + Greedy
 * Time Complexity: O(lg K)
 * Space Complexity: O(1)
 * `K` = `maxSum`
 *
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
const maxValue = (n, index, maxSum) => {
        const check = (num, cnt) => {
                return num >= cnt
                        ? ((num + num - cnt + 1) * cnt) / 2
                        : ((num + 1) * num) / 2 + (cnt - num);
        };

        let ok = 1;
        let ng = maxSum + 1;

        while (Math.abs(ok - ng) > 1) {
                const m = (ok + ng) >> 1;
                const sum = check(m, index + 1) + check(m, n - index) - m;

                if (sum <= maxSum) {
                        ok = m;
                } else {
                        ng = m;
                }
        }

        return ok;
};

/**
 * Approach: Math + Greedy [Expanded]
 * Time Complexity: O(lg K)
 * Space Complexity: O(1)
 * `K` = `maxSum`
 *
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
const maxValue1 = (n, index, maxSum) => {
        const check = (num) => {
                const cntNotOne = num - 2;
                const a0 = num - 1;
                const aN = 2;

                const calc = (cnt) => {
                        const _cntNotOne = Math.min(cntNotOne, cnt);
                        const _aN = Math.max(aN, num - cnt);
                        let sum = (_cntNotOne * (a0 + _aN)) / 2;
                        sum += Math.max(0, cnt - _cntNotOne);

                        return sum;
                };

                // num + left sum + right sum
                return num + calc(index) + calc(n - index - 1) <= maxSum;
        };

        let ok = 0;
        let ng = maxSum + 1;

        while (Math.abs(ok - ng) > 1) {
                const m = (ok + ng) >> 1;

                if (check(m)) {
                        ok = m;
                } else {
                        ng = m;
                }
        }

        return ok;
};

export { maxValue, maxValue1 };
