/**
 * 1338. Reduce Array Size to The Half
 *
 * Link: https://leetcode.com/problems/reduce-array-size-to-the-half/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-10-17
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Greedy (topic_17)
 * - Sorting (topic_61049)
 * - Heap (Priority Queue) (topic_61050)
 * - Senior (position_senior)
 * - Weekly Contest 174 (contest_weekly-contest-174)
 *
 * Stats:
 *
 * - Total Accepted: 242,517
 * - Total Submissions: 348,983
 * - Acceptance Rate: 69.5%
 */

/**
 * Approach: Sorting + Greedy
 * Time Complexity: O(n + K lg K)
 * Space Complexity: O(K)
 * `n` = `arr.length`, `K` = `max(nums[i])`
 *
 * @param {number[]} arr
 * @returns {number}
 */
const minSetSize = (arr) => {
        const req = (arr.length + 1) >> 1;
        const mx = Math.max(...arr);
        const frq = new Uint32Array(mx + 1);

        for (const num of arr) frq[num]++;

        frq.sort();
        let res = 0;

        for (let i = mx, cur = 0; i > -1 && cur < req; i--) {
                if (frq[i] === 0) continue;

                cur += frq[i];
                res++;
        }

        return res;
};

export { minSetSize };
