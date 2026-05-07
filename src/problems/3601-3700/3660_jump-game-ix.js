/**
 * 3660. Jump Game IX
 *
 * Link: https://leetcode.com/problems/jump-game-ix/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-07
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Dynamic Programming (topic_13)
 *
 * Stats:
 * - Total Accepted: 38,747
 * - Total Submissions: 107,410
 * - Acceptance Rate: 36.1%
 */

import { Queue } from '@datastructures-js/queue';

/**
 * Approach: Prefix Max
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const maxValue = (nums) => {
        const n = nums.length;
        const mxs = new Uint32Array(n);
        const mns = new Uint32Array(n);
        mxs[0] = nums[0];
        mns[n - 1] = nums[n - 1];

        for (let i = 1; i < n; i++) {
                const l = i;
                const r = n - i - 1;
                mxs[l] = Math.max(nums[l], mxs[l - 1]);
                mns[r] = Math.min(nums[r], mns[r + 1]);
        }

        const res = new Uint32Array(n);
        res[n - 1] = mxs[n - 1];

        for (let i = n - 2; i > -1; i--) {
                // every element to the right of `i` can reach
                // the minimum value `mns[i + 1]`. thus if `mxs[i]`
                // is greater than this minimum value,
                // the element at `i` can also reach the best value
                // jumps from nums[i] -> mxs[i] -> mns[i + 1] -> best value
                res[i] = mxs[i] > mns[i + 1] ? res[i + 1] : mxs[i];
        }

        return res;
};

/**
 * Approach: Monotonic Stack
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const maxValue1 = (nums) => {
        const n = nums.length;
        const stack = [];

        for (let i = 0; i < n; i++) {
                const num = nums[i];
                let curr = { val: num, l: i, r: i };

                while (stack.length && stack.at(-1).val > num) {
                        const top = stack.pop();

                        // connect left and right
                        // if value can go left, then all components to the left are connected
                        curr = {
                                val: Math.max(top.val, curr.val),
                                l: top.l,
                                r: curr.r,
                        };
                }

                stack.push(curr);
        }

        const res = new Uint32Array(n);

        for (const { val, l, r } of stack) {
                for (let i = l; i <= r; i++) {
                        res[i] = val;
                }
        }

        return res;
};

/**
 * Approach: BFS [TLE]
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const maxValue2 = (nums) => {
        const n = nums.length;

        const bfs = (i0) => {
                const q = new Queue([i0]);
                const visited = new Uint8Array(n);
                visited[i0] = 1;
                let res = nums[i0];

                while (q.size()) {
                        const idx = q.dequeue();
                        const num = nums[idx];
                        res = Math.max(res, num);

                        for (let i = idx + 1; i < n; i++) {
                                if (visited[i] || nums[i] >= num) {
                                        continue;
                                }

                                if (best[i] > num) {
                                        res = Math.max(res, best[i]);
                                        continue;
                                }

                                q.enqueue(i);
                                visited[i] = 1;
                        }

                        for (let i = idx - 1; i > -1; i--) {
                                if (visited[i] || nums[i] <= num) {
                                        continue;
                                }

                                if (best[i] > num) {
                                        res = Math.max(res, best[i]);
                                        continue;
                                }

                                q.enqueue(i);
                                visited[i] = 1;
                        }
                }

                return res;
        };

        const best = new Int32Array(n).fill(-1);

        for (let i = 0; i < n; i++) {
                const val = bfs(i);
                best[i] = val;
        }

        return best;
};

export { maxValue, maxValue1, maxValue2 };
