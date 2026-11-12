/**
 * 704. Binary Search
 *
 * Link: https://leetcode.com/problems/binary-search/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-03-30 (Updated: 2026-11-12)
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Binary Search (topic_11)
 *
 * Stats:
 *
 * - Total Accepted: 3,834,537
 * - Total Submissions: 6,320,826
 * - Acceptance Rate: 60.7%
 *
 * Similar Problems:
 *
 * - maximum-count-of-positive-integer-and-negative-integer (Easy)
 * - search-in-a-sorted-array-of-unknown-size (Medium)
 */

/**
 * Approach: Binary Search
 * Time Complexity: O(lg n)
 * Space Complexity: O(1)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns {number}
 */
const search = (nums, target) => {
        const n = nums.length;

        if (target < nums[0] || target > nums[n - 1]) return -1;

        let ok = 0;
        let ng = n;

        while (ng - ok > 1) {
                const mid = (ok + ng) >> 1;

                if (nums[mid] <= target) ok = mid;
                else ng = mid;
        }

        return nums[ok] === target ? ok : -1;
};

/**
 * Approach: Ternary Search
 * Time Complexity: O(log_3 n)
 * Space Complexity: O(1)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns {number}
 */
const search1 = (nums, target) => {
        const n = nums.length;

        if (target < nums[0] || target > nums[n - 1]) return -1;

        let ok = 0;
        let ng = n;

        while (ng - ok > 1) {
                const m1 = ok + Math.floor((ng - ok) / 3);
                const m2 = ok + Math.floor(((ng - ok) << 1) / 3);

                if (target < nums[m1]) {
                        ng = m1;
                } else if (target < nums[m2]) {
                        ok = m1;
                        ng = m2;
                } else {
                        ok = m2;
                }
        }

        return nums[ok] === target ? ok : -1;
};

export { search, search1 };
