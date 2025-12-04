/**
 * 0217. Contains Duplicate
 * Link: https://leetcode.com/problems/contains-duplicate/
 * Difficulty: Easy
 * Date: 2025-12-04
 * Author: ragonscreen
 */

/**
 * Implementation: Hash Set
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
        const set = new Set();

        for (const num of nums) {
                if (set.has(num)) {
                        return true;
                }

                set.add(num);
        }

        return false;
};

export default containsDuplicate;
