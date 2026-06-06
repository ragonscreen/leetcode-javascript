/**
 * 3950. Exactly One Consecutive Set Bits Pair
 *
 * Link: https://leetcode.com/problems/exactly-one-consecutive-set-bits-pair/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-06-06
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Biweekly Contest 184 (contest_biweekly-contest-184)
 *
 * Stats:
 * - Total Accepted: 27,142
 * - Total Submissions: 53,978
 * - Acceptance Rate: 50.3%
 */

/**
 * Approach: Bit Manipulation
 * Time Complexity: O(lg N)
 * Space Complexity: O(1)
 * `N` = `n`
 *
 * @param {number} n
 * @return {boolean}
 */
const consecutiveSetBits = (n) => {
        let pre = 0;
        let cnt = 0;

        while (n) {
                const bit = n & 1;
                cnt += pre & bit;
                pre = bit;
                n >>= 1;
        }

        return cnt === 1;
};

/**
 * Approach: Simulation
 * Time Complexity: O(lg N)
 * Space Complexity: O(lg N)
 * `N` = `n`
 *
 * @param {number} n
 * @return {boolean}
 */
const consecutiveSetBits1 = (n) => {
        const s = n.toString(2);
        let cnt = 0;

        for (let i = 0; i < s.length - 1; i++) {
                if (s[i] === '1' && s[i + 1] === '1') {
                        cnt++;
                }
        }

        return cnt === 1;
};

export { consecutiveSetBits, consecutiveSetBits1 };
