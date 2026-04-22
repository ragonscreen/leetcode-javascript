/**
 * 0485. Max Consecutive Ones
 *
 * Link: https://leetcode.com/problems/max-consecutive-ones/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-04-22
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 *
 * Stats:
 * - Total Accepted: 2,250,954
 * - Total Submissions: 3,464,122
 * - Acceptance Rate: 65.0%
 *
 * Similar Problems:
 * - consecutive-characters (Easy)
 * - longer-contiguous-segments-of-ones-than-zeros (Easy)
 * - maximum-enemy-forts-that-can-be-captured (Easy)
 * - length-of-the-longest-alphabetical-continuous-substring (Medium)
 * - max-consecutive-ones-ii (Medium)
 * - max-consecutive-ones-iii (Medium)
 */

/**
 * Approach: Greedy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = (nums) => {
        let res = 0;
        let cnt = 0;

        for (const num of nums) {
                if (num === 0) {
                        res = Math.max(res, cnt);
                        cnt = 0;
                } else {
                        cnt++;
                }
        }

        return Math.max(res, cnt);
};

export { findMaxConsecutiveOnes };
