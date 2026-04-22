/**
 * 2870. Minimum Number of Operations to Make Array Empty
 *
 * Link: https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-23
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Greedy (topic_17)
 * - Counting (topic_61062)
 *
 * Stats:
 * - Total Accepted: 198,885
 * - Total Submissions: 320,258
 * - Acceptance Rate: 62.1%
 */

/**
 * Approach: Greedy
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
const minOperations = (nums) => {
        const map = new Map();

        for (const num of nums) {
                map.set(num, (map.get(num) || 0) + 1);
        }

        let res = 0;

        for (const val of map.values()) {
                if (val === 1) {
                        return -1;
                }

                res += Math.ceil(val / 3);
        }

        return res;
};

export { minOperations };
