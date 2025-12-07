/**
 * 0001. Two Sum
 * Link: https://leetcode.com/problems/two-sum/
 * Difficulty: Easy
 * Date: 2025-12-07
 * Author: ragonscreen
 */

/**
 * Implementation: Hash Map
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
                const num = nums[i];
                const pair = target - num;
                const pairIdx = map.get(pair);

                if (pairIdx !== undefined) {
                        return [i, pairIdx];
                }

                map.set(num, i);
        }

        return [];
};

export default twoSum;
