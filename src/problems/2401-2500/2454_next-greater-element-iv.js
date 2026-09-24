/**
 * 2454. Next Greater Element IV
 *
 * Link: https://leetcode.com/problems/next-greater-element-iv/
 * Category: Algorithms
 * Difficulty: Hard
 * Date: 2026-09-24
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 *
 * - Array (topic_5)
 * - Binary Search (topic_11)
 * - Stack (topic_15)
 * - Sorting (topic_61049)
 * - Heap (Priority Queue) (topic_61050)
 * - Monotonic Stack (topic_61054)
 * - Senior Staff (position_senior-staff)
 * - Biweekly Contest 90 (contest_biweekly-contest-90)
 *
 * Stats:
 *
 * - Total Accepted: 21,262
 * - Total Submissions: 49,383
 * - Acceptance Rate: 43.1%
 *
 * Similar Problems:
 *
 * - next-greater-element-i (Easy)
 * - replace-elements-with-greatest-element-on-right-side (Easy)
 * - apply-operations-to-maximize-score (Hard)
 */

import { PriorityQueue } from '@datastructures-js/priority-queue';

/**
 * Approach: Monotonic Stack [II]
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * `n` = `nums.length`
 *
 * This builds on Monotonic Stack [I] but violates the stack principle. This is purely an
 * optimisation, and it is only possible because of the flat fixed size array used as the stack. At
 * each step, it emulates undoing the pop operation on the first stack and pushing the numbers into
 * the second stack while preserving order. This would not be possible with a traditional stack
 * without a temporary intermediate stack, which is exactly what Monotonic Stack [I] does.
 *
 * @param {number[]} nums
 * @returns {number[]}
 */
const secondGreaterElement = (nums) => {
        const n = nums.length;
        const st1 = new Uint32Array(n);
        const st2 = new Uint32Array(n);
        const res = new Int32Array(n).fill(-1);
        let sp1 = 0;
        let sp2 = 0;

        for (let i = 0; i < n; i++) {
                const num = nums[i];

                while (sp2 > 0 && num > nums[st2[sp2 - 1]]) res[st2[--sp2]] = num;

                const pre = sp1;

                while (sp1 > 0 && num > nums[st1[sp1 - 1]]) sp1--;

                for (let cur = sp1; cur < pre; cur++) st2[sp2++] = st1[cur];

                st1[sp1++] = i;
        }

        return res;
};

/**
 * Approach: Monotonic Stack [I]
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * `n` = `nums.length`
 *
 * The numbers from the first stack cannot directly be pushed into the second stack as that does
 * not preserve order. To solve this issue we need a third stack, an intermediate one which ensures
 * that elements are pushed in order.
 *
 * @param {number[]} nums
 * @returns {number[]}
 */
const secondGreaterElement1 = (nums) => {
        const n = nums.length;
        const st1 = new Uint32Array(n);
        const st2 = new Uint32Array(n); // first greater element seen
        const st3 = new Uint32Array(n); // temp stack to transfer to `st2` preserving order
        const res = new Int32Array(n).fill(-1);
        let sp1 = 0;
        let sp2 = 0;

        for (let i = 0; i < n; i++) {
                const num = nums[i];

                while (sp2 > 0 && num > nums[st2[sp2 - 1]]) res[st2[--sp2]] = num;

                let sp3 = 0;

                while (sp1 > 0 && num > nums[st1[sp1 - 1]]) st3[sp3++] = st1[--sp1];

                while (sp3 > 0) st2[sp2++] = st3[--sp3];

                st1[sp1++] = i;
        }

        return res;
};

/**
 * Approach: Monotonic Stack + Priority Queue
 * Time Complexity: O(n lg n)
 * Space Complexity: O(n)
 * `n` = `nums.length`
 *
 * @param {number[]} nums
 * @returns {number[]}
 */
const secondGreaterElement2 = (nums) => {
        const n = nums.length;
        const res = new Int32Array(n).fill(-1);
        const pq = new PriorityQueue((i, j) => nums[i] - nums[j]);
        const st = new Uint32Array(n);
        let sp = 0;

        for (let i = 0; i < n; i++) {
                const num = nums[i];

                while (pq.size() && num > nums[pq.front()]) res[pq.dequeue()] = num;

                while (sp > 0 && num > nums[st[sp - 1]]) pq.enqueue(st[--sp]);

                st[sp++] = i;
        }

        return res;
};

export { secondGreaterElement, secondGreaterElement1, secondGreaterElement2 };
