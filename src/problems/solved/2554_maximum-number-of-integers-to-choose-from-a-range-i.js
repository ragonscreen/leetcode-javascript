/**
 * 2554. Maximum Number of Integers to Choose From a Range I
 * Link: https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i/
 * Difficulty: Medium
 * Date: 2026-03-09
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Hash Set
 * Time Complexity: O(n)
 * Space Complexity: O(m)
 * `m` = length of `banned`
 *
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
const maxCount = (banned, n, maxSum) => {
        const set = new Set(banned);
        let cur = 1;
        let sum = 0;
        let res = 0;

        while (cur <= n && sum + cur <= maxSum) {
                if (set.has(cur)) {
                        cur++;
                } else {
                        sum += cur;
                        cur++;
                        res++;
                }
        }

        return res;
};

export { maxCount };
