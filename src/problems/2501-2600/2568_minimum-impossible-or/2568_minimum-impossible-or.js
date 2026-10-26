/**
 * 2568. Minimum Impossible OR
 *
 * Link: https://leetcode.com/problems/minimum-impossible-or/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-10-17
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Bit Manipulation (topic_19)
 * - Brainteaser (topic_32)
 * - Staff (position_staff)
 * - Biweekly Contest 98 (contest_biweekly-contest-98)
 *
 * Stats:
 *
 * - Total Accepted: 21,605
 * - Total Submissions: 36,219
 * - Acceptance Rate: 59.7%
 */

/**
 * Approach: Bit Manipulation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @returns {number}
 */
const minImpossibleOR = (nums) => {
        const st = new Uint8Array(31);

        for (const num of nums) if ((num & (num - 1)) === 0) st[31 - Math.clz32(num)] = 1;

        for (let i = 0; i < 31; i++) if (!st[i]) return 1 << i;
};

export { minImpossibleOR };
