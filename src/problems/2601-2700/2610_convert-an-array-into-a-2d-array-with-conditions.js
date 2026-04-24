/**
 * 2610. Convert an Array Into a 2D Array With Conditions
 *
 * Link: https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-24
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 *
 * Stats:
 * - Total Accepted: 225,821
 * - Total Submissions: 261,490
 * - Acceptance Rate: 86.4%
 */

/**
 * Approach: Hash Map
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
const findMatrix = (nums) => {
        const map = new Map();
        const res = [];

        for (const num of nums) {
                const idx = (map.get(num) ?? -1) + 1;
                res[idx] ??= [];
                res[idx].push(num);
                map.set(num, idx);
        }

        return res;
};

/**
 * Approach: Hash Set
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
const findMatrix1 = (nums) => {
        const sets = [];

        outer: for (const num of nums) {
                for (const set of sets) {
                        if (!set.has(num)) {
                                set.add(num);
                                continue outer;
                        }
                }

                sets.push(new Set([num]));
        }

        const m = sets.length;
        const res = new Array(m);

        for (let i = 0; i < m; i++) {
                res[i] = Array.from(sets[i]);
        }

        return res;
};

export { findMatrix, findMatrix1 };
