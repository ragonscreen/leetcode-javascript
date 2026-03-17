/**
 * 0992. Subarrays with K Different Integers
 *
 * Link: https://leetcode.com/problems/subarrays-with-k-different-integers/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-03-17
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Sliding Window (topic_55821)
 * - Counting (topic_61062)
 *
 * Stats:
 * - Total Accepted: 384,238
 * - Total Submissions: 567,233
 * - Acceptance Rate: 67.7%
 *
 * Similar Problems:
 * - count-vowel-substrings-of-a-string (Easy)
 * - count-complete-subarrays-in-an-array (Medium)
 * - k-divisible-elements-subarrays (Medium)
 * - longest-substring-with-at-most-k-distinct-characters (Medium)
 * - longest-substring-with-at-most-two-distinct-characters (Medium)
 * - longest-substring-without-repeating-characters (Medium)
 * - number-of-unique-flavors-after-sharing-k-candies (Medium)
 */

/**
 * Approach: Sliding Window + Three Pointers
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
