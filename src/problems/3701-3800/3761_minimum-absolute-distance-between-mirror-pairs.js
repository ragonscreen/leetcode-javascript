/**
 * 3761. Minimum Absolute Distance Between Mirror Pairs
 *
 * Link: https://leetcode.com/problems/minimum-absolute-distance-between-mirror-pairs/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-04-17
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Math (topic_8)
 *
 * Stats:
 * - Total Accepted: 65,620
 * - Total Submissions: 117,315
 * - Acceptance Rate: 55.9%
 */

/**
 * Approach: Hash Map
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
const minMirrorPairDistance = (nums) => {
        const r = (num) => {
                let n = num;
                let res = 0;

                while (n) {
                        res = 10 * res + (n % 10);
                        n = Math.floor(n / 10);
                }

                return res;
        };

        const n = nums.length;
        const map = new Map();
        let res = n;

        for (let j = 0; j < n; j++) {
                const num = nums[j];
                const i = map.get(num);

                if (i !== undefined) {
                        res = Math.min(res, j - i);
                }

                map.set(r(num), j);
        }

        return res === n ? -1 : res;
};

export { minMirrorPairDistance };
