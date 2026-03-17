/**
 * 2810. Faulty Keyboard
 *
 * Link: https://leetcode.com/problems/faulty-keyboard/
 * Category: Algorithms
 * Difficulty: Easy
 * Date: 2026-02-06
 * Author: ragonscreen (https://github.com/ragonscreen/)
 *
 * Topics:
 * - String (topic_10)
 * - Simulation (topic_61055)
 *
 * Stats:
 * - Total Accepted: 118,020
 * - Total Submissions: 147,421
 * - Acceptance Rate: 80.1%
 *
 * Similar Problems:
 * - find-the-original-typed-string-i (Easy)
 * - reverse-only-letters (Easy)
 * - reverse-string-ii (Easy)
 * - reverse-vowels-of-a-string (Easy)
 * - find-the-original-typed-string-ii (Hard)
 */

/**
 * Approach: Deque + Two Pointers [Optimal]
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} s
 * @return {string}
 */
const finalString = (s) => {
        const n = s.length;
        const dq = new Array(n * 2);
        let dir = 1;
        let l = -1;
        let r = 0;

        for (const c of s) {
                if (c === 'i') {
                        dir *= -1;
                        continue;
                }

                const p = dir === 1 ? r++ : l--;
                dq[p + n] = c;
        }

        return dir === 1 ? dq.join('') : dq.reverse().join('');
};

/**
 * Approach: Simulation
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 *
 * @param {string} s
 * @return {string}
 */
const finalString1 = (s) => {
        const res = [];

        for (const c of s) {
                if (c === 'i') {
                        res.reverse();
                } else {
                        res.push(c);
                }
        }

        return res.join('');
};

export { finalString, finalString1 };
