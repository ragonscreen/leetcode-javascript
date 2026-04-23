/**
 * 1769. Minimum Number of Operations to Move All Balls to Each Box
 *
 * Link: https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/
 * Category: Algorithms
 * Difficulty: Medium
 * Date: 2026-03-22 (Updated: 2026-04-23)
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - Array (topic_5)
 * - String (topic_10)
 * - Prefix Sum (topic_61068)
 *
 * Stats:
 * - Total Accepted: 336,149
 * - Total Submissions: 372,939
 * - Acceptance Rate: 90.1%
 *
 * Similar Problems:
 * - minimum-cost-to-move-chips-to-the-same-position (Easy)
 * - minimum-moves-to-spread-stones-over-grid (Medium)
 */

/**
 * Approach: Prefix Sum [One Pass]
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary, O(n) total
 *
 * @param {string} boxes
 * @return {number[]}
 */
const minOperations = (boxes) => {
        const n = boxes.length;
        const res = new Uint32Array(n);
        let cntL = 0;
        let preL = 0;
        let cntR = 0;
        let preR = 0;

        for (let l = 0; l < n; l++) {
                res[l] += preL;
                cntL += boxes[l] ^ 0;
                preL += cntL;
                const r = n - 1 - l;
                res[r] += preR;
                cntR += boxes[r] ^ 0;
                preR += cntR;
        }

        return res;
};

/**
 * Approach: Prefix Sum
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary, O(n) total
 *
 * @param {string} boxes
 * @return {number[]}
 */
const minOperations1 = (boxes) => {
        const n = boxes.length;
        const res = new Uint32Array(n);
        let cnt = 0;
        let pre = 0;

        for (let i = 0; i < n; i++) {
                res[i] = pre;
                cnt += boxes[i] === '1';
                pre += cnt;
        }

        cnt = 0;
        pre = 0;

        for (let i = n - 1; i > -1; i--) {
                res[i] += pre;
                cnt += boxes[i] === '1';
                pre += cnt;
        }

        return res;
};

/**
 * Approach: Math + Simulation
 * Time Complexity: O(n * k)
 * Space Complexity: O(k) auxiliary, O(n + k) total
 * `n` = length of `boxes`, `k` = number of 1s in `boxes`
 *
 * @param {string} boxes
 * @return {number[]}
 */
const minOperations2 = (boxes) => {
        const n = boxes.length;
        const balls = [];

        for (let i = 0; i < n; i++) {
                if (boxes[i] === '1') {
                        balls.push(i);
                }
        }

        const res = new Array(n);

        for (let i = 0; i < n; i++) {
                let sum = 0;

                for (const ball of balls) {
                        sum += Math.abs(i - ball);
                }

                res[i] = sum;
        }

        return res;
};

export { minOperations, minOperations1, minOperations2 };
