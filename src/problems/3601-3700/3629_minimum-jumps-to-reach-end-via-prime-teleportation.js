/**
 * 3629. Minimum Jumps to Reach End via Prime Teleportation
 *
 * Link: https://leetcode.com/problems/minimum-jumps-to-reach-end-via-prime-teleportation/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-05-08
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - Hash Table (topic_6)
 * - Math (topic_8)
 * - Breadth-First Search (topic_22)
 * - Number Theory (topic_61067)
 *
 * Stats:
 * - Total Accepted: 68,356
 * - Total Submissions: 158,211
 * - Acceptance Rate: 43.2%
 */

import { Queue } from '@datastructures-js/queue';

/**
 * Approach: Math + BFS
 * Time Complexity: O(n * sqrt(n))
 * Space Complexity: O(n + k)
 * `n` = length of `nums`, `k` = maximum value of `nums[i]`
 *
 * @param {number[]} nums
 * @return {number}
 */
const minJumps = (nums) => {
        const n = nums.length;
        const max = Math.max(...nums);
        const buckets = new Array(max + 1);

        for (let i = 0; i < n; i++) {
                const factors = gpf(nums[i]);

                for (const p of factors) {
                        buckets[p] ??= [];
                        buckets[p].push(i);
                }
        }

        const q = new Queue([0]);
        const visited = new Uint8Array(n);
        visited[0] = 1;
        let res = 0;

        while (q.size()) {
                const sz = q.size();

                for (let i = 0; i < sz; i++) {
                        const idx = q.dequeue();

                        if (idx === n - 1) {
                                return res;
                        }

                        const indices = buckets[nums[idx]] ?? [];
                        indices.push(idx + 1);

                        if (idx > 0) {
                                indices.push(idx - 1);
                        }

                        buckets[nums[idx]] = [];

                        for (const j of indices) {
                                if (visited[j]) {
                                        continue;
                                }

                                visited[j] = 1;
                                q.enqueue(j);
                        }
                }

                res++;
        }
};

const gpf = (num) => {
        const factors = [];
        let x = num;

        if (x % 2 === 0) {
                factors.push(2);

                while (x % 2 === 0) {
                        x /= 2;
                }
        }

        for (let i = 3; i <= Math.floor(Math.sqrt(x)); i += 2) {
                if (x % i) {
                        continue;
                }

                factors.push(i);

                while (x % i === 0) {
                        x /= i;
                }
        }

        if (x > 1) {
                factors.push(x);
        }

        return factors;
};

export { minJumps };
