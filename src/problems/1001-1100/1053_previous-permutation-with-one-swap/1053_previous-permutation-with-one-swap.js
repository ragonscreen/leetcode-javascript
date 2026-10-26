/**
 * 1053. Previous Permutation With One Swap
 *
 * Link: https://leetcode.com/problems/previous-permutation-with-one-swap/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-10-16
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Greedy (topic_17)
 * - Senior Staff (position_senior-staff)
 * - Weekly Contest 138 (contest_weekly-contest-138)
 *
 * Stats:
 *
 * - Total Accepted: 51,219
 * - Total Submissions: 103,740
 * - Acceptance Rate: 49.4%
 */

/**
 * Approach: Greedy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * `n` = `arr.length`
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
const prevPermOpt1 = (arr) => {
        const n = arr.length;
        let i = n - 1;

        while (arr[i] >= arr[i - 1]) i--;

        if (i === 0) return arr;

        const val = arr[i - 1];
        let mxi = i;

        for (let j = i + 1; j < n; j++) {
                const num = arr[j];

                if (num > arr[mxi] && num < val) mxi = j;
        }

        [arr[i - 1], arr[mxi]] = [arr[mxi], arr[i - 1]];

        return arr;
};

export { prevPermOpt1 };
