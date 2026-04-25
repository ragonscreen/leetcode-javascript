/**
 * 1675. Minimize Deviation in Array
 *
 * Link: https://leetcode.com/problems/minimize-deviation-in-array/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-04-25
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Greedy (topic_17)
 * - Heap (Priority Queue) (topic_61050)
 * - Ordered Set (topic_61070)
 *
 * Stats:
 * - Total Accepted: 100,940
 * - Total Submissions: 187,002
 * - Acceptance Rate: 54.0%
 */

import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

/**
 * Approach: Greedy + Priority Queue
 * Time Complexity: O(n log m log n)
 * Space Complexity: O(n)
 * `n` = length of `nums`, `m` = maximum value of `nums[i]`
 *
 * @param {number[]} nums
 * @return {number}
 */
const minimumDeviation = (nums) => {
        let min = Number.MAX_SAFE_INTEGER;

        for (let i = 0; i < nums.length; i++) {
                const num = nums[i];
                const val = num % 2 ? num * 2 : num;
                min = Math.min(min, val);
                nums[i] = val;
        }

        const maxq = new MaxPriorityQueue(null, nums);
        let res = Number.MAX_SAFE_INTEGER;

        while (maxq.size()) {
                const max = maxq.dequeue();
                res = Math.min(res, max - min);

                // max is odd, cannot decrease further
                if (max % 2) {
                        break;
                }

                const val = max / 2;
                maxq.enqueue(val);
                min = Math.min(min, val);
        }

        return res;
};

export { minimumDeviation };
