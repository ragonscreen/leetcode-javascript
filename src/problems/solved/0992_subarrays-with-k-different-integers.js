/**
 * 0992. Subarrays with K Different Integers
 * Link: https://leetcode.com/problems/subarrays-with-k-different-integers/
 * Difficulty: Hard
 * Date: 2026-03-17
 * Author: ragonscreen (https://github.com/ragonscreen/)
 */

/**
 * Implementation: Sliding Window + Three Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraysWithKDistinct = (nums, k) => {
        const map = new Map();
        let res = 0;
        let l = 0;
        let m = 0;

        for (const num of nums) {
                map.set(num, (map.get(num) || 0) + 1);

                if (map.size > k) {
                        while (map.size > k) {
                                const v = nums[m];
                                map.set(v, map.get(v) - 1);

                                if (map.get(v) === 0) {
                                        map.delete(v);
                                }

                                m++;
                        }

                        l = m;
                }

                while (map.get(nums[m]) > 1) {
                        const v = nums[m];
                        map.set(v, map.get(v) - 1);
                        m++;
                }

                if (map.size === k) {
                        res += m - l + 1;
                }
        }

        return res;
};

export { subarraysWithKDistinct };
