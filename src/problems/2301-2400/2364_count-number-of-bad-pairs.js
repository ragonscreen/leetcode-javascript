/**
 * 2364. Count Number of Bad Pairs
 *
 * Link: https://leetcode.com/problems/count-number-of-bad-pairs/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-24
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Math (topic_8)
 * - Counting (topic_61062)
 *
 * Stats:
 * - Total Accepted: 186,538
 * - Total Submissions: 344,147
 * - Acceptance Rate: 54.2%
 *
 * Similar Problems:
 * - count-equal-and-divisible-pairs-in-an-array (Easy)
 * - count-number-of-pairs-with-absolute-difference-k (Easy)
 * - count-nice-pairs-in-an-array (Medium)
 * - k-diff-pairs-in-an-array (Medium)
 * - subarray-sums-divisible-by-k (Medium)
 * - number-of-pairs-satisfying-inequality (Hard)
 */

/**
 * Approach: Hash Map
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
const countBadPairs = (nums) => {
        const n = nums.length;
        const map = new Map();
        let res = 0;

        for (let i = 0; i < n; i++) {
                const diff = i - nums[i];
                const cnt = map.get(diff) || 0;
                res += cnt;
                map.set(diff, cnt + 1);
        }

        return (n * (n - 1)) / 2 - res;
};

export { countBadPairs };
