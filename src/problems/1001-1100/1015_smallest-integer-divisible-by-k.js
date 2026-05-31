/**
 * 1015. Smallest Integer Divisible by K
 *
 * Link: https://leetcode.com/problems/smallest-integer-divisible-by-k/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-31
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Hash Table (topic_6)
 * - Math (topic_8)
 * - Senior (position_senior)
 * - Weekly Contest 129 (contest_weekly-contest-129)
 *
 * Stats:
 * - Total Accepted: 191,936
 * - Total Submissions: 353,552
 * - Acceptance Rate: 54.3%
 */

/**
 * Approach: Math [Space Optimized]
 * Time Complexity: O(K)
 * Space Complexity: O(1)
 * `K` = `k`
 *
 * @param {number} k
 * @return {number}
 */
const smallestRepunitDivByK = (k) => {
        if (k % 2 === 0 || k % 5 === 0) {
                return -1;
        }

        let rem = 1 % k;

        for (let len = 1; len <= k; len++) {
                if (rem === 0) {
                        return len;
                }

                rem = (rem * 10 + 1) % k;
        }

        return -1;
};

/**
 * Approach: Math
 * Time Complexity: O(K)
 * Space Complexity: O(K)
 * `K` = `k`
 *
 * @param {number} k
 * @return {number}
 */
const smallestRepunitDivByK1 = (k) => {
        if (k % 2 === 0 || k % 5 === 0) {
                return -1;
        }

        const set = new Set();
        let rem = 1;
        let len = 1;

        while (rem % k !== 0) {
                rem = (rem * 10 + 1) % k;
                len++;

                if (set.has(rem)) {
                        return -1;
                }

                set.add(rem);
        }

        return len;
};

export { smallestRepunitDivByK, smallestRepunitDivByK1 };
