/**
 * 2708. Maximum Strength of a Group
 *
 * Link: https://leetcode.com/problems/maximum-strength-of-a-group/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-22
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Dynamic Programming (topic_13)
 * - Backtracking (topic_14)
 * - Greedy (topic_17)
 * - Bit Manipulation (topic_19)
 * - Sorting (topic_61049)
 * - Enumeration (topic_61066)
 *
 * Stats:
 * - Total Accepted: 38,481
 * - Total Submissions: 149,804
 * - Acceptance Rate: 25.7%
 *
 * Similar Problems:
 * - maximum-strength-of-k-disjoint-subarrays (Hard)
 */

/**
 * Approach: Greedy
 * Time Complexity: O(n + m + m log m)
 * Space Complexity: O(m)
 * `n` = length of `nums`, `m` = number of negative numbers in `nums`
 *
 * @param {number[]} nums
 * @return {number}
 */
const maxStrength = (nums) => {
        const negatives = [];
        let res = 1;
        let changed = false;
        let haveZero = false;

        for (const num of nums) {
                if (num > 0) {
                        changed = true;
                        res *= num;
                } else if (num < 0) {
                        negatives.push(num);
                } else {
                        haveZero = true;
                }
        }

        negatives.sort((a, b) => a - b);
        let i = 0;

        while (negatives.length - i >= 2) {
                changed = true;
                res *= negatives[i] * negatives[i + 1];
                i += 2;
        }

        return changed ? res : haveZero ? 0 : negatives.at(-1);
};

export { maxStrength };
